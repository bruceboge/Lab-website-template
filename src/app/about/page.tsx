import type { Metadata } from "next";
import Link from "next/link";
import { LabVisual } from "@/components/LabVisual";
import { DraftNotice } from "@/components/DraftNotice";

export const metadata: Metadata = {
  title: "About DICEL · DeKUT",
  description:
    "Learn about the Integrated Circuit Engineering Lab at Dedan Kimathi University of Technology, its mission, history, facilities, and open-source semiconductor research.",
};

const focusAreas = [
  {
    icon: "⌘",
    title: "Digital IC Design",
    text: "From architecture definition and synthesizable RTL through gate-level timing closure, logic synthesis, and physical layout.",
  },
  {
    icon: "∿",
    title: "Analog & Mixed-Signal",
    text: "Ultra-low-power amplifiers, switched-capacitor filters, and data converters that bridge digital processing to the physical analog domain.",
  },
  {
    icon: "▦",
    title: "Physical Design & Signoff",
    text: "Disciplined place-and-route, clock tree synthesis, and DRC/LVS physical signoff targeting open-source SkyWater 130nm and GF180 PDKs.",
  },
  {
    icon: "⌁",
    title: "Embedded & IoT Silicon",
    text: "Application-specific integrated circuits and FPGA platforms tailored for edge computing, telemetry, and energy-harvesting sensing.",
  },
];

const milestones = [
  {
    year: "2022",
    title: "DICEL established",
    description: "The lab's initial microelectronics work, facilities, and design tools.",
  },
  {
    year: "2023",
    title: "Open Silicon Curriculum Integration",
    description: "Integration of open-source semiconductor workflows using the SkyWater 130nm PDK; first cohort of students submitting logic blocks for Tiny Tapeout educational shuttles.",
  },
  {
    year: "2024",
    title: "Advanced Prototyping Lab & Testbeds",
    description: "Expansion of Origin Labs with high-precision digital storage oscilloscopes, arbitrary function generators, and PCB micro-soldering stations.",
  },
  {
    year: "2025/2026",
    title: "Regional Silicon Hub & Multi-Project Tapeouts",
    description: "Active multi-project wafer (MPW) submissions, student silicon bring-up, and regional university collaboration on open-source ASIC engineering.",
  },
];

const values = [
  {
    title: "Academic Rigor",
    desc: "We ground every circuit concept in fundamental physics, mathematical modeling, and exhaustive simulation before committing to silicon.",
  },
  {
    title: "Open-Source Silicon",
    desc: "We champion democratized semiconductor design using open-source EDA tools (Yosys, OpenROAD, Magic) and accessible foundry process design kits.",
  },
  {
    title: "Local Impact",
    desc: "Our research targets real-world African challenges: low-power precision agriculture, rural biopotential diagnostics, and sovereign hardware capacity.",
  },
  {
    title: "Hands-On Mentorship",
    desc: "We prioritize early undergraduate lab access, empowering students to build, test, and debug real physical hardware from their first year.",
  },
];

export default function AboutPage() {
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
                <span aria-current="page">About</span>
              </li>
            </ol>
          </nav>
          <span className="eyebrow">DICEL · DeKUT</span>
          <h1>About the IC Engineering Lab</h1>
          <p>
            An academic microelectronics and electronic systems laboratory at Dedan Kimathi University of Technology, advancing hands-on semiconductor competence and research in Kenya.
          </p>
        </div>
      </header>

      <div className="container draft-notice-wrap">
        <DraftNotice>Institutional milestones, facility descriptions, and history text need confirmation from the lab before public release.</DraftNotice>
      </div>

      {/* Lab Overview */}
      <section className="section about-overview">
        <div className="container about-overview-grid">
          <div className="about-overview-visual">
            <LabVisual kind="laboratory" showBadge={false} eager />
            <span className="image-note">
              <span className="eyebrow">DeKUT · Nyeri, Kenya</span>
              <b>Building semiconductor competence through practical engineering.</b>
            </span>
          </div>

          <article className="about-overview-copy">
            <span className="eyebrow">Overview</span>
            <h2>Where Ideas Become Silicon.</h2>
            <p>
              DICEL is the integrated circuit engineering lab at Dedan Kimathi University of Technology. It brings together students, faculty, and research partners to learn and work on integrated circuits and electronic systems.
            </p>
            <p>
              We bridge theoretical circuit analysis with practical silicon fabrication. Our researchers design custom ASICs and FPGA accelerators using modern open-source electronic design automation (EDA) workflows alongside world-class laboratory testbenches.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link className="button button-gold" href="/team">
                Meet the Research Team →
              </Link>
              <Link className="button button-outline-green" href="/resources/inventory">
                Explore Lab Facilities →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section focus-section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="editorial-heading">
            <div>
              <span className="eyebrow">Core Disciplines</span>
              <h2>Explore. Design. Verify.</h2>
            </div>
            <p>
              Our teaching and research connect foundational solid-state physics to integrated circuits and embedded systems ready for field deployment.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area, idx) => (
              <article className="focus-card" key={area.title}>
                <span className="focus-number">0{idx + 1}</span>
                <span className="focus-icon" aria-hidden="true">
                  {area.icon}
                </span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section compact">
        <div className="container grid-2">
          <article className="card" style={{ borderLeft: "4px solid var(--accent)" }}>
            <span className="eyebrow">Our Vision</span>
            <h2>Vision</h2>
            <p>
              To establish a self-sustaining, premier center of excellence for semiconductor microchip design and electronic systems engineering in East Africa, producing world-class engineers capable of driving sovereign technology innovation.
            </p>
          </article>

          <article className="card" style={{ borderLeft: "4px solid var(--gold)" }}>
            <span className="eyebrow">Our Mission</span>
            <h2>Mission</h2>
            <p>
              To educate, research, and manufacture through rigorous circuit design practice, open-source silicon tools, and high-impact partnerships with universities, foundries, and industry leaders globally.
            </p>
          </article>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Guiding Principles</span>
            <h2>Core Values</h2>
            <p>
              How we approach teaching, research collaboration, and laboratory operations.
            </p>
          </div>

          <div className="grid-4">
            {values.map((v, i) => (
              <article className="card" key={v.title}>
                <span className="mono" style={{ color: "var(--gold)", fontWeight: 700 }}>
                  0{i + 1}
                </span>
                <h3 style={{ marginTop: 8 }}>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="section compact" style={{ background: "var(--surface-2)" }}>
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Our Journey</span>
            <h2>Milestones & Growth</h2>
            <p>
              Learn about DICEL&apos;s development, research, and facilities at DeKUT.
            </p>
          </div>

          <div className="timeline">
            {milestones.map((m) => (
              <div className="timeline-item" key={m.year}>
                <b>{m.year} · {m.title}</b>
                <p>{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Card replacing map placeholder */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: "center" }}>
          <div>
            <span className="eyebrow">Physical Facility</span>
            <h2>Where to Find Us</h2>
            <p>
              <b>Dedan Kimathi University of Technology (DeKUT)</b>
              <br />
              DICEL · Integrated Circuit Engineering Lab
              <br />
              Origin Labs Building, Ground Floor
              <br />
              Nyeri-Mweiga Road, Nyeri, Kenya
            </p>
            <p>
              <b>Hours:</b> Monday – Friday, 08:30 – 17:00 EAT
              <br />
              <b>Email:</b> deice@dkut.ac.ke | <b>Phone:</b> +254 722 956 166
            </p>
            <div className="actions" style={{ marginTop: 20 }}>
              <a
                className="button button-gold"
                href="https://maps.google.com/?q=Dedan+Kimathi+University+of+Technology"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps ↗
              </a>
              <Link className="button button-outline-green" href="/contact">
                Contact Lab Administration →
              </Link>
            </div>
          </div>

          <div className="card location-card">
            <LabVisual kind="laboratory" showBadge={false} />
            <div className="location-caption" style={{ padding: 18 }}>
              <b>Origin Labs · Cleanroom & Bench Testing Facility</b>
              <small style={{ color: "var(--muted)", display: "block", marginTop: 4 }}>
                DeKUT Main Campus · Nyeri, Kenya
              </small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
