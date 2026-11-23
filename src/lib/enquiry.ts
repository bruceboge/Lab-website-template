import { enquirySchema } from "@/lib/schemas";
import { sendLabEmail } from "@/lib/email";

type EnquiryPurpose = "Contact" | "Donation" | "Partnership";

export async function handleEnquiry(request: Request, purpose: EnquiryPurpose) {
  try {
    const formData = await request.formData();
    const parsed = enquirySchema.safeParse(Object.fromEntries(formData));

    if (!parsed.success) {
      return Response.json(
        { ok: false, message: "Please check the required fields and enter a valid email." },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return Response.json({ ok: true, message: "Thank you for reaching out." });
    }

    const { name, email, subject, message } = parsed.data;
    const delivery = await sendLabEmail({
      subject: `DICEL ${purpose.toLowerCase()} enquiry: ${subject}`,
      text: [`Type: ${purpose}`, `Name: ${name}`, `Email: ${email}`, `Subject: ${subject}`, "", message].join("\n"),
    });

    if (delivery === "not-configured") {
      return Response.json(
        { ok: false, message: "Online message delivery is not configured yet. Please email deice@dkut.ac.ke directly." },
        { status: 200 },
      );
    }

    if (delivery === "failed") {
      return Response.json(
        { ok: false, message: "We could not deliver your message. Please try again or email deice@dkut.ac.ke directly." },
        { status: 502 },
      );
    }

    return Response.json({
      ok: true,
      message: "Thank you. Your message was sent to the lab team.",
    });
  } catch {
    return Response.json(
      { ok: false, message: "Unable to process your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
