import { z } from "zod";
import { INVENTORY_ITEMS } from "@/data/inventory";
import { sendLabEmail } from "@/lib/email";

const borrowSchema = z.object({
  itemId: z.string().min(1),
  studentName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  studentId: z.string().trim().min(3, "Student/Staff ID required").max(50),
  email: z.string().trim().email("Valid email required"),
  course: z.string().min(2),
  purpose: z.string().min(2),
  quantity: z.number().int().min(1).max(10),
  durationDays: z.number().int().min(1).max(60),
  supervisor: z.string().trim().min(2),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = borrowSchema.safeParse(json);

    if (!result.success) {
      return Response.json(
        {
          ok: false,
          message: result.error.issues[0]?.message ?? "Please check all required fields.",
        },
        { status: 400 }
      );
    }

    const data = result.data;
    const item = INVENTORY_ITEMS.find((inventoryItem) => inventoryItem.id === data.itemId);

    if (!item) {
      return Response.json({ ok: false, message: "This inventory item could not be found." }, { status: 404 });
    }

    if (item.status !== "available" || data.quantity > item.availableQuantity) {
      return Response.json(
        { ok: false, message: "The requested quantity is not currently available. Please contact the lab to confirm stock." },
        { status: 409 },
      );
    }

    if (!item.courses.includes(data.course)) {
      return Response.json({ ok: false, message: "Select a course associated with this item." }, { status: 400 });
    }

    // Calculate due date
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + data.durationDays);
    const dueDateFormatted = returnDate.toLocaleDateString("en-KE", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    // Generate unique loan reference code
    const reference = `DICEL-LN-${new Date().getFullYear()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;

    const delivery = await sendLabEmail({
      subject: `Inventory loan request ${reference}`,
      text: [
        `Reference: ${reference}`,
        `Item: ${item.name} (${item.model})`,
        `Quantity: ${data.quantity}`,
        `Borrower: ${data.studentName} (${data.studentId})`,
        `Email: ${data.email}`,
        `Course: ${data.course}`,
        `Purpose: ${data.purpose}`,
        `Supervisor: ${data.supervisor}`,
        `Requested duration: ${data.durationDays} days`,
      ].join("\n"),
    });

    if (delivery === "not-configured") {
      return Response.json(
        { ok: false, message: "Online loan requests are not configured yet. Please email deice@dkut.ac.ke to request this item." },
        { status: 503 },
      );
    }

    if (delivery === "failed") {
      return Response.json(
        { ok: false, message: "We could not deliver your loan request. Please try again or email deice@dkut.ac.ke directly." },
        { status: 502 },
      );
    }

    const receipt = {
      reference,
      itemId: data.itemId,
      itemName: item.name,
      studentName: data.studentName,
      studentId: data.studentId,
      course: data.course,
      quantity: data.quantity,
      dueDate: dueDateFormatted,
      pickupLocation: "Origin Labs · CDED Ground Floor, DeKUT Nyeri Campus",
    };

    return Response.json(
      {
        ok: true,
        message: "Your request was sent to the lab for review. This reference confirms submission, not a reservation.",
        receipt,
      },
      { status: 200 }
    );
  } catch {
    return Response.json(
      {
        ok: false,
        message: "Unable to process loan request at this time. Please try again later.",
      },
      { status: 500 }
    );
  }
}
