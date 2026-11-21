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
}[] = [
  {
    kind: "laboratory",
    title: "Origin Labs Electronics Workbenches",
    category: "Hardware Facility",
  },
  {
    kind: "layout",
    title: "Submicron Physical Layout & GDSII Flow",
    category: "Physical Design",
  },
  {
    kind: "digital",
    title: "Digital Logic & FPGA Emulation Workstations",
    category: "Digital VLSI",
  },
  {
    kind: "analog",
    title: "Analog Front-End & Biopotential Testbeds",
    category: "Analog & Mixed-Signal",
  },
  {
    kind: "layout",
    title: "Memory Array & SRAM Bitcell Characterization",
    category: "Silicon Research",
  },
  {
    kind: "laboratory",
    title: "Micro-Soldering & Hardware Assembly Station",
    category: "Prototyping",
  },
  {
    kind: "digital",
    title: "Open-Source Silicon Verification",
    category: "Digital VLSI",
  },
  {
    kind: "analog",
    title: "Precision Sensor Interfaces",
    category: "Analog & Mixed-Signal",
  },
  {
    kind: "laboratory",
    title: "Measurement & Bring-Up Bench",
    category: "Hardware Facility",
  },
  {
    kind: "layout",
    title: "Standard-Cell Physical Design",
    category: "Physical Design",
  },
  {
    kind: "digital",
    title: "RISC-V Hardware Prototyping",
    category: "Embedded Systems",
  },
  {
    kind: "analog",
    title: "Mixed-Signal Research Workflows",
    category: "Silicon Research",
  },
];

export default function GalleryPage() {
  return (
    <main id="main" tabIndex={-1} className="content-page gallery-page">
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
          <h1>Lab Gallery</h1>
          <p>
            A visual tour of the people, places, and workflows behind DICEL&apos;s work.
          </p>
        </div>
      </header>

      <section className="section gallery-section">
        <div className="container">
          <div className="section-head gallery-intro">
            <span className="eyebrow">DICEL · DeKUT</span>
            <h2>Inside the IC Engineering Lab</h2>
            <p>
              Explore our engineering environments, design automation toolchains, and hardware characterization benches.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure key={item.title} className="gallery-card">
                <LabVisual kind={item.kind} showBadge={false} />
                <figcaption className="gallery-card-copy">
                  <div>
                    <span className="gallery-card-category">{item.category}</span>
                    <h3 title={item.title}>{item.title}</h3>
                  </div>
                  <span className="gallery-card-arrow" aria-hidden="true">
                    →
                  </span>
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
