import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research Team & Faculty",
  description:
    "Meet the researchers, engineers, and students working on integrated circuit design, verification, and embedded systems at DICEL, DeKUT.",
};

type TeamMember = {
  name: string;
  role: string;
  category: "Leadership" | "Researchers" | "Students";
  initials: string;
  bio: string;
  focus: string[];
  email: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Prof. Jean Ndichu, Ph.D.",
    role: "Lab Director & Principal Investigator",
    category: "Leadership",
    initials: "JN",
    bio: "Leads research initiatives in microelectronics and semiconductor manufacturing partnerships at DeKUT. Specializes in mixed-signal integrated circuit design, energy-efficient sensor architectures, and open-source silicon methodology.",
    focus: ["Mixed-Signal IC", "SkyWater 130nm", "Semiconductor Education"],
    email: "jean.ndichu@dkut.ac.ke",
  },
  {
    name: "Dr. Kelvin Mwai, Ph.D.",
    role: "Co-Director & Lead Systems Architect",
    category: "Leadership",
    initials: "KM",
    bio: "Guides digital hardware architecture and computer engineering research. Directs student projects exploring pipelined RISC-V soft-cores, high-throughput DSP hardware, and FPGA-accelerated edge inference.",
    focus: ["RISC-V Architecture", "FPGA Prototyping", "Digital Synthesis"],
    email: "kelvin.mwai@dkut.ac.ke",
  },
  {
    name: "Eng. Brenda Wanjiku, M.Sc.",
    role: "Senior IC Verification Engineer",
    category: "Leadership",
    initials: "BW",
    bio: "Oversees lab design-for-test methodology and automated verification workflows. Specializes in SystemVerilog, UVM testbenches, and physical layout signoff using OpenROAD and KLayout.",
    focus: ["UVM Verification", "Physical Signoff", "OpenROAD Flow"],
    email: "brenda.wanjiku@dkut.ac.ke",
  },
  {
    name: "Caleb Kiprop, B.Sc.",
    role: "Postgraduate Researcher (Analog & RF)",
    category: "Researchers",
    initials: "CK",
    bio: "Focuses on analog front-ends for biomedical and environmental sensing. Investigates chopper-stabilized instrumentation amplifiers and low-voltage switched-capacitor circuits.",
    focus: ["Analog Front-Ends", "Low-Noise Amplifiers", "SPICE Simulation"],
    email: "deice@dkut.ac.ke",
  },
  {
    name: "Faith Muthoni, B.Sc.",
    role: "Postgraduate Researcher (Digital Systems)",
    category: "Researchers",
    initials: "FM",
    bio: "Researches open-source silicon flows and multi-project wafer shuttle submission workflows. Actively develops verifiable IP blocks for Tiny Tapeout educational fabrication rounds.",
    focus: ["Tiny Tapeout", "Bus Interconnects", "Verilog HDL"],
    email: "deice@dkut.ac.ke",
  },
  {
    name: "Dennis Ochieng",
    role: "Undergraduate Research Assistant",
    category: "Students",
    initials: "DO",
    bio: "Final-year Electrical & Electronics Engineering student coordinating hardware prototyping stations, sensor breakout integration, and microcontroller bench tutorials.",
    focus: ["Embedded Firmware", "PCB Layout", "Lab Hardware"],
    email: "deice@dkut.ac.ke",
  },
  {
    name: "Grace Wambui",
    role: "Undergraduate Research Assistant",
    category: "Students",
    initials: "GW",
    bio: "Supports lab practical sessions and equipment management at Origin Labs. Focuses on sensor fusion, analog data conversion, and student workshop facilitation.",
    focus: ["Sensor Interfacing", "ADC Sampling", "Origin Labs Support"],
    email: "deice@dkut.ac.ke",
  },
];

export default function TeamPage() {
  return (
    <main id="main" tabIndex={-1} className="content-page team-page">
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
                <span aria-current="page">Team</span>
              </li>
            </ol>
          </nav>
          <h1>Meet the team</h1>
        </div>
      </header>

      <section className="section team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((person) => (
              <article className="team-card" key={person.name}>
                <div className="team-avatar" aria-hidden="true">
                  <span className="avatar-monogram">{person.initials}</span>
                </div>
                <div className="team-card-copy">
                  <div className="team-card-text">
                    <span className="team-role">{person.role}</span>
                    <h2 className="team-name" title={person.name}>{person.name}</h2>
                  </div>
                  <a className="team-mail" href={`mailto:${person.email}`} aria-label={`Email ${person.name}`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M3.5 6.5h17v11h-17zM4 7l8 6 8-6" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
