import { z } from "zod";
import { INVENTORY_ITEMS } from "@/data/inventory";
import { sendLabEmail } from "@/lib/email";

const borrowSchema = z.object({
  itemId: z.string().min(1),
  studentName: z.string().trim().min(2).max(100),
  studentId: z.string().trim().min(3).max(50),
  email: z.string().trim().email(),
  course: z.string().min(2),
  purpose: z.string().min(2),
  quantity: z.number().int().min(1).max(10),
  durationDays: z.number().int().min(1).max(60),
  supervisor: z.string().trim().max(100).optional(),
});

export async function POST(request: Request) {
  try {
    const result = borrowSchema.safeParse(await request.json());
    if (!result.success) {
      return Response.json({ ok: false, message: "Please check all required fields." }, { status: 400 });
    }
    const data = result.data;
    const item = INVENTORY_ITEMS.find((inventoryItem) => inventoryItem.id === data.itemId);
    if (!item) return Response.json({ ok: false, message: "This inventory item could not be found." }, { status: 404 });
    if (item.status !== "available" || data.quantity > item.availableQuantity) {
      return Response.json({ ok: false, message: "The requested quantity is not currently available." }, { status: 409 });
    }
    if (!item.courses.includes(data.course)) {
      return Response.json({ ok: false, message: "Select a course associated with this item." }, { status: 400 });
    }
    const reference = `DeICE-LN-${new Date().getFullYear()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + data.durationDays);
    const delivery = await sendLabEmail({
      subject: `Inventory loan request ${reference}`,
      text: [
        `Reference: ${reference}`, `Item: ${item.name} (${item.model})`, `Quantity: ${data.quantity}`,
        `Borrower: ${data.studentName} (${data.studentId})`, `Email: ${data.email}`, `Course: ${data.course}`,
        `Purpose: ${data.purpose}`,
        ...(data.supervisor ? [`Supervisor: ${data.supervisor}`] : []),
        `Requested duration: ${data.durationDays} days`,
      ].join("\n"),
    });
    if (delivery === "not-configured") {
      return Response.json({ ok: false, message: "Online loan requests are not configured yet. Please email deice@dkut.ac.ke." });
    }
    if (delivery === "failed") {
      return Response.json({ ok: false, message: "We could not deliver your loan request." }, { status: 502 });
    }
    return Response.json({
      ok: true,
      message: "Your request was sent to the lab for review.",
      receipt: {
        reference,
        itemId: data.itemId,
        itemName: item.name,
        studentName: data.studentName,
        studentId: data.studentId,
        course: data.course,
        quantity: data.quantity,
        dueDate: dueDate.toLocaleDateString("en-KE"),
        pickupLocation: "DeICE, DeKUT Integrated Circuit Engineering Laboratory, Dedan Kimathi University of Technology, Nyeri",
      },
    });
  } catch {
    return Response.json({ ok: false, message: "Unable to process loan request at this time." }, { status: 500 });
  }
}
