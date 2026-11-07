import type { Metadata } from "next";
import Link from "next/link";
import { InventoryDashboard } from "./_components/InventoryDashboard";

export const metadata: Metadata = {
  title: "Equipment & Hardware Inventory",
  description:
    "Browse microcontroller boards, FPGA trainers, analog sensors, and bench instrumentation available for loan and course practicals at DeKUT CDED.",
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
          <span className="eyebrow">Hardware & Equipment · Origin Labs</span>
          <h1>Lab Equipment & Materials Inventory</h1>
          <p>
            Browse a draft listing of development boards, FPGA trainers, sensors, test instruments, and prototyping kits.
          </p>
        </div>
      </header>

      <div className="container draft-notice-wrap">
        <p className="inventory-data-note" role="note">
          Equipment counts and availability are sample catalog data and need confirmation from CDED staff. A submitted request is not a reservation; wait for lab approval before collecting equipment.
        </p>
      </div>

      {/* Guidance Cards */}
      <section className="section compact inventory-guidance-section">
        <div className="container">
          <div className="grid-3 inventory-guidance">
            <article className="card guidance-card">
              <span className="guidance-num">01</span>
              <span className="eyebrow">Borrowing Policy</span>
              <h3>Take-Home Student Loans</h3>
              <p>
                Microcontrollers, FPGA development kits, and sensor bundles are available for 14- to 30-day student project loans with course lecturer endorsement.
              </p>
            </article>

            <article className="card guidance-card">
              <span className="guidance-num">02</span>
              <span className="eyebrow">Bench Facilities</span>
              <h3>Supervised On-Site Stations</h3>
              <p>
                High-speed digital oscilloscopes, function generators, and micro-soldering stations are reserved for on-site use at Origin Labs benches under staff guidance.
              </p>
            </article>

            <article className="card guidance-card">
              <span className="guidance-num">03</span>
              <span className="eyebrow">Collection Desk</span>
              <h3>Pickup at Origin Labs</h3>
              <p>
                Present your digital loan reference pass at the CDED Ground Floor equipment desk during lab hours (Monday to Friday, 08:30 – 16:30).
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Main Interactive Inventory Catalog */}
      <section className="section inventory-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Catalog Preview</span>
            <h2>Browse & Request Hardware</h2>
            <p>
              Filter equipment by course, category, or availability status. Click &quot;Borrow Hardware&quot; to generate an official loan request pass.
            </p>
          </div>

          <InventoryDashboard />
        </div>
      </section>
    </main>
  );
}
