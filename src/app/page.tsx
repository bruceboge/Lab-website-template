import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { EVENTS_DATA } from "@/data/events";
import { LabVisual } from "@/components/LabVisual";

const siteDescription =
  "DICEL is the integrated circuit engineering lab at Dedan Kimathi University of Technology in Nyeri, Kenya.";

const destinations = [
  {
    number: "01",
    title: "Research & Projects",
    description: "Explore the lab's integrated-circuit and electronic-systems work.",
    href: "/projects",
  },
  {
    number: "02",
    title: "Courses & Resources",
    description: "Find learning materials, equipment information, and design guides.",
    href: "/resources",
  },
  {
    number: "03",
    title: "About the Lab",
    description: "Learn about the lab, its people, facilities, and how to get in touch.",
    href: "/about",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: "DeKUT Integrated Circuit Engineering Lab",
    alternateName: "DICEL",
    parentOrganization: {
      "@type": "University",
      name: "Dedan Kimathi University of Technology",
      url: "https://www.dkut.ac.ke",
    },
    description: siteDescription,
    url: "https://dicel.dkut.ac.ke",
  };

  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const upcomingEvents = EVENTS_DATA.filter((e) => e.status === "upcoming").slice(0, 2);

  return (
    <main id="main" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <h1>Integrated circuit engineering at DeKUT.</h1>
            <p>
              The lab brings together electronics research, design practice, and learning in integrated circuits and electronic systems.
            </p>
            <div className="actions">
              <Link className="button" href="/projects">
                Explore research <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-secondary" href="/resources">
                Browse resources <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="home-hero-art">
            <LabVisual kind="digital" showBadge={false} eager />
          </div>
        </div>
      </section>

      <section className="home-explore section" aria-labelledby="home-explore-title">
        <div className="container">
          <div className="home-explore-heading">
            <div>
              <h2 id="home-explore-title">Explore the lab</h2>
            </div>
            <p>
              Find research, learning materials, and information about the lab.
            </p>
          </div>
          <div className="home-explore-grid">
            {destinations.map((destination) => (
              <Link
                className="home-explore-card"
                href={destination.href}
                key={destination.href}
              >
                <span className="home-explore-number">{destination.number}</span>
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
                <span className="home-explore-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="editorial-heading">
            <div>
              <h2>Selected projects</h2>
            </div>
            <Link className="button button-small button-outline-green" href="/projects">
              All projects <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid-3">
            {featuredProjects.map((p) => (
              <Link className="card image-card project-card" href={`/projects/${p.slug}`} key={p.slug}>
                <LabVisual kind={p.visualKind} showBadge={false} />
                <div className="project-card-copy">
                  <div className="project-card-meta">
                    <span className="tag">{p.type}</span>
                    <span className="tag-status">{p.status}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="project-node-badge">Node: {p.targetNode}</p>
                  <p>{p.summary}</p>
                  <span className="card-foot">
                    <span>Year: {p.year}</span>
                    <b>Read Architecture ↗</b>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {upcomingEvents.length > 0 && (
        <section className="section compact home-events">
          <div className="container">
            <div className="editorial-heading">
              <div>
                <h2>Upcoming at the lab</h2>
              </div>
              <Link className="button button-small button-outline-green" href="/events">
                All events <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid-2">
              {upcomingEvents.map((event) => (
                <Link className="card home-event-card" href={`/events/${event.slug}`} key={event.slug}>
                  <span className="eyebrow">{event.kind} · {event.date}</span>
                  <h3>{event.title}</h3>
                  <p>{event.summary}</p>
                  <span className="home-event-link">Event details <span aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section lab-cta">
        <div className="container lab-cta-inner">
          <div>
            <h2>Learn more about the lab</h2>
            <p>
              For information about research, learning opportunities, or collaboration, contact the lab.
            </p>
          </div>
          <div className="actions">
            <Link className="button button-gold" href="/contact">
              Contact the lab <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline-light" href="/resources/courses">
              Courses & learning
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
