type EmailMessage = {
  subject: string;
  text: string;
};

export type EmailDelivery = "sent" | "not-configured" | "failed";

export async function sendLabEmail({ subject, text }: EmailMessage): Promise<EmailDelivery> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) return "not-configured";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to: [to], subject, text }),
    });

    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
