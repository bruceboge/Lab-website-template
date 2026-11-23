"use client";
import { FormEvent, useState } from "react";

export function EventRsvpForm({ eventSlug }: { eventSlug: string }) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    try {
      const response = await fetch("/api/events/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventSlug,
          name: form.get("name"),
          email: form.get("email"),
        }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };
      setHasError(!(response.ok && result.ok !== false));
      setMessage(result.message ?? "Unable to send your request right now.");
      if ((response.ok && result.ok !== false)) formElement.reset();
    } catch {
      setHasError(true);
      setMessage("Unable to send your request right now. Please try again later.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="form event-rsvp-form" onSubmit={submit} aria-busy={busy}>
      <label>
        Name
        <input name="name" required minLength={2} maxLength={100} autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required maxLength={254} autoComplete="email" />
      </label>
      <button className="button button-gold" type="submit" disabled={busy}>
        {busy ? "Sending…" : "Send interest request"}
      </button>
      {message && (
        <p className="status" role={hasError ? "alert" : "status"} aria-live={hasError ? "assertive" : "polite"}>
          {message}
        </p>
      )}
    </form>
  );
}
