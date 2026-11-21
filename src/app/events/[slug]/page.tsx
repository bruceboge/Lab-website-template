import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EVENTS_DATA } from "@/data/events";
import { LabVisual } from "@/components/LabVisual";
import { EventRsvpForm } from "./_components/EventRsvpForm";

export function generateStaticParams() {
  return EVENTS_DATA.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENTS_DATA.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: `${event.title} · DICEL Events`,
    description: event.summary,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = EVENTS_DATA.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

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
                <Link href="/events">Events</Link>
              </li>
              <li>
                <span className="breadcrumb-divider" aria-hidden="true">
                  /
                </span>
                <span aria-current="page">{event.title}</span>
              </li>
            </ol>
          </nav>

          <div className="project-detail-hero-meta">
            <span className="eyebrow">{event.kind}</span>
            <span className="tag-status">
              {event.status === "upcoming" ? "Registration Open" : "Past Event"}
            </span>
          </div>

          <h1>{event.title}</h1>
          <p>{event.summary}</p>
        </div>
      </header>

      {/* Event Details Quick Strip */}
      <div className="container" style={{ marginTop: "-24px", position: "relative", zIndex: 3 }}>
        <div className="proof-strip">
          <div className="proof-item">
            <small>Date</small>
            <span><b>{event.date}</b></span>
          </div>
          <div className="proof-item">
            <small>Time</small>
            <span><b>{event.time}</b></span>
          </div>
          <div className="proof-item">
            <small>Venue</small>
            <span><b>{event.venue}</b></span>
          </div>
          <div className="proof-item">
            <small>Audience</small>
            <span><b>DeKUT Students & Researchers</b></span>
          </div>
        </div>
      </div>

      <section className="section event-detail-body">
        <div className="container project-detail-grid">
          <div className="project-detail-content">
            <article className="project-detail-section">
              <span className="eyebrow">About this Event</span>
              <h2>Overview & Key Objectives</h2>
              <p>{event.description}</p>
            </article>

            {/* Agenda Timeline */}
            <article className="project-detail-section">
              <span className="eyebrow">Event Schedule</span>
              <h2>Detailed Programme & Sessions</h2>
              <div className="timeline" style={{ marginTop: 20 }}>
                {event.agenda.map((slot) => (
                  <div className="timeline-item" key={slot.time}>
                    <b>{slot.time} · {slot.session}</b>
                    <p style={{ margin: "4px 0 0", color: "var(--accent)", fontSize: "13.5px" }}>
                      Presenter: {slot.speaker}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {/* Speakers */}
            <article className="project-detail-section">
              <span className="eyebrow">Facilitators & Presenters</span>
              <h2>Featured Speakers</h2>
              <div className="grid-2" style={{ marginTop: 16 }}>
                {event.speakers.map((spk) => (
                  <div className="card" key={spk.name} style={{ padding: 20 }}>
                    <h3 style={{ fontSize: "18px", margin: "0 0 4px", color: "var(--text)" }}>
                      {spk.name}
                    </h3>
                    <span className="eyebrow" style={{ color: "var(--gold)" }}>
                      {spk.title}
                    </span>
                    <p style={{ fontSize: "12.5px", margin: "4px 0 0", color: "var(--muted)" }}>
                      {spk.affiliation}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <div className="project-nav-back">
              <Link href="/events" className="button secondary">
                ← Back to All Events
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="project-detail-sidebar">
            <div className="card sidebar-card">
              <LabVisual kind={event.visualKind} showBadge={false} />
              <div className="sidebar-copy">
                {event.status === "upcoming" ? (
                  <>
                    <span className="eyebrow">RSVP & Attendance</span>
                    <h3>Register Your Interest</h3>
                    <p>Send an interest request to the lab. The team will confirm whether a place is available.</p>
                    <EventRsvpForm eventSlug={event.slug} />
                  </>
                ) : (
                  <>
                    <span className="eyebrow">Event Completed</span>
                    <h3>Materials & Recordings</h3>
                    <p>
                      Presentation slides and workshop lab exercises are archived and available for enrolled students upon request.
                    </p>
                    <Link className="button secondary" style={{ width: "100%" }} href="/contact">
                      Request Event Slides →
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="card sidebar-card" style={{ marginTop: 20 }}>
              <span className="eyebrow">Location Help</span>
              <h3>Venue Information</h3>
              <p>
                <b>{event.venue}</b>
                <br />
                Origin Labs, Ground Floor
                <br />
                Dedan Kimathi University of Technology
                <br />
                Nyeri, Kenya
              </p>
              <a
                className="button button-outline-green"
                href="https://maps.google.com/?q=Dedan+Kimathi+University+of+Technology"
                target="_blank"
                rel="noreferrer"
              >
                Directions in Google Maps ↗
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
