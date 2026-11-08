export type EventDetail = {
  slug: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  kind: "Workshop" | "Seminar" | "Open Day" | "Hackathon";
  status: "upcoming" | "past";
  summary: string;
  description: string;
  speakers: { name: string; title: string; affiliation: string }[];
  agenda: { time: string; session: string; speaker: string }[];
  visualKind: "laboratory" | "digital" | "analog" | "layout";
};

export const EVENTS_DATA: EventDetail[] = [
  {
    slug: "digital-design-workshop",
    title: "Digital VLSI Design & Synthesis Workshop",
    date: "November 18–19, 2026",
    time: "09:00 – 16:30 EAT",
    venue: "DICEL Workstations, DeKUT Nyeri Campus",
    kind: "Workshop",
    status: "upcoming",
    summary: "A practical 2-day intensive bootcamp covering Verilog RTL logic capture, Yosys open-source logic synthesis, and Artix-7 FPGA prototyping.",
    description: "Participants will be guided through building an end-to-end digital system: writing synthesizable SystemVerilog modules, running automated testbench simulations in Verilator, evaluating static timing slack, and programming Digilent Basys 3 FPGA hardware boards.",
    speakers: [
      { name: "Dr. Kelvin Mwai", title: "Lead Systems Architect", affiliation: "DICEL, DeKUT" },
      { name: "Eng. Brenda Wanjiku", title: "Senior IC Verification Engineer", affiliation: "DICEL, DeKUT" },
    ],
    agenda: [
      { time: "09:00 – 10:15", session: "Welcome, Semiconductor Context & Toolchain Setup", speaker: "Dr. Kelvin Mwai" },
      { time: "10:30 – 12:45", session: "Synthesizable Verilog Architecture & State Machines", speaker: "Eng. Brenda Wanjiku" },
      { time: "13:30 – 15:00", session: "Logic Synthesis with Yosys & Timing Slack Optimization", speaker: "Dr. Kelvin Mwai" },
      { time: "15:15 – 16:30", session: "Hands-on Bench Prototyping on Digilent Basys 3 FPGA", speaker: "All Instructors" },
    ],
    visualKind: "digital",
  },
  {
    slug: "research-seminar",
    title: "Research Seminar: Sensing Systems & Edge Microelectronics",
    date: "December 4, 2026",
    time: "14:00 – 17:00 EAT",
    venue: "DeKUT Resource Centre Dome · Hall B, Nyeri Campus",
    kind: "Seminar",
    status: "upcoming",
    summary: "Faculty presentations and guest lectures on low-power analog front-ends, biosensing, and embedded edge computing in sub-Saharan Africa.",
    description: "Features presentations from university researchers and semiconductor industry guests on ultra-low-power integrated circuits for agricultural and medical diagnostics. Concludes with a poster session presented by graduate research assistants.",
    speakers: [
      { name: "Prof. Jean Ndichu", title: "Lab Director", affiliation: "DeKUT IC Engineering Lab" },
      { name: "Caleb Kiprop", title: "Postgraduate Researcher", affiliation: "DICEL, DeKUT" },
    ],
    agenda: [
      { time: "14:00 – 14:15", session: "Opening Remarks: Microelectronics Research Horizons at DeKUT", speaker: "Prof. Jean Ndichu" },
      { time: "14:15 – 15:15", session: "Low-Power Analog Front-Ends for Soil & Water Impedance", speaker: "Caleb Kiprop" },
      { time: "15:30 – 16:30", session: "Panel: Developing Local Silicon Capabilities in East Africa", speaker: "Invited Panelists" },
      { time: "16:30 – 17:00", session: "Student Poster Exhibition & Networking Reception", speaker: "All Researchers" },
    ],
    visualKind: "analog",
  },
  {
    slug: "open-lab-day",
    title: "Annual Open Lab Day & Silicon Showcase",
    date: "January 22, 2027",
    time: "10:00 – 16:00 EAT",
    venue: "Origin Labs · Ground Floor, DeKUT Nyeri Main Campus",
    kind: "Open Day",
    status: "upcoming",
    summary: "Public exhibition of manufactured microchips, student capstone projects, cleanroom equipment tours, and high school STEM demonstrations.",
    description: "An annual open invitation for students, high school STEM groups, industry partners, and community members to explore the lab, observe silicon dies under optical microscopes, and see student-designed processor boards in action.",
    speakers: [
      { name: "Prof. Jean Ndichu & Faculty", title: "Academic Leadership", affiliation: "DICEL, DeKUT" },
      { name: "Student Project Leads", title: "Engineering Assistants", affiliation: "Origin Labs" },
    ],
    agenda: [
      { time: "10:00 – 11:30", session: "Guided Tour of Origin Labs Testbenches & Equipment", speaker: "Lab Assistants" },
      { time: "11:30 – 13:00", session: "Live Silicon Demonstration: Tiny Tapeout IC Characterization", speaker: "Faith Muthoni" },
      { time: "14:00 – 15:30", session: "Student Capstone Hardware Projects Showcase", speaker: "Final Year Students" },
      { time: "15:30 – 16:00", session: "Q&A on Joining Lab Research & Course Offerings", speaker: "Prof. Jean Ndichu" },
    ],
    visualKind: "laboratory",
  },
  {
    slug: "fpga-hackathon",
    title: "FPGA Design Sprint & Hardware Hackathon",
    date: "August 12–14, 2026",
    time: "48-Hour Sprint",
    venue: "Origin Labs Innovation Zone, DeKUT Nyeri",
    kind: "Hackathon",
    status: "past",
    summary: "Competitive 48-hour hardware sprint where student teams implemented accelerated signal processing and cryptographic state machines on FPGA fabrics.",
    description: "Eight multidisciplinary student teams competed to develop high-throughput, low-latency DSP blocks and hardware accelerators on Artix-7 and Gowin FPGAs, culminating in live bench demonstrations and judging.",
    speakers: [
      { name: "Dr. Kelvin Mwai", title: "Lead Judge", affiliation: "DICEL, DeKUT" },
      { name: "Dennis Ochieng", title: "Hackathon Coordinator", affiliation: "Origin Labs" },
    ],
    agenda: [
      { time: "Day 1, 09:00", session: "Challenge Announcement & Hardware Kit Distribution", speaker: "Dr. Kelvin Mwai" },
      { time: "Day 2, 14:00", session: "Mid-Sprint Mentor Code Review & Timing Slack Check", speaker: "Eng. Brenda Wanjiku" },
      { time: "Day 3, 11:00", session: "Final Hardware Demonstration & Oscilloscope Verification", speaker: "All Teams" },
      { time: "Day 3, 15:00", session: "Awards Presentation & Closing Ceremony", speaker: "Prof. Jean Ndichu" },
    ],
    visualKind: "digital",
  },
  {
    slug: "vlsi-seminar",
    title: "VLSI Research Seminar: Open-Source PDKs",
    date: "June 20, 2026",
    time: "14:00 – 17:00 EAT",
    venue: "Origin Labs Seminar Room, DeKUT Nyeri",
    kind: "Seminar",
    status: "past",
    summary: "In-depth technical seminar breaking down design-rule checks (DRC), layout vs. schematic (LVS), and antenna rules for the SkyWater 130nm process.",
    description: "Provided a deep dive into manufacturing design constraints for sub-micron CMOS, examining layout parasitics, metal fill density rules, and wafer dicing boundaries.",
    speakers: [
      { name: "Eng. Brenda Wanjiku", title: "Physical Design Lead", affiliation: "DICEL, DeKUT" },
    ],
    agenda: [
      { time: "14:00 – 15:15", session: "SkyWater 130nm DRC Rules, Enclosures & Metal Density", speaker: "Eng. Brenda Wanjiku" },
      { time: "15:30 – 16:45", session: "Parasitic Extraction and LVS Verification with Netgen", speaker: "Eng. Brenda Wanjiku" },
    ],
    visualKind: "layout",
  },
  {
    slug: "student-showcase",
    title: "Student Project Showcase & Silicon Bring-Up",
    date: "April 16, 2026",
    time: "11:00 – 15:00 EAT",
    venue: "DeKUT Origin Labs Clean Area",
    kind: "Open Day",
    status: "past",
    summary: "Celebrated the completion of student ASIC tapeout submissions and live oscilloscope bring-up of newly delivered test carrier boards.",
    description: "Undergraduate and postgraduate students demonstrated functional silicon dies received from fabrication partners, verifying clock frequencies, supply current draw, and logic outputs.",
    speakers: [
      { name: "Prof. Jean Ndichu", title: "Lab Director", affiliation: "DICEL, DeKUT" },
      { name: "All Student Tapeout Leads", title: "Researchers", affiliation: "DICEL" },
    ],
    agenda: [
      { time: "11:00 – 12:30", session: "Bring-Up Protocol & Power Supply Ramp Verification", speaker: "Lab Technical Team" },
      { time: "13:30 – 15:00", session: "Student Project Presentations and Oscilloscope Waveforms", speaker: "Student Leads" },
    ],
    visualKind: "laboratory",
  },
];
