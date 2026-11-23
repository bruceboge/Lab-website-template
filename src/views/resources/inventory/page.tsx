import Link from "@/components/next-link";
import { InventoryDashboard } from "./_components/InventoryDashboard";

export const metadata = {
  title: "Equipment & Hardware Inventory",
  description:
    "Browse microcontroller boards, FPGA trainers, analog sensors, and bench instrumentation listed for DICEL learning and research.",
};

export default function InventoryPage() {
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
                <span aria-current="page">Inventory</span>
              </li>
            </ol>
          </nav>
          <h1>Inventory & Facilities</h1>
          <p>
            Browse a draft listing of development boards, FPGA trainers, sensors, test instruments, and prototyping kits.
          </p>
        </div>
      </header>

      {/* Main Interactive Inventory Catalog */}
      <section className="section inventory-section">
        <div className="container">
          <InventoryDashboard />
          <div className="facility-list">
            <h2>Software & Facilities</h2>
            <div className="facility-list-grid">
              <article><h3>Digital EDA</h3><p>Yosys, OpenROAD/OpenLane, OpenSTA, Vivado</p></article>
              <article><h3>Analog Simulation</h3><p>ngspice, Xyce, Qucs-S, MATLAB/Simulink</p></article>
              <article><h3>Verification</h3><p>Verilator, Cocotb, Icarus Verilog, GTKWave</p></article>
              <article><h3>Layout & Signoff</h3><p>KLayout, Magic VLSI, Netgen, SkyWater 130nm PDK</p></article>
              <article><h3>Bench Facilities</h3><p>Oscilloscopes, dual function generators, DC supplies, logic analyzers</p></article>
              <article><h3>Visit or Access</h3><p><Link href="/contact">Schedule a laboratory visit or equipment enquiry</Link></p></article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
