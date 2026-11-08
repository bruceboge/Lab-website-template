import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support the Lab · Sponsorship & Partnerships",
  description:
    "Partner with DeKUT Integrated Circuit Engineering Lab through equipment donations, student research fellowships, and semiconductor tapeout sponsorships.",
};

const supportPillars = [
  {
    title: "Equipment & Hardware Donations",
    desc: "Donate development boards (FPGA kits, microcontrollers, sensor modules), bench oscilloscopes, or cleanroom consumables to expand practical access for undergraduate engineering students.",
  },
  {
    title: "Silicon Shuttle & Tapeout Funding",
    desc: "Sponsor student multi-project wafer (MPW) silicon fabrication runs on open-source PDKs (SkyWater 130nm, GF180MCU) to get real student-designed microchips manufactured.",
  },
  {
    title: "Research Fellowships & Scholarships",
    desc: "Fund postgraduate research stipends and undergraduate thesis awards in VLSI circuit design, digital verification, and low-power analog engineering.",
  },
  {
    title: "Industry Mentorship & Co-Design",
    desc: "Engage your engineering team as technical mentors, co-supervise applied industry capstone projects, and host student internships in electronics manufacturing.",
  },
];

export default function SupportPage() {
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
                <span aria-current="page">Support Us</span>
              </li>
            </ol>
          </nav>
          <span className="eyebrow">Partnerships & Support · DICEL DeKUT</span>
          <h1>Support Integrated Circuit Engineering</h1>
          <p>
            Help accelerate semiconductor talent, open-source silicon innovation, and hands-on microelectronics education in Kenya and East Africa.
          </p>
        </div>
      </header>

      {/* Support Pillars Grid */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Impact Pathways</span>
            <h2>How You Can Partner With Us</h2>
            <p>
              Whether through technical hardware, student scholarships, or fabrication funding, your partnership directly translates to more Kenyan students holding real silicon microchips they designed.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 24 }}>
            {supportPillars.map((p, index) => (
              <article className="card" key={p.title} style={{ padding: 30 }}>
                <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
                <h3 style={{ fontSize: "21px", margin: "0 0 10px", color: "var(--text)" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "14.5px", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact & Bank/Institutional Details */}
      <section className="section compact" style={{ background: "var(--surface-2)" }}>
        <div className="container support-contact-grid">
          <div className="support-contact-copy">
            <span className="eyebrow">Formal Partnership Desk</span>
            <h2>Let&apos;s Build a Meaningful Partnership</h2>
            <p>
              For corporate sponsorships, institutional equipment grants, or bilateral research agreements, connect directly with our Centre Director and University Directorate. We provide transparent reporting and recognition across lab publications and research benches.
            </p>
            <div className="actions">
              <Link className="button button-gold" href="/contact">
                Contact Partnership Desk →
              </Link>
              <Link className="button button-outline-green" href="/about">
                Read About the Lab →
              </Link>
            </div>
          </div>

          <div className="support-contact-card">
            <span className="eyebrow">DICEL Contact</span>
            <h3>DeKUT Integrated Circuit Engineering Lab</h3>
            <p>
              <b>Dedan Kimathi University of Technology</b>
              <br />
              DICEL · Integrated Circuit Engineering Lab
              <br />
              Private Bag - 10143, Dedan Kimathi
              <br />
              Nyeri, Kenya
            </p>
            <p style={{ marginTop: 14 }}>
              <b>Email:</b> <a href="mailto:deice@dkut.ac.ke">deice@dkut.ac.ke</a>
              <br />
              <b>Phone:</b> <a href="tel:+254722956166">+254 722 956 166</a>
              <br />
              <b>Origin Labs Desk:</b> Extension 1420
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
