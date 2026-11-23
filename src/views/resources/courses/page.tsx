import Link from "@/components/next-link";

export const metadata = {
  title: "Integrated Circuit & Embedded Courses",
  description:
    "Explore academic courses in Digital VLSI, Analog ICs, Signals, Mixed-Signal Design, and Embedded Systems at Dedan Kimathi University of Technology.",
};

type CoursePathway = {
  slug: string;
  title: string;
  level: string;
  duration: string;
  prerequisites: string;
  leadInstructor: string;
  summary: string;
  syllabus: string[];
  labHardware: string;
  visualKind: "digital" | "analog";
};

const courses: CoursePathway[] = [
  {
    slug: "digital-vlsi-design",
    title: "Digital VLSI Design",
    level: "Undergraduate (Year 4) / Postgraduate",
    duration: "14 Weeks · 42 Lecture Hours + 28 Hands-On Lab Hours",
    prerequisites: "Digital Logic Design, Computer Organization & C/C++ Programming",
    leadInstructor: "Dr. Kelvin Mwai & Eng. Brenda Wanjiku",
    summary: "Comprehensive study of digital integrated circuit architecture from RTL logic specification to gate-level synthesis, static timing analysis, and physical cell placement.",
    syllabus: [
      "Verilog & SystemVerilog for synthesizable RTL digital logic design.",
      "Logic synthesis principles, standard cell library mapping, and area-timing optimization with Yosys.",
      "Static Timing Analysis (STA), setup/hold slack, and clock tree synthesis with OpenSTA.",
      "Placement and routing (P&R) workflows targeting open-source SkyWater 130nm standard cells.",
    ],
    labHardware: "Digilent Basys 3 Artix-7 FPGA, Tang Nano 20K, 16-Channel Logic Analyzers",
    visualKind: "digital",
  },
  {
    slug: "analog-vlsi-design",
    title: "Analog VLSI Design",
    level: "Undergraduate (Year 4) / Postgraduate",
    duration: "14 Weeks · 42 Lecture Hours + 28 Circuit Simulation Hours",
    prerequisites: "Electronic Circuit Analysis, Semiconductor Device Physics & Differential Equations",
    leadInstructor: "Prof. Jean Ndichu & Caleb Kiprop",
    summary: "Transistor-level design of analog integrated circuits in submicron CMOS technologies. Covers small-signal modeling, differential amplifiers, frequency compensation, and physical layout matching.",
    syllabus: [
      "MOSFET device physics, BSIM models, and subthreshold conduction in low-power regimes.",
      "Single-stage amplifiers, active current mirrors, and cascode output stages.",
      "Two-stage operational transconductance amplifiers (OTA) and Miller frequency compensation.",
      "Analog physical layout: common-centroid geometry, dummy devices, guard rings, and parasitic extraction.",
    ],
    labHardware: "Arbitrary Waveform Generators, Rigol 4-Channel Oscilloscopes, INA219 Current Probes",
    visualKind: "analog",
  },
  {
    slug: "signals-and-ic-design",
    title: "Signals & IC Design",
    level: "Undergraduate (Year 3 / 4)",
    duration: "14 Weeks · 42 Lecture Hours + 20 Laboratory Practicals",
    prerequisites: "Circuit Theory, Signals and Systems, Calculus & Linear Algebra",
    leadInstructor: "Prof. Jean Ndichu & Grace Wambui",
    summary: "Explores the fundamental intersection of continuous-time/discrete-time signal processing and practical integrated circuit implementation. Emphasizes sensor conditioning and data converter architectures.",
    syllabus: [
      "Fourier transforms, Laplace analysis, and frequency-domain response of active analog filters.",
      "Continuous-time Butterworth and Chebyshev active filter design with integrated op-amps.",
      "Nyquist sampling theory, anti-aliasing filter constraints, and signal-to-noise ratio (SNR) budgets.",
      "Interfacing physical transducers (biomedical, environmental) to integrated analog front-ends.",
    ],
    labHardware: "AD8232 ECG AFE, BME280 Sensors, MPU-6050 IMUs, Bench Power Supplies",
    visualKind: "analog",
  },
  {
    slug: "mixed-signal-design",
    title: "Mixed-Signal Design",
    level: "Advanced Postgraduate / Specialist Elective",
    duration: "14 Weeks · 42 Lecture Hours + 30 Advanced Design Hours",
    prerequisites: "Analog VLSI Design, Digital VLSI Design & Probability/Random Signals",
    leadInstructor: "Eng. Brenda Wanjiku & Prof. Jean Ndichu",
    summary: "Advanced techniques for integrating sensitive analog circuitry and noisy digital switching logic on the same silicon substrate. Covers switched-capacitor circuits, ADCs, DACs, and clock synchronization.",
    syllabus: [
      "Switched-capacitor resistor equivalents, integrators, and discrete-time biquad filters.",
      "Flash, SAR, and Sigma-Delta Analog-to-Digital Converter (ADC) topologies and trade-offs.",
      "Phase-Locked Loops (PLLs), voltage-controlled oscillators (VCOs), and clock jitter reduction.",
      "Substrate noise coupling, guard-ring isolation techniques, and mixed-signal verification.",
    ],
    labHardware: "Tiny Tapeout Silicon Carriers, Precision Bench DMMs, High-Frequency DSO Stations",
    visualKind: "analog",
  },
  {
    slug: "embedded-systems-fpga",
    title: "Embedded Systems & FPGA",
    level: "Undergraduate (Year 3 / 4)",
    duration: "14 Weeks · 36 Lecture Hours + 36 Laboratory Practicals",
    prerequisites: "Microprocessor Systems, Assembly Language & Digital Systems",
    leadInstructor: "Dr. Kelvin Mwai & Dennis Ochieng",
    summary: "Hands-on engineering of microcontrollers, FPGA logic fabrics, and real-time operating systems (RTOS). Students build complete hardware/software co-designs communicating over standard buses.",
    syllabus: [
      "ARM Cortex-M architecture, memory mapping, interrupt service routines, and NVIC configuration.",
      "FPGA fabric architecture: LUTs, slice flip-flops, block RAMs, and clock management tiles.",
      "Serial bus protocol controllers: SPI, I2C, and UART peripheral state machines in HDL.",
      "Real-time operating system concepts using FreeRTOS: tasks, queues, semaphores, and timing deadlines.",
    ],
    labHardware: "Arduino Uno R4, ESP32-S3, Raspberry Pi Pico, STM32 Nucleo, Digilent Basys 3",
    visualKind: "digital",
  },
];

export default function CoursesPage() {
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
                <span aria-current="page">Courses</span>
              </li>
            </ol>
          </nav>
          <h1>Courses</h1>
          <p>
            Digital VLSI, analog microelectronics, mixed-signal systems, signals, and embedded hardware.
          </p>
        </div>
      </header>

      <section className="section course-list-section">
        <div className="container">
          <div className="course-simple-list">
            {courses.map((course) => (
              <Link className="course-simple-row" href={`/resources/courses/${course.slug}`} key={course.title}>
                <span className="eyebrow">{course.level}</span>
                <h2>{course.title}</h2>
                <span className="course-row-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
            <Link className="course-simple-row" href="/resources/courses/ic-design-process">
              <span className="eyebrow">Learning Guide</span>
              <h2>From Idea to Silicon</h2>
              <span className="course-row-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
