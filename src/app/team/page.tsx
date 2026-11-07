import type { Metadata } from "next";
import Link from "next/link";
import { DraftNotice } from "@/components/DraftNotice";

export const metadata: Metadata = {
  title: "Research Team & Faculty",
  description:
    "Meet the researchers, engineers, and students leading integrated circuit design, verification, and embedded systems at DeKUT CDED.",
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
                <span aria-current="page">Team</span>
              </li>
            </ol>
          </nav>
          <span className="eyebrow">People & Leadership · Origin Labs</span>
          <h1>Our Research Team</h1>
          <p>
            Meet the faculty, research fellows, and engineering students advancing semiconductor competence, chip design, and hands-on hardware education at Dedan Kimathi University of Technology.
          </p>
        </div>
      </header>

      <div className="container draft-notice-wrap">
        <DraftNotice>Names, roles, biographies, and contact details need confirmation from the lab before public release.</DraftNotice>
      </div>

      <section className="section team-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Academic & Technical Faculty</span>
            <h2>Leadership & Research Mentors</h2>
            <p>
              Faculty members directing integrated circuit research, academic curriculum design, and laboratory operations at the Centre for Development of Electronic Devices (CDED).
            </p>
          </div>

          <div className="grid-3 team-grid">
            {teamMembers
              .filter((m) => m.category === "Leadership")
              .map((person) => (
                <article className="card team-card" key={person.name}>
                  <div className="team-avatar">
                    <span className="avatar-monogram">{person.initials}</span>
                    <span className="avatar-tag">{person.category}</span>
                  </div>
                  <span className="eyebrow team-role">{person.role}</span>
                  <h3 className="team-name">{person.name}</h3>
                  <p className="team-bio">{person.bio}</p>
                  <div className="team-focus">
                    {person.focus.map((f) => (
                      <span className="tag" key={f}>
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="team-contact">
                    <a
                      href={`mailto:${person.email}`}
                      className="team-email-link"
                      aria-label={`Email ${person.name}`}
                    >
                      ✉ {person.email}
                    </a>
                  </div>
                </article>
              ))}
          </div>

          <div className="section-head" style={{ marginTop: 64 }}>
            <span className="eyebrow">Graduate & Undergraduate Fellows</span>
            <h2>Student Researchers & Engineers</h2>
            <p>
              Talented engineering students conducting thesis investigations, tapeout verifications, and bench prototyping.
            </p>
          </div>

          <div className="grid-4 team-grid">
            {teamMembers
              .filter((m) => m.category !== "Leadership")
              .map((person) => (
                <article className="card team-card" key={person.name}>
                  <div className="team-avatar team-avatar--small">
                    <span className="avatar-monogram">{person.initials}</span>
                    <span className="avatar-tag">{person.category}</span>
                  </div>
                  <span className="eyebrow team-role">{person.role}</span>
                  <h3 className="team-name" style={{ fontSize: "18px" }}>
                    {person.name}
                  </h3>
                  <p className="team-bio" style={{ fontSize: "13px" }}>
                    {person.bio}
                  </p>
                  <div className="team-focus">
                    {person.focus.map((f) => (
                      <span className="tag" key={f}>
                        {f}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="section compact">
        <div className="container callout">
          <div>
            <span className="eyebrow">Collaborate With Us</span>
            <h2>Join the Lab as a Student or Researcher</h2>
            <p>
              DeKUT students interested in VLSI circuit design, embedded hardware, or final-year projects are encouraged to apply for lab attachment and mentorship opportunities.
            </p>
          </div>
          <Link className="button button-gold" href="/contact">
            Get in touch with the team →
          </Link>
        </div>
      </section>
    </main>
  );
}
