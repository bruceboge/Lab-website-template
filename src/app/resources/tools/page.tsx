import type { Metadata } from "next";
import Link from "next/link";
import { LabVisual } from "@/components/LabVisual";

export const metadata: Metadata = {
  title: "Tools, EDA Software & Laboratory Facilities",
  description:
    "Explore the electronic design automation (EDA) software, simulation tools, bench instruments, and open PDKs supporting research and education at DeKUT CDED.",
};

type ToolCategory = {
  title: string;
  category: string;
  description: string;
  tools: { name: string; license: string; role: string }[];
  visualKind: "digital" | "analog" | "layout" | "laboratory";
};

const toolCategories: ToolCategory[] = [
  {
    title: "Digital EDA & ASIC Synthesis",
    category: "Software Toolchain",
    description: "End-to-end automated digital logic synthesis, floorplanning, placement, clock tree synthesis, and routing.",
    tools: [
      { name: "Yosys Open Synthesis Suite", license: "Open Source (ISC)", role: "RTL behavioral synthesis and standard cell mapping" },
      { name: "OpenROAD / OpenLane", license: "Open Source (BSD-3)", role: "Automated place-and-route (P&R), clock tree synthesis, and antenna diode insertion" },
      { name: "OpenSTA", license: "Open Source (GPL)", role: "Multi-corner static timing analysis and setup/hold slack calculation" },
      { name: "Xilinx Vivado ML Edition", license: "Academic License", role: "FPGA bitstream generation and hardware logic debugging" },
    ],
    visualKind: "digital",
  },
  {
    title: "Analog Simulation & Modeling",
    category: "Circuit Engines",
    description: "Transistor-level DC, AC, transient, noise, and Monte Carlo statistical process variation simulations.",
    tools: [
      { name: "ngspice Engine", license: "Open Source (BSD)", role: "General-purpose transistor-level circuit simulation supporting BSIM4 / BSIM-CMG" },
      { name: "Xyce Parallel Simulator", license: "Open Source (Sandia)", role: "High-performance multi-threaded analog and transient simulation" },
      { name: "Qucs-S / PySpice", license: "Open Source (GPL)", role: "Graphical schematic capture and automated Python parametric sweep pipelines" },
      { name: "MATLAB & Simulink", license: "Campus License", role: "Behavioral model validation and DSP filter coefficient synthesis" },
    ],
    visualKind: "analog",
  },
  {
    title: "Logic Verification & Waveform Inspection",
    category: "Verification Suite",
    description: "Cycle-accurate functional verification, constrained-random stimulus generation, and waveform inspection.",
    tools: [
      { name: "Verilator", license: "Open Source (LGPL)", role: "High-speed cycle-accurate C++ simulation for complex RTL modules" },
      { name: "Cocotb Framework", license: "Open Source (BSD)", role: "Python-based testbenches and UVM-style verification scoreboards" },
      { name: "Icarus Verilog (iverilog)", license: "Open Source (GPL)", role: "IEEE-1364 standard-compliant Verilog simulation" },
      { name: "GTKWave", license: "Open Source (GPL)", role: "VCD and FST digital waveform viewing and bus transaction inspection" },
    ],
    visualKind: "digital",
  },
  {
    title: "Physical Layout, DRC & LVS Signoff",
    category: "Layout Signoff",
    description: "Mask-level geometric design, design rule checking (DRC), and layout-versus-schematic (LVS) electrical connectivity verification.",
    tools: [
      { name: "KLayout Editor", license: "Open Source (GPL)", role: "GDSII/OASIS layout inspection, DRC visualization, and custom Python macro scripting" },
      { name: "Magic VLSI", license: "Open Source (BSD)", role: "Interactive layout editing, continuous DRC, and parasitic extraction" },
      { name: "Netgen", license: "Open Source (GPL)", role: "SPICE netlist comparison for Layout-versus-Schematic (LVS) signoff" },
      { name: "SkyWater 130nm PDK", license: "Open Source (Apache 2.0)", role: "Commercial-grade 130nm CMOS foundry process design kit (1.8V / 5.0V)" },
    ],
    visualKind: "layout",
  },
  {
    title: "Laboratory Instrumentation & Hardware",
    category: "Physical Testbeds",
    description: "Benchtop measurement equipment for real-time electrical characterization of silicon dies, FPGA boards, and sensor modules.",
    tools: [
      { name: "Rigol DS1054Z Digital Storage Oscilloscopes", license: "Origin Labs Hardware", role: "4-Channel 100MHz real-time waveform capture and I2C/SPI decoding" },
      { name: "Rigol DG1022Z Waveform Generators", license: "Origin Labs Hardware", role: "Dual-channel arbitrary function generator up to 25MHz with 14-bit resolution" },
      { name: "Triple Output DC Linear Bench Supplies", license: "Origin Labs Hardware", role: "Low-ripple regulated DC power delivery (0-30V / 3A + fixed 3.3V/5V rails)" },
      { name: "16-Channel 100MHz USB Logic Analyzers", license: "Origin Labs Hardware", role: "Multi-channel digital protocol timing and packet state decoding" },
    ],
    visualKind: "laboratory",
  },
];

export default function ToolsPage() {
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
                <span aria-current="page">Tools & Facilities</span>
              </li>
            </ol>
          </nav>
          <span className="eyebrow">Laboratory Infrastructure · Origin Labs</span>
          <h1>Tools, EDA Software & Facilities</h1>
          <p>
            Explore the modern electronic design automation (EDA) stack, open-source silicon tools, and precision bench instruments that power our microelectronics education and research.
          </p>
        </div>
      </header>

      <section className="section tools-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Engineering Toolchain</span>
            <h2>From Specification to Measured Silicon</h2>
            <p>
              We prioritize open-source EDA tooling so students and researchers can build unrestricted, reproducible, and verifiable semiconductor designs.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 28 }}>
            {toolCategories.map((cat, i) => (
              <article className="card image-card" key={cat.title}>
                <LabVisual kind={cat.visualKind} showBadge={false} />
                <div className="inner-card-copy">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span className="eyebrow">Category 0{i + 1}</span>
                    <span className="tag-status">{cat.category}</span>
                  </div>
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>

                  <div className="tool-list" style={{ marginTop: 16 }}>
                    <b>Software & Instruments Included:</b>
                    <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "grid", gap: 8 }}>
                      {cat.tools.map((t) => (
                        <li key={t.name} style={{ fontSize: "13px", borderBottom: "1px solid #edf1ed", paddingBottom: 6 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <b style={{ color: "var(--text)" }}>{t.name}</b>
                            <span style={{ fontSize: "10.5px", color: "var(--gold)", fontFamily: "var(--font-geist-mono)" }}>
                              {t.license}
                            </span>
                          </div>
                          <span style={{ color: "var(--muted)", fontSize: "12px", display: "block", marginTop: 2 }}>
                            {t.role}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Inventory Integration Banner */}
      <section className="section compact">
        <div className="container callout">
          <div>
            <span className="eyebrow">Physical Equipment</span>
            <h2>Need Physical Development Boards or Test Hardware?</h2>
            <p>
              Browse our complete inventory of Arduino kits, ESP32 boards, FPGA trainers, analog sensors, and benchtop equipment available for course practicals and student loans.
            </p>
          </div>
          <Link className="button button-gold" href="/resources/inventory">
            Browse Hardware Inventory →
          </Link>
        </div>
      </section>
    </main>
  );
}
