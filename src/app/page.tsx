import Link from "next/link";
import ChipStage from "@/app/_components/ChipStage";
import { PROJECTS_DATA } from "@/data/projects";
import { EVENTS_DATA } from "@/data/events";
import { LabVisual } from "@/components/LabVisual";
import { DraftNotice } from "@/components/DraftNotice";

const siteDescription =
  "Integrated circuit engineering, education, and silicon research at Dedan Kimathi University of Technology, Nyeri, Kenya.";

const destinations = [
  {
    number: "01",
    title: "About the Lab",
    description: "Our mission, CDED facilities at Origin Labs, leadership, and semiconductor journey.",
    href: "/about",
  },
  {
    number: "02",
    title: "Research & Projects",
    description: "Explore integrated circuit designs, RISC-V cores, analog front-ends, and silicon tapeouts.",
    href: "/projects",
  },
  {
    number: "03",
    title: "Equipment & Inventory",
    description: "Search development boards, FPGA kits, sensors, and borrow hardware for your courses.",
    href: "/resources/inventory",
  },
  {
    number: "04",
    title: "Courses & Syllabi",
    description: "Five comprehensive academic pathways in Digital VLSI, Analog, Signals, and Embedded Systems.",
    href: "/resources/courses",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: "DeKUT Integrated Circuit Engineering Lab",
    alternateName: "DICEL / CDED DeKUT",
    parentOrganization: {
      "@type": "University",
      name: "Dedan Kimathi University of Technology",
      url: "https://www.dkut.ac.ke",
    },
    description: siteDescription,
    url: "https://dicel.dkut.ac.ke",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Origin Labs, CDED Ground Floor, Nyeri-Mweiga Road",
      addressLocality: "Nyeri",
      addressCountry: "KE",
    },
  };

  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const upcomingEvents = EVENTS_DATA.filter((e) => e.status === "upcoming").slice(0, 2);

  return (
    <main id="main" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="eyebrow">Integrated Circuit Engineering · DeKUT CDED</span>
            <h1>Engineering the building blocks of a better connected world.</h1>
            <p>
              Advancing sovereign semiconductor competence through hands-on education, open-source silicon tools, and practical ASIC tapeouts in Kenya.
            </p>
            <div className="actions">
              <Link className="button button-gold" href="/resources/inventory">
                Browse Hardware Inventory <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-outline-light" href="/projects">
                Explore Silicon Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="home-hero-art">
            <ChipStage />
            <span className="hero-art-caption">
              DeKUT CDED · Silicon Architecture to Silicon Tapeout
            </span>
          </div>
        </div>

        <div className="hero-index container">
          <span>01 Specification</span>
          <span>02 Architecture</span>
          <span>03 Verification</span>
          <span>04 Physical Layout</span>
          <span>05 Silicon Bring-Up</span>
        </div>
      </section>

      {/* Proof Highlights Strip */}
      <div className="container" style={{ marginTop: "-32px", position: "relative", zIndex: 3 }}>
        <div className="proof-strip">
          <div className="proof-item">
            <strong>150+</strong>
            <span>Hardware Units</span>
            <small>Arduino, ESP32, FPGAs</small>
          </div>
          <div className="proof-item">
            <strong>5</strong>
            <span>Core Pathways</span>
            <small>VLSI, Analog & Embedded</small>
          </div>
          <div className="proof-item">
            <strong>130nm</strong>
            <span>Open-Source PDK</span>
            <small>SkyWater / GF180 Shuttles</small>
          </div>
          <div className="proof-item">
            <strong>100%</strong>
            <span>Practical Bench Access</span>
            <small>Origin Labs, DeKUT</small>
          </div>
        </div>
      </div>

      <div className="container draft-notice-wrap">
        <DraftNotice>People, project metrics, event schedules, and inventory figures on this preview need confirmation from the lab.</DraftNotice>
      </div>

      {/* Explore Section */}
      <section className="home-explore section" aria-labelledby="home-explore-title">
        <div className="container">
          <div className="home-explore-heading">
            <div>
              <span className="eyebrow">Explore the Lab</span>
              <h2 id="home-explore-title">Discover What We Do</h2>
            </div>
            <p>
              Find the people, silicon research, laboratory equipment, and academic courses behind integrated circuit engineering at DeKUT.
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

      {/* Interactive Inventory Teaser Section */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container welcome-grid">
          <div className="welcome-image">
            <LabVisual kind="laboratory" showBadge={false} />
            <div className="image-note">
              <span className="eyebrow">Hardware Desk</span>
              <b>Borrow Dev Kits & Sensors for Your Coursework</b>
            </div>
          </div>
          <div className="welcome-copy">
            <span className="eyebrow">Origin Labs Equipment</span>
            <h2>Hardware Access for Every Student</h2>
            <p>
              Our newly launched <b>Equipment & Materials Inventory Dashboard</b> lets you search available Arduino boards, ESP32 modules, Digilent Basys 3 FPGA trainers, biomedical sensors, and oscilloscopes.
            </p>
            <p>
              Filter items mapped specifically to your enrolled courses, check real-time stock at Origin Labs, and submit instant loan requests with digital collection passes.
            </p>
            <div className="actions" style={{ marginTop: 22 }}>
              <Link className="button button-gold" href="/resources/inventory">
                Open Inventory Dashboard →
              </Link>
              <Link className="button button-outline-green" href="/resources/courses">
                View Course Syllabi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container">
          <div className="editorial-heading">
            <div>
              <span className="eyebrow">Active Research</span>
              <h2>Featured Silicon Designs</h2>
            </div>
            <Link className="button button-small button-outline-green" href="/projects">
              View All Projects →
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

      {/* Upcoming Events Section */}
      <section className="section compact" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="editorial-heading">
            <div>
              <span className="eyebrow">Community & Learning</span>
              <h2>Upcoming Workshops & Seminars</h2>
            </div>
            <Link className="button button-small button-outline-green" href="/events">
              All Events →
            </Link>
          </div>

          <div className="grid-2">
            {upcomingEvents.map((evt) => (
              <Link className="card" href={`/events/${evt.slug}`} key={evt.slug} style={{ padding: 26 }}>
                <span className="eyebrow" style={{ color: "var(--gold)" }}>
                  {evt.kind} · {evt.date}
                </span>
                <h3 style={{ fontSize: "20px", margin: "8px 0 6px", color: "var(--text)" }}>
                  {evt.title}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 12px" }}>
                  📍 {evt.venue}
                </p>
                <p style={{ fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                  {evt.summary}
                </p>
                <span style={{ display: "inline-block", marginTop: 14, color: "var(--accent)", fontWeight: 600, fontSize: "13px" }}>
                  View Programme & Reserve Seat →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section lab-cta">
        <div className="container lab-cta-inner">
          <div>
            <span className="eyebrow">Get Started</span>
            <h2>Ready to Build Integrated Circuits?</h2>
            <p>
              Join the DeKUT Integrated Circuit Engineering Lab as a student, researcher, or industry partner.
            </p>
          </div>
          <div className="actions">
            <Link className="button button-gold" href="/contact">
              Contact the Lab →
            </Link>
            <Link className="button button-outline-light" href="/resources/courses/ic-design-process">
              Explore Design Process
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
