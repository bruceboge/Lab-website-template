import Link from "@/components/next-link";
import { EVENTS_DATA } from "@/data/events";

export const metadata = {
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
          <h1>Workshops, Seminars & Events</h1>
          <p>
            Connect with the lab community through hands-on IC design sprints, guest research seminars, and student technology showcases at DeKUT Nyeri.
          </p>
        </div>
      </header>

      {/* Upcoming Events Section */}
      <section className="section page-section">
        <div className="container">
          <div className="section-head">
            <h2>Upcoming Events & Workshops</h2>
            <p>
              Register your interest to participate in hands-on VLSI workshops and attend technical research seminars.
            </p>
          </div>

          <div className="event-list">
            {upcomingEvents.map((event) => (
              <Link
                className="event-row-card"
                href={`/events/${event.slug}`}
                key={event.slug}
              >
                <div className="event-row-date">
                  <span>{event.kind}</span>
                  <b>{event.date}</b>
                  <small>{event.time}</small>
                </div>
                <div className="event-row-copy">
                  <span className="tag-status">Upcoming</span>
                  <h3>{event.title}</h3>
                  <p>{event.summary}</p>
                  <small>{event.venue}</small>
                </div>
                <span className="event-row-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>

          {/* Past Events Section */}
          <div className="section-head" style={{ marginTop: 64 }}>
            <h2>Past Events & Hackathons</h2>
            <p>
              Review proceedings, topics, and outcomes from past engineering sprints and open showcases.
            </p>
          </div>

          <div className="event-list event-list-archive">
            {pastEvents.map((event) => (
              <Link
                className="event-row-card"
                href={`/events/${event.slug}`}
                key={event.slug}
              >
                <div className="event-row-date">
                  <span>{event.kind}</span>
                  <b>{event.date}</b>
                  <small>{event.time}</small>
                </div>
                <div className="event-row-copy">
                  <span className="tag-status">Completed</span>
                  <h3>{event.title}</h3>
                  <p>{event.summary}</p>
                  <small>{event.venue}</small>
                </div>
                <span className="event-row-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event Callout */}
      <section className="section compact">
        <div className="container callout">
          <div>
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
