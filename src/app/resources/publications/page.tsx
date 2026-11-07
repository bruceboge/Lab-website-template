import type { Metadata } from "next";
import Link from "next/link";
import { DraftNotice } from "@/components/DraftNotice";

export const metadata: Metadata = {
  title: "Publications & Research Reports",
  description:
    "Technical papers, conference proceedings, working reports, and open hardware releases from the DeKUT Integrated Circuit Engineering Lab.",
};

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: "Technical Report" | "Conference Paper" | "Hardware Release" | "White Paper";
  abstract: string;
  doiOrUrl: string;
  linkLabel: string;
};

const publications: Publication[] = [
  {
    title: "Design and Verification of a 32-Bit Educational RISC-V Core on Open-Source FPGA Toolchains",
    authors: "K. Mwai, F. Muthoni, J. Ndichu",
    venue: "DeKUT CDED Technical Report Series, Vol. 4, No. 2",
    year: "2026",
    type: "Technical Report",
    abstract: "Documents the architecture, pipeline hazard resolution, and cycle-accurate verification of an RV32I soft-core synthesized using Yosys and nextpnr targeting Artix-7 and Gowin FPGAs.",
    doiOrUrl: "/projects/risc-v-fpga-platform",
    linkLabel: "View Project IP & Report →",
  },
  {
    title: "Sub-Microamp Analog Front-End Architecture for Soil Impedance Sensing in Precision Agriculture",
    authors: "C. Kiprop, J. Ndichu, B. Wanjiku",
    venue: "East African Conference on Engineering and Applied Sciences (EACEAS)",
    year: "2025",
    type: "Conference Paper",
    abstract: "Presents a chopper-stabilized capacitive-feedback instrumentation amplifier designed in SkyWater 130nm CMOS, achieving >94 dB CMRR and <1.8 μA quiescent current under solar-harvested power.",
    doiOrUrl: "/projects/low-power-sensor-interface",
    linkLabel: "View Project & Data →",
  },
  {
    title: "Comparative Layout and Noise Margin Analysis of 6T SRAM Bitcells in 130nm Open PDKs",
    authors: "B. Wanjiku, J. Ndichu",
    venue: "DeKUT CDED Microelectronics Research Notes",
    year: "2025",
    type: "Technical Report",
    abstract: "Evaluates read/write noise margins and lithographic design-rule compliance for high-density 6T memory arrays across process, voltage, and temperature corners using KLayout and Magic.",
    doiOrUrl: "/projects/sram-layout-study",
    linkLabel: "View Layout Study →",
  },
  {
    title: "Democratizing Microchip Design in East Africa: Open-Source EDA Toolchains in Undergraduate Education",
    authors: "J. Ndichu, K. Mwai",
    venue: "IEEE Engineering Education in Sub-Saharan Africa Symposium",
    year: "2025",
    type: "White Paper",
    abstract: "Synthesizes pedagogical insights and curriculum design principles for integrating open-source PDKs (SkyWater 130nm, GF180) into university electrical and electronic engineering programs.",
    doiOrUrl: "/about",
    linkLabel: "Read Lab Overview →",
  },
  {
    title: "Automated Functional Verification and Constrained-Random Testing of Serial Bus IP Cores",
    authors: "F. Muthoni, B. Wanjiku",
    venue: "DeKUT Undergraduate Engineering Research Showcase",
    year: "2024",
    type: "Hardware Release",
    abstract: "An open-source Cocotb-driven regression test suite providing 100% functional and line coverage metrics for configurable UART and SPI communication modules.",
    doiOrUrl: "/projects/uart-verification",
    linkLabel: "Explore Verification IP →",
  },
  {
    title: "On-Chip PVT Variation Sensor Architecture Using Multi-Stage Ring Oscillators",
    authors: "D. Ochieng, K. Mwai",
    venue: "DeKUT CDED Student Tapeout Documentation Series",
    year: "2024",
    type: "Technical Report",
    abstract: "Details layout optimization and frequency counter integration for post-silicon characterization of inter-die process shifts submitted to educational multi-project wafer shuttles.",
    doiOrUrl: "/projects/ring-oscillator-monitor",
    linkLabel: "View Silicon Design →",
  },
];

export default function PublicationsPage() {
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
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <span className="breadcrumb-divider" aria-hidden="true">
                  /
                </span>
                <span aria-current="page">Publications</span>
              </li>
            </ol>
          </nav>
          <span className="eyebrow">Research Outputs · Academic Papers</span>
          <h1>Publications & Research Reports</h1>
          <p>
            Peer-reviewed papers, institutional technical reports, white papers, and open hardware releases authored by researchers and students at the DeKUT Integrated Circuit Engineering Lab.
          </p>
        </div>
      </header>

      <div className="container draft-notice-wrap">
        <DraftNotice>Publication titles, authors, venues, dates, and links need verification before citation.</DraftNotice>
      </div>

      <section className="section publications-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Scholarly Contributions</span>
            <h2>Published Works & Working Papers</h2>
            <p>
              Explore our research across semiconductor circuits, processor architectures, and open-source EDA pedagogy.
            </p>
          </div>

          <div className="content-list">
            {publications.map((pub) => (
              <article className="list-item publication-item" key={pub.title}>
                <div className="pub-body">
                  <div className="pub-meta">
                    <span className="eyebrow pub-type">{pub.type}</span>
                    <span className="pub-year">Year: {pub.year}</span>
                  </div>
                  <h3 className="pub-title">{pub.title}</h3>
                  <p className="pub-authors">
                    <b>Authors:</b> {pub.authors}
                  </p>
                  <p className="pub-venue">
                    <i>{pub.venue}</i>
                  </p>
                  <p className="pub-abstract">{pub.abstract}</p>
                </div>

                <div className="pub-action">
                  <Link href={pub.doiOrUrl} className="button button-small button-outline-green">
                    {pub.linkLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Callout */}
      <section className="section compact">
        <div className="container callout">
          <div>
            <span className="eyebrow">Academic Collaboration</span>
            <h2>Interested in Co-Authoring or Peer Review?</h2>
            <p>
              We collaborate with researchers globally on semiconductor characterization, circuit simulation benchmarks, and joint conference submissions.
            </p>
          </div>
          <Link className="button button-gold" href="/contact">
            Contact Research Faculty →
          </Link>
        </div>
      </section>
    </main>
  );
}
