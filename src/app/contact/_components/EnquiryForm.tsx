"use client";
import { FormEvent, useState } from "react";

export function EnquiryForm({ endpoint = "/api/contact", submit = "Send message", donation = false }: { endpoint?: string; submit?: string; donation?: boolean }) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [messageRole, setMessageRole] = useState<"status" | "alert">("status");
  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setBusy(true); setMessage("");
    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(formElement) });
      const result = await response.json() as { message?: string };
      setMessageRole(response.ok ? "status" : "alert");
      setMessage(result.message ?? "Thank you. Your enquiry has been received.");
      if (response.ok) formElement.reset();
    } catch {
      setMessageRole("alert");
      setMessage("We could not submit the form. Please try again later.");
    }
    finally { setBusy(false); }
  }
  return <form className="form" onSubmit={send} aria-busy={busy}>
    {donation && <><label>Contribution amount<select name="amount" defaultValue="5000"><option value="1000">KES 1,000</option><option value="5000">KES 5,000</option><option value="10000">KES 10,000</option><option value="custom">Custom amount · discuss with the lab</option></select></label><fieldset><legend>Frequency</legend><label><input type="radio" name="frequency" value="one-time" defaultChecked/> One-time</label><label><input type="radio" name="frequency" value="monthly"/> Monthly</label></fieldset></>}
    <label>Name<input name="name" required minLength={2} maxLength={100} autoComplete="name"/></label>
    <label>Email<input name="email" type="email" required maxLength={254} autoComplete="email"/></label>
    <label>Subject<input name="subject" required minLength={3} maxLength={160}/></label>
    <label>Message<textarea name="message" required minLength={10} maxLength={5000}/></label>
    <div aria-hidden="true" style={{position:"absolute",left:"-10000px"}}><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <button className="button" type="submit" disabled={busy}>{busy ? "Sending…" : submit}</button>
    {message && <p className="status" role={messageRole} aria-live={messageRole === "alert" ? "assertive" : "polite"}>{message}</p>}
  </form>;
}
