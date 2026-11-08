import type { Metadata } from "next";
import Link from "next/link";
import { LabVisual } from "@/components/LabVisual";

export const metadata: Metadata = {
  title: "Laboratory Gallery · DICEL DeKUT",
  description:
    "Visual tour of the DeKUT Integrated Circuit Engineering Lab, showcasing design workstations, measurement instrumentation, and silicon prototypes.",
};

const galleryItems: {
  kind: "laboratory" | "layout" | "analog" | "digital";
  title: string;
  category: string;
  description: string;
}[] = [
  {
    kind: "laboratory",
    title: "Origin Labs Electronics Workbenches",
    category: "Hardware Facility",
    description: "Equipped with dual-channel arbitrary waveform generators, 4-channel digital oscilloscopes, and precision bench multimeters for signal bring-up.",
  },
  {
    kind: "layout",
    title: "Submicron Physical Layout & GDSII Flow",
    category: "Physical Design",
    description: "Detailed metal routing and standard-cell layout generated targeting open-source SkyWater 130nm and GF180 process design kits.",
  },
  {
    kind: "digital",
    title: "Digital Logic & FPGA Emulation Workstations",
    category: "Digital VLSI",
    description: "High-performance compute stations running Yosys, Verilator, and Vivado for synthesizable SystemVerilog processor verification.",
  },
  {
    kind: "analog",
    title: "Analog Front-End & Biopotential Testbeds",
    category: "Analog & Mixed-Signal",
    description: "Low-noise measurement environment designed for characterizing microvolt-level instrumentation amplifiers and bio-impedance readout circuits.",
  },
  {
    kind: "layout",
    title: "Memory Array & SRAM Bitcell Characterization",
    category: "Silicon Research",
    description: "Layout-versus-schematic (LVS) and design-rule verification (DRC) for compact memory topologies in KLayout and Magic.",
  },
  {
    kind: "laboratory",
    title: "Micro-Soldering & Hardware Assembly Station",
    category: "Prototyping",
    description: "Temperature-regulated SMD hot-air rework station and stereo microscope for assembling custom sensor carrier boards and QFP packages.",
  },
];

export default function GalleryPage() {
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
                <Link href="/about">About</Link>
              </li>
              <li>
                <span className="breadcrumb-divider" aria-hidden="true">
                  /
                </span>
                <span aria-current="page">Gallery</span>
              </li>
            </ol>
          </nav>
          <span className="eyebrow">Visual Tour · Origin Labs</span>
          <h1>Lab Gallery & Workspaces</h1>
          <p>
            Explore illustrations of DICEL research work, design tools, and laboratory facilities.
          </p>
        </div>
      </header>

      <section className="section gallery-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Workspaces & Research</span>
            <h2>Inside the IC Engineering Lab</h2>
            <p>
              A visual glimpse into our engineering environments, design automation toolchains, and hardware characterization benches at DeKUT Nyeri campus.
            </p>
          </div>

          <div className="gallery-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))" }}>
            {galleryItems.map((item) => (
              <figure key={item.title} className="card image-card">
                <LabVisual kind={item.kind} showBadge={false} />
                <figcaption style={{ padding: 22 }}>
                  <span className="eyebrow" style={{ fontSize: "10px", color: "var(--gold)" }}>
                    {item.category}
                  </span>
                  <h3 style={{ fontSize: "18px", margin: "6px 0 8px", color: "var(--text)" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "var(--muted)", margin: 0 }}>
                    {item.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Callout */}
      <section className="section compact">
        <div className="container callout">
          <div>
            <span className="eyebrow">Visit Us in Person</span>
            <h2>Tour Origin Labs at DeKUT</h2>
            <p>
              We host open days, high school STEM tours, and visiting academic researchers interested in microelectronics. Reach out to schedule a guided visit.
            </p>
          </div>
          <Link className="button button-gold" href="/contact">
            Schedule a Lab Visit →
          </Link>
        </div>
      </section>
    </main>
  );
}
