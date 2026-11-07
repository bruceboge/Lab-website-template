export type ProjectDetail = {
  slug: string;
  title: string;
  type: "Analog" | "Digital" | "Mixed-Signal" | "Verification" | "IoT Silicon";
  status: "Active" | "Completed" | "Tapeout Ready";
  year: string;
  targetNode: string;
  summary: string;
  problemStatement: string;
  architecture: string;
  specs: { label: string; value: string }[];
  toolsUsed: string[];
  outcomes: string[];
  leadResearcher: string;
  visualKind: "analog" | "digital" | "layout" | "laboratory";
};

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    slug: "low-power-sensor-interface",
    title: "Low-Power Sensor Interface Concept",
    type: "Analog",
    status: "Active",
    year: "2026",
    targetNode: "SkyWater 130nm CMOS (High-Density)",
    summary: "An energy-conscious analog front-end readout chain engineered for soil impedance and environmental monitoring nodes in East African precision agriculture.",
    problemStatement: "Off-the-shelf instrumentation amplifiers consume tens of milliwatts and introduce significant 1/f noise at low biosensing frequencies, rapidly draining battery and solar-harvested energy in remote agricultural fields.",
    architecture: "Chopper-stabilized capacitive-feedback instrumentation amplifier (IA) combined with a programmable gain stage and a 12-bit successive approximation register (SAR) ADC. The analog signal path achieves ultra-low input offset and sub-microamp quiescent draw.",
    specs: [
      { label: "Target Quiescent Current", value: "< 1.8 μA at 1.8V supply" },
      { label: "Common-Mode Rejection (CMRR)", value: "> 94 dB at 50/60 Hz" },
      { label: "Input-Referred Noise", value: "22 nV/√Hz @ 1 kHz" },
      { label: "Effective Resolution", value: "11.2 ENOB" },
    ],
    toolsUsed: ["ngspice / Xyce", "Magic VLSI Layout", "KLayout DRC/LVS", "Python PySpice Automation"],
    outcomes: [
      "Completed transistor-level schematic capture and corner simulation across -20°C to +85°C.",
      "Achieved sub-2μA total power envelope in typical-typical corner.",
      "Layout submission slated for next open multi-project wafer (MPW) round.",
    ],
    leadResearcher: "Caleb Kiprop & Prof. Jean Ndichu",
    visualKind: "analog",
  },
  {
    slug: "risc-v-fpga-platform",
    title: "RISC-V Soft-Core on FPGA",
    type: "Digital",
    status: "Active",
    year: "2026",
    targetNode: "Xilinx Artix-7 & Gowin GW2AR",
    summary: "An educational 32-bit pipelined processor core implementing the RV32I base integer instruction set, designed for hardware/software co-design teaching and accelerator research.",
    problemStatement: "Undergraduate computer architecture students often encounter CPU design purely through theoretical simulators without hands-on verification of pipeline hazards, branch prediction penalties, and physical hardware constraints.",
    architecture: "Classic 5-stage RISC pipeline (Fetch, Decode, Execute, Memory, Writeback) with full data-forwarding paths and hardware stall detection. Includes standard AXI4-Lite master bus interfacing to dual-port instruction and data memories, UART telemetry, and custom accelerator slots.",
    specs: [
      { label: "Instruction Set", value: "RV32I (32-bit Base Integer)" },
      { label: "Pipeline Depth", value: "5-Stage In-Order Pipelined" },
      { label: "Clock Frequency", value: "50 MHz (Artix-7) / 27 MHz (Gowin)" },
      { label: "Resource Utilization", value: "1,450 LUTs + 4 Block RAMs" },
    ],
    toolsUsed: ["SystemVerilog", "Yosys Open Synthesis", "nextpnr", "Verilator C++ Simulation"],
    outcomes: [
      "Successfully runs compiled bare-metal C programs and algorithmic benchmarks.",
      "Validated with automated RISC-V compliance test suites (riscv-tests) achieving 100% pass rate.",
      "Deployed across DeKUT undergraduate laboratory workstations for practical coursework.",
    ],
    leadResearcher: "Dr. Kelvin Mwai & Faith Muthoni",
    visualKind: "digital",
  },
  {
    slug: "biomedical-afe",
    title: "Biomedical Signal Front-End",
    type: "Mixed-Signal",
    status: "Active",
    year: "2025",
    targetNode: "SkyWater 130nm Mixed-Signal PDK",
    summary: "A low-noise, high-CMRR biopotential instrumentation amplifier tailored for electrocardiogram (ECG) and electromyogram (EMG) non-invasive diagnostics.",
    problemStatement: "Biopotential signals feature microvolt-level amplitudes enveloped in large common-mode electrical noise and electrode half-cell offset potentials up to ±300 mV, necessitating sophisticated analog filtering before conversion.",
    architecture: "Two-stage capacitive-coupled instrumentation amplifier utilizing pseudo-resistor biasing to achieve sub-Hz high-pass cutoff frequencies. Integrated Driven-Right-Leg (DRL) circuitry suppresses 50Hz mains power interference.",
    specs: [
      { label: "Passband", value: "0.05 Hz to 150 Hz (-3 dB)" },
      { label: "Midband Voltage Gain", value: "46 dB (Programmable)" },
      { label: "Total Harmonic Distortion", value: "< 0.4% at 10 mVpp input" },
      { label: "Electrode Offset Tolerance", value: "±350 mV DC" },
    ],
    toolsUsed: ["Cadence Virtuoso / ngspice", "MATLAB Signal Processing", "Magic Layout"],
    outcomes: [
      "Simulated transient response validated using MIT-BIH Arrhythmia Database synthetic ECG waveforms.",
      "Fabrication review completed for submission via educational silicon partnership.",
    ],
    leadResearcher: "Caleb Kiprop & Eng. Brenda Wanjiku",
    visualKind: "analog",
  },
  {
    slug: "sram-layout-study",
    title: "SRAM Cell Layout Study",
    type: "Verification",
    status: "Completed",
    year: "2025",
    targetNode: "SkyWater 130nm & GF180MCU",
    summary: "Comparative layout and design-rule verification study of high-density 6T static RAM bitcells, investigating lithographic tolerances and parasitic extraction.",
    problemStatement: "Dense memory arrays dominate modern SoC silicon area. Minor design rule marginalities in bitline routing or contact enclosures can induce write-failure or static noise margin (SNM) degradation under process variation.",
    architecture: "Exploration of thin-cell and tall-cell 6T topologies. Examines cross-coupled CMOS inverters with dual NMOS access pass-gates, optimizing symmetrical bitline contacts to minimize parasitic capacitance and wordline delay.",
    specs: [
      { label: "Bitcell Dimensions", value: "1.82 μm × 1.34 μm (SkyWater 130nm)" },
      { label: "Hold Static Noise Margin", value: "285 mV at VDD = 1.8V" },
      { label: "Read SNM", value: "142 mV worst-case" },
      { label: "Array Capacity", value: "1 KB (128 words × 64 bits)" },
    ],
    toolsUsed: ["KLayout", "Magic VLSI", "Netgen LVS", "OpenSTA Static Timing Analyzer"],
    outcomes: [
      "Zero DRC violations confirmed across clean SkyWater 130nm and GF180 design rule decks.",
      "Comprehensive extraction of parasitic capacitances fed back into Monte Carlo read/write simulations.",
      "Compiled into a published reference layout tutorial for VLSI student modules.",
    ],
    leadResearcher: "Eng. Brenda Wanjiku",
    visualKind: "layout",
  },
  {
    slug: "uart-verification",
    title: "UART Verification Environment",
    type: "Digital",
    status: "Completed",
    year: "2025",
    targetNode: "Universal Verilog / SystemVerilog IP",
    summary: "A production-grade, UVM-compliant automated functional verification testbench for configurable asynchronous serial communication IP cores.",
    problemStatement: "Silicon tapeout respins frequently stem from untested corner cases in asynchronous clock domain crossings, baud rate drift, and parity frame edge anomalies.",
    architecture: "Constrained-random stimulus generation architecture using Cocotb and SystemVerilog. Features scoreboarding with automated golden-model comparison, covergroup metrics for all baud divisors, and corrupted packet injection testing.",
    specs: [
      { label: "Functional Coverage", value: "100% of defined covergroups" },
      { label: "Line & Branch Coverage", value: "98.7% statement coverage" },
      { label: "Baud Range Supported", value: "9600 bps to 3.0 Mbps" },
      { label: "Error Injection", value: "Parity, Framing, and Break faults" },
    ],
    toolsUsed: ["Verilator", "Cocotb Python Framework", "GTKWave", "GitHub Actions CI"],
    outcomes: [
      "Open-source repository integrated into automated regression test pipelines.",
      "Identified and rectified 3 undocumented FIFO overflow corner cases in legacy IP.",
    ],
    leadResearcher: "Faith Muthoni & Dr. Kelvin Mwai",
    visualKind: "digital",
  },
  {
    slug: "ring-oscillator-monitor",
    title: "Ring-Oscillator Process Monitor",
    type: "IoT Silicon",
    status: "Tapeout Ready",
    year: "2026",
    targetNode: "SkyWater 130nm Standard Cells",
    summary: "An on-chip diagnostic test circuit featuring an array of odd-stage inverting rings to quantify post-fabrication process, voltage, and temperature (PVT) variations.",
    problemStatement: "Manufacturing non-uniformities cause transistor drive strengths and threshold voltages to deviate from nominal simulation models. Fast, non-destructive on-chip characterization is required upon receiving physical silicon.",
    architecture: "Array of selectable 11-stage, 21-stage, and 31-stage ring oscillators utilizing high-speed, standard, and low-leakage inverter cells. Connected to an on-chip ripple counter and prescaler to output a measurable low-frequency square wave to external GPIO pads.",
    specs: [
      { label: "Nominal Oscillation Freq", value: "185 MHz (11-stage in typical-typical)" },
      { label: "Prescaler Division Ratio", value: "Divide-by-1024 (Output ~180 kHz)" },
      { label: "Supply Voltage Sensitivity", value: "14.2% frequency shift per 100 mV" },
      { label: "Silicon Footprint", value: "0.018 mm²" },
    ],
    toolsUsed: ["Yosys", "OpenROAD", "Magic", "OpenSTA"],
    outcomes: [
      "GDSII layout completed and validated through full DRC and antenna rule checks.",
      "Included in the DeKUT student ASIC multi-project shuttle submission.",
    ],
    leadResearcher: "Dr. Kelvin Mwai & Dennis Ochieng",
    visualKind: "layout",
  },
];

