import type { Metadata } from "next";
import Link from "next/link";
import { EVENTS_DATA } from "@/data/events";
import { LabVisual } from "@/components/LabVisual";
import { DraftNotice } from "@/components/DraftNotice";

export const metadata: Metadata = {
  title: "Workshops, Seminars & Lab Events",
  description:
    "Join integrated circuit design workshops, VLSI research seminars, hackathons, and open lab days at Dedan Kimathi University of Technology.",
};

export default function EventsPage() {
  const upcomingEvents = EVENTS_DATA.filter((e) => e.status === "upcoming");
  const pastEvents = EVENTS_DATA.filter((e) => e.status === "past");

  return (
    <main id="main" tabIndex={-1} className="content-page">
      <header className="page-hero">
        <div className="container page-hero-inner">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span className="breadcrumb-divider" aria-hidden="true">
                  /
                </span>
                <span aria-current="page">Events</span>
              </li>
            </ol>
          </nav>
          <span className="eyebrow">Connect & Collaborate · Community Engineering</span>
          <h1>Workshops, Seminars & Events</h1>
          <p>
            Connect with the lab community through hands-on IC design sprints, guest research seminars, and student technology showcases at DeKUT Nyeri.
          </p>
        </div>
      </header>

      {/* Upcoming Events Section */}
      <div className="container draft-notice-wrap">
        <DraftNotice>Event dates, venues, speakers, and agendas need confirmation from the lab before attendees make plans.</DraftNotice>
      </div>

      <section className="section page-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Coming Up Next</span>
            <h2>Upcoming Events & Workshops</h2>
            <p>
              Register your interest to participate in hands-on VLSI workshops and attend technical research seminars.
            </p>
          </div>

          <div className="grid-3">
            {upcomingEvents.map((event) => (
              <Link
                className="card image-card event-card"
                href={`/events/${event.slug}`}
                key={event.slug}
              >
                <LabVisual kind={event.visualKind} showBadge={false} />
                <div className="inner-card-copy">
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span className="eyebrow">{event.kind}</span>
                    <span className="tag-status">Upcoming</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p style={{ fontSize: "13px", color: "var(--gold)", fontWeight: 600, margin: "4px 0 10px" }}>
                    Date & time: {event.date} · {event.time}
                  </p>
                  <p style={{ fontSize: "12.5px", color: "var(--muted)", marginBottom: 12 }}>
                    Venue: {event.venue}
                  </p>
                  <p style={{ fontSize: "13.5px", lineHeight: "1.6" }}>{event.summary}</p>
                  <span className="card-foot" style={{ marginTop: "auto", paddingTop: 16 }}>
                    <b style={{ color: "var(--accent)" }}>View Programme & Register →</b>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Past Events Section */}
          <div className="section-head" style={{ marginTop: 64 }}>
            <span className="eyebrow">Archive</span>
            <h2>Past Events & Hackathons</h2>
            <p>
              Review proceedings, topics, and outcomes from past engineering sprints and open showcases.
            </p>
          </div>

          <div className="grid-3">
            {pastEvents.map((event) => (
              <Link
                className="card image-card event-card"
                href={`/events/${event.slug}`}
                key={event.slug}
              >
                <LabVisual kind={event.visualKind} showBadge={false} />
                <div className="inner-card-copy">
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span className="eyebrow">{event.kind}</span>
                    <span className="tag-status" style={{ background: "#f3f5f3", color: "#617065", borderColor: "#e0e5e1" }}>
                      Completed
                    </span>
                  </div>
                  <h3>{event.title}</h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", margin: "4px 0 10px" }}>
                    Date: {event.date}
                  </p>
                  <p style={{ fontSize: "13.5px", lineHeight: "1.6" }}>{event.summary}</p>
                  <span className="card-foot" style={{ marginTop: "auto", paddingTop: 16 }}>
                    <b>View Event Summary →</b>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event Callout */}
      <section className="section compact">
        <div className="container callout">
          <div>
            <span className="eyebrow">Host or Speak</span>
            <h2>Interested in Giving a Seminar or Hosting a Workshop?</h2>
            <p>
              We welcome visiting researchers, IEEE chapters, and industry practitioners to give guest lectures or mentor student workshops at Origin Labs.
            </p>
          </div>
          <Link className="button button-gold" href="/contact">
            Propose a Session →
          </Link>
        </div>
      </section>
    </main>
  );
}
