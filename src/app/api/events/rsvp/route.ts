import { EVENTS_DATA } from "@/data/events";
import { sendLabEmail } from "@/lib/email";
import { eventRsvpSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const parsed = eventRsvpSchema.safeParse(await request.json());

    if (!parsed.success) {
      return Response.json({ ok: false, message: "Enter your name and a valid email address." }, { status: 400 });
    }

    const event = EVENTS_DATA.find((item) => item.slug === parsed.data.eventSlug);
    if (!event) {
      return Response.json({ ok: false, message: "This event could not be found." }, { status: 404 });
    }
    if (event.status !== "upcoming") {
      return Response.json({ ok: false, message: "Registration is closed for this event." }, { status: 409 });
    }

    const delivery = await sendLabEmail({
      subject: `Event interest: ${event.title}`,
      text: [`Event: ${event.title}`, `Date: ${event.date}`, `Name: ${parsed.data.name}`, `Email: ${parsed.data.email}`].join("\n"),
    });

    if (delivery === "not-configured") {
      return Response.json(
        { ok: false, message: "Online registration is not configured yet. Please email deice@dkut.ac.ke directly." },
        { status: 503 },
      );
    }
    if (delivery === "failed") {
      return Response.json(
        { ok: false, message: "We could not send your registration request. Please try again or email deice@dkut.ac.ke directly." },
        { status: 502 },
      );
    }

    return Response.json({
      ok: true,
      message: "Your interest was sent to the lab. A place is not confirmed until the team replies.",
    });
  } catch {
    return Response.json({ ok: false, message: "Unable to send your request right now. Please try again later." }, { status: 500 });
  }
}
