import Link from "@/components/next-link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import { EVENTS_DATA } from "@/data/events";
import { LabVisual } from "@/components/LabVisual";
import { HeroCircuitBackground } from "@/components/HeroCircuitBackground";

const siteDescription =
  "DeICE is the DeKUT Integrated Circuit Engineering laboratory at Dedan Kimathi University of Technology in Nyeri, Kenya.";

const proofStats = [
  { value: "5", label: "IC Courses", detail: "Academic pathways" },
  { value: "18+", label: "Hardware Units", detail: "Origin Labs inventory" },
  { value: "6", label: "Research Projects", detail: "Silicon & FPGA work" },
  { value: "2022", label: "Established", detail: "DeKUT · Nyeri" },
];

const destinations = [
  {
    number: "01",
    title: "Research & Projects",
    description: "Explore the lab's integrated-circuit, analog front-end, and FPGA work.",
    href: "/projects",
  },
  {
    number: "02",
    title: "Courses & Resources",
    description: "Find VLSI syllabi, open-source EDA guides, and hardware equipment catalogs.",
    href: "/resources",
  },
  {
    number: "03",
    title: "About the Lab",
    description: "Meet our researchers, inspect Origin Labs facilities, and connect with the team.",
    href: "/about",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: "DeKUT Integrated Circuit Engineering Laboratory",
    alternateName: "DeICE",
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
        <HeroCircuitBackground />
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="hero-kicker">Dedan Kimathi University of Technology · Nyeri</span>
            <h1>Integrated circuit engineering at DeKUT.</h1>
            <p>
              The lab brings together semiconductor research, open-source EDA practice, and hands-on learning in integrated circuits and electronic systems.
            </p>
            <div className="actions">
              <Link className="button" href="/projects">
                <span>Explore research</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="button button-secondary" href="/resources">
                <span>Browse resources</span>
              </Link>
            </div>
          </div>

          <div className="home-hero-art">
            <LabVisual kind="digital" showBadge={false} eager />
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Lab statistics">
        <div className="container">
          <div className="proof-strip">
            {proofStats.map((stat) => (
              <div className="proof-item" key={stat.label}>
                <strong className="tabular-nums">{stat.value}</strong>
                <div>
                  <span>{stat.label}</span>
                  <small>{stat.detail}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-explore section" aria-labelledby="home-explore-title">
        <div className="container">
          <div className="home-explore-heading">
            <div>
              <span className="section-kicker">Laboratory Directory</span>
              <h2 id="home-explore-title">Explore the lab</h2>
            </div>
            <p>
              Find silicon research, academic course pathways, and laboratory facility details.
            </p>
          </div>
          <div className="home-explore-grid">
            {destinations.map((destination) => (
              <Link
                className="home-explore-card"
                href={destination.href}
                key={destination.href}
              >
                <span className="home-explore-number tabular-nums">{destination.number}</span>
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
                <span className="home-explore-arrow" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-band">
        <div className="container">
          <div className="editorial-heading">
            <div>
              <span className="section-kicker">Research & Silicon</span>
              <h2>Selected projects</h2>
            </div>
            <Link className="button button-small button-outline-green" href="/projects">
              <span>All projects</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="projects-showcase-grid">
            {featuredProjects.map((p) => (
              <Link className="project-showcase-card" href={`/projects/${p.slug}`} key={p.slug}>
                <LabVisual kind={p.visualKind} showBadge={false} />
                <div className="project-showcase-body">
                  <div className="project-showcase-top">
                    <div className="project-meta-line">
                      <span>{p.type}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{p.year}</span>
                    </div>
                    {p.specs[0] && (
                      <p className="project-spec-line">
                        {p.specs[0].label}: {p.specs[0].value}
                      </p>
                    )}
                  </div>
                  <h3>{p.title}</h3>
                  <p className="project-summary">{p.summary}</p>
                  <div className="project-card-foot">
                    <span>{p.toolsUsed.slice(0, 3).join(" · ")}</span>
                    <span className="project-foot-cta">
                      Details <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </div>
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
                <span className="section-kicker">Calendar & Seminars</span>
                <h2>Upcoming at the lab</h2>
              </div>
              <Link className="button button-small button-outline-green" href="/events">
                <span>All events</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid-2">
              {upcomingEvents.map((event) => (
                <Link className="home-event-card" href={`/events/${event.slug}`} key={event.slug}>
                  <div className="home-event-meta">
                    <span>{event.kind}</span>
                    <span aria-hidden="true">·</span>
                    <span>{event.date}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.summary}</p>
                  <span className="home-event-link">
                    <span>Event details</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section lab-cta">
        <div className="container lab-cta-inner">
          <div>
            <span className="section-kicker">Collaborate & Learn</span>
            <h2>Learn more about the lab</h2>
            <p>
              For information about research, student training, or institutional partnerships, contact the laboratory team.
            </p>
          </div>
          <div className="actions">
            <Link className="button" href="/contact">
              <span>Contact the lab</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href="/resources/courses">
              <span>Courses & learning</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
