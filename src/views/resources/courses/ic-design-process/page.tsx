import Image from "next/image";
import Link from "@/components/next-link";

type DesignStage = {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string[];
  tools: string;
  image: string;
  imageAlt: string;
  caption: string;
};

const designStages: DesignStage[] = [
  {
    id: "specification",
    number: "01",
    title: "Need & specification",
    summary: "Translate a system need into measurable requirements for the circuit.",
    details: [
      "Define functions, interfaces, operating conditions and test requirements.",
      "Set targets for power, performance, area, cost and reliability.",
      "Record assumptions and acceptance criteria so design decisions can be reviewed.",
    ],
    tools: "Requirements documents, system models and architecture trade-off studies",
    image: "/visuals/STI 2025 MEDICAL.webp",
    imageAlt: "Conference poster for a low-cost RFID medical equipment tracking system",
    caption: "A DeICE conference poster documents the requirements and design of a medical equipment tracking system.",
  },
  {
    id: "architecture",
    number: "02",
    title: "Architecture & circuit design",
    summary: "Choose the circuit structure and divide the design into blocks with clear interfaces.",
    details: [
      "Partition the system into digital, analog, memory and interface blocks as needed.",
      "Select architectures and operating principles that meet the specification.",
      "Model likely power, timing, noise and area constraints before implementation.",
    ],
    tools: "Block diagrams, Python or MATLAB models, SPICE and architectural simulation",
    image: "/visuals/STI 2025 LOW VOLTAGE CMOS.webp",
    imageAlt: "Conference poster for a low-voltage CMOS low-noise amplifier",
    caption: "A DeICE conference poster presents the architecture and simulated results of a CMOS low-noise amplifier.",
  },
  {
    id: "rtl",
    number: "03",
    title: "RTL & schematic implementation",
    summary: "Describe digital logic in RTL and capture analog circuits as schematics.",
    details: [
      "Use Verilog, SystemVerilog or VHDL for synthesizable digital logic.",
      "Capture transistor-level or behavioural schematics for analog and mixed-signal blocks.",
      "Keep interfaces, constraints and design intent documented alongside the implementation.",
    ],
    tools: "Verilog/SystemVerilog, VHDL, schematic capture and version control",
    image: "/visuals/STI 2025 VLSI DECIMATION.webp",
    imageAlt: "Conference poster for a VLSI decimation filter for audio applications",
    caption: "A DeICE conference poster documents a VLSI filter design for audio signal processing.",
  },
  {
    id: "verification",
    number: "04",
    title: "Simulation & verification",
    summary: "Test the design against its specification before committing to physical implementation.",
    details: [
      "Build testbenches that exercise expected behaviour, edge cases and failure conditions.",
      "Compare simulation results with requirements; use formal checks where appropriate.",
      "Verification and implementation are iterative: findings often send the design back to RTL or schematic work.",
    ],
    tools: "Icarus Verilog, Verilator, GTKWave, SPICE and formal verification tools",
    image: "/visuals/STI 15 MHZ FREQUENCY SYNTHESIZER.webp",
    imageAlt: "Conference poster showing the design and results of a 15 MHz digital phase-locked loop",
    caption: "A DeICE conference poster reports design and simulation results for a digital phase-locked loop.",
  },
  {
    id: "synthesis",
    number: "05",
    title: "Synthesis & design-for-test",
    summary: "Map digital logic to cells from a process library and prepare the design for testing.",
    details: [
      "Synthesis converts RTL into a gate-level netlist under timing and area constraints.",
      "Design-for-test features can help test internal logic after manufacturing.",
      "Check that the mapped implementation remains functionally equivalent to the RTL.",
    ],
    tools: "Yosys or commercial synthesis tools; standard-cell libraries and test tools",
    image: "/visuals/STI 2025 LOW POWER SIGMA.webp",
    imageAlt: "Conference poster for a low-power sigma-delta modulator for hearing aids",
    caption: "A DeICE conference poster describes a low-power sigma-delta modulator implemented in CMOS.",
  },
  {
    id: "physical-design",
    number: "06",
    title: "Physical design & layout",
    summary: "Turn the logical design into geometry that can be manufactured on silicon.",
    details: [
      "Plan the floorplan, power distribution and placement of cells and macros.",
      "Build clock networks and route signal connections across the layout.",
      "Analog and mixed-signal blocks often require careful custom layout and matching.",
    ],
    tools: "OpenROAD, OpenLane, KLayout, Magic and foundry process design kits",
    image: "/visuals/STI 2025 VLSI DECIMATION.webp",
    imageAlt: "Conference poster showing the VLSI decimation filter design and layout",
    caption: "The decimation-filter poster includes the design workflow and final layout.",
  },
  {
    id: "signoff",
    number: "07",
    title: "Signoff & tape-out",
    summary: "Run final checks to confirm the layout meets electrical and manufacturing rules.",
    details: [
      "Check timing, power integrity and other design constraints across defined conditions.",
      "Run design-rule checking (DRC) and layout-versus-schematic (LVS) checks.",
      "Prepare the verified layout data for handoff to a fabrication partner.",
    ],
    tools: "Static timing analysis, DRC/LVS tools, KLayout, Magic and Netgen",
    image: "/visuals/STI 2025 LOW POWER SIGMA.webp",
    imageAlt: "Conference poster showing the sigma-delta modulator design and layout",
    caption: "The sigma-delta modulator poster includes implementation results and a chip layout.",
  },
  {
    id: "fabrication",
    number: "08",
    title: "Fabrication & inspection",
    summary: "A fabrication facility builds the circuit layer by layer on a silicon wafer.",
    details: [
      "The foundry uses the process design kit and released layout data to manufacture wafers.",
      "Process steps form transistors and interconnect layers; process details vary by technology.",
      "Optical or electron microscopy can help inspect dies and investigate defects.",
    ],
    tools: "Foundry process equipment, optical microscopy and electron microscopy",
    image: "/visuals/DICEL ENTRANCE VIEW.webp",
    imageAlt: "Research posters displayed inside the DeICE laboratory",
    caption: "Research posters in the lab show examples of work developed through the design process.",
  },
  {
    id: "packaging-test",
    number: "09",
    title: "Packaging & bring-up",
    summary: "Package the die, connect it to a test setup and check that it behaves as intended.",
    details: [
      "Package the die to protect it and provide electrical connections to a board or system.",
      "Bring up the device with test equipment and exercise interfaces and operating modes.",
      "Compare measured results with the specification and feed lessons into future revisions.",
    ],
    tools: "Evaluation boards, oscilloscopes, logic analysers, power supplies and test software",
    image: "/visuals/OFFICE 2.webp",
    imageAlt: "Test equipment and workstations inside the DeKUT laboratory",
    caption: "The laboratory workspace includes equipment used to examine and test electronic designs.",
  },
];

const openSourceFlow = [
  { name: "Yosys", role: "RTL synthesis" },
  { name: "OpenROAD / OpenLane", role: "Physical design" },
  { name: "Magic / KLayout", role: "Layout inspection and checks" },
  { name: "Netgen", role: "Netlist comparison" },
  { name: "SKY130 / GF180MCU", role: "Open process design kits" },
  { name: "Tiny Tapeout", role: "Educational fabrication pathway" },
];

export const metadata = {
  title: "From Idea to Silicon · IC Design Process",
  description:
    "An introduction to the stages of integrated circuit design, verification, physical implementation, fabrication and testing.",
  openGraph: {
    title: "From Idea to Silicon · DeKUT IC Engineering Lab",
    description:
      "Explore the integrated circuit design process, from requirements to tested silicon.",
    type: "article",
  },
};

function StageImage({ stage }: { stage: DesignStage }) {
  return (
    <figure className="process-figure">
      <div className="process-figure-frame">
        <Image
          src={stage.image}
          alt={stage.imageAlt}
          fill
          sizes="(min-width: 900px) 42vw, 100vw"
          className="process-image"
        />
      </div>
      <figcaption>{stage.caption}</figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <main id="main" tabIndex={-1} className="content-page">
      <header className="page-hero process-hero">
        <div className="container process-hero-inner">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumbs">
              <li><Link href="/">Home</Link></li>
              <li>
                <span className="breadcrumb-divider" aria-hidden="true">/</span>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <span className="breadcrumb-divider" aria-hidden="true">/</span>
                <Link href="/resources/courses">Courses</Link>
              </li>
              <li>
                <span className="breadcrumb-divider" aria-hidden="true">/</span>
                <span aria-current="page">IC design process</span>
              </li>
            </ol>
          </nav>
          <span className="eyebrow">Learning guide · Integrated circuit design</span>
          <h1>From idea to silicon</h1>
          <p>
            An integrated circuit moves through a series of engineering decisions:
            define what it must do, design and verify its circuits, prepare a
            manufacturable layout, then test the fabricated device. This guide
            introduces the main stages and the tools students may encounter.
          </p>
          <p className="process-note">
            The flow is iterative. Verification, physical checks and measurements
            can reveal issues that send a design back to an earlier stage. Exact
            steps vary with circuit type and process.
          </p>
        </div>
      </header>

      <section className="section process-overview">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The flow at a glance</span>
            <h2>From requirements to tested silicon</h2>
            <p>
              Use the stage links to move through the guide. Digital, analog and
              mixed-signal projects share some steps and differ in others.
            </p>
          </div>
          <nav className="process-stage-nav" aria-label="Design process stages">
            <ol>
              {designStages.map((stage) => (
                <li key={stage.id}>
                  <a href={`#${stage.id}`}>
                    <span>{stage.number}</span>
                    {stage.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="process-classes">
            {[
              ["Design intent", "Specification, architecture and circuit implementation define what the chip should do."],
              ["Prove & implement", "Simulation, synthesis and physical design check behaviour and prepare a manufacturable layout."],
              ["Build & learn", "Fabrication, inspection, packaging and bring-up compare real silicon with the design intent."],
            ].map(([title, copy]) => (
              <article className="process-class" key={title}>
                <span className="eyebrow">{title}</span>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container process-stages">
        {designStages.map((stage, index) => (
          <section
            id={stage.id}
            className={`process-stage${index % 2 ? " process-stage-reverse" : ""}`}
            key={stage.id}
            aria-labelledby={`${stage.id}-title`}
          >
            <div className="process-copy">
              <span className="eyebrow">Stage {stage.number}</span>
              <h2 id={`${stage.id}-title`}>{stage.title}</h2>
              <p className="process-summary">{stage.summary}</p>
              <ul>
                {stage.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <p className="process-tools">
                <b>Typical tools and artefacts</b>
                <br />
                {stage.tools}
              </p>
            </div>
            <StageImage stage={stage} />
          </section>
        ))}
      </div>

      <section className="section process-open-source">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">A practical starting point</span>
            <h2>Explore an open-source flow</h2>
            <p>
              Open tools and educational process kits can help students practise
              key parts of the digital design flow. Confirm tool suitability,
              process-kit terms and local availability before starting a project.
            </p>
          </div>
          <ul className="process-tools-grid">
            {openSourceFlow.map((item) => (
              <li key={item.name}>
                <b>{item.name}</b>
                <span>{item.role}</span>
              </li>
            ))}
          </ul>
          <Link className="button button-outline-green" href="/resources/tools">
            Explore tools & facilities <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section compact">
        <div className="container callout">
          <div>
            <span className="eyebrow">Keep learning</span>
            <h2>Connect the process to a course or project.</h2>
            <p>
              Explore the lab’s course outlines or get in touch about learning
              opportunities.
            </p>
          </div>
          <div className="actions">
            <Link className="button button-green" href="/resources/courses">
              Courses
            </Link>
            <Link className="button button-outline-green" href="/contact">
              Contact the lab
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
