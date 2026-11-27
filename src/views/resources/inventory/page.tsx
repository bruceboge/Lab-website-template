import Link from "@/components/next-link";
import { InventoryDashboard } from "./_components/InventoryDashboard";

export const metadata = {
  title: "Equipment & Hardware Inventory",
  description:
    "Browse microcontroller boards, FPGA trainers, analog sensors, and bench instrumentation listed for DeICE learning and research.",
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
          <h1>Inventory</h1>
          <p>
            Browse the equipment available for learning and research in the DeICE laboratory.
          </p>
        </div>
      </header>

      {/* Main Interactive Inventory Catalog */}
      <section className="section inventory-section">
        <div className="container">
          <InventoryDashboard />
        </div>
      </section>
    </main>
  );
}
