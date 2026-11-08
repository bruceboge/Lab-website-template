import type { Metadata } from "next";
import Link from "next/link";
import { LabVisual } from "@/components/LabVisual";
import { DraftNotice } from "@/components/DraftNotice";

export const metadata: Metadata = {
  title: "Resources, Inventory & Learning Pathways",
  description:
    "Explore equipment inventory, course syllabi, EDA software tools, design process guides, and academic publications from DICEL at DeKUT.",
};

const resourceCards = [
  {
    tag: "Hardware & Loans",
    title: "Equipment & Hardware Inventory",
    description: "Review the equipment catalog and current loan-request process. Confirm availability and borrowing requirements with the lab.",
    href: "/resources/inventory",
    visualKind: "laboratory" as const,
    cta: "Browse Inventory Dashboard →",
  },
  {
    tag: "Academic Curriculum",
    title: "Courses & Design Practice",
    description: "Browse course descriptions, learning pathways, and design-process material related to integrated circuits and embedded systems.",
    href: "/resources/courses",
    visualKind: "digital" as const,
    cta: "Explore Courses →",
  },
  {
    tag: "Technical Guide",
    title: "From Idea to Silicon (IC Flow)",
    description: "A step-by-step engineering walkthrough from system requirements, architecture, and RTL simulation through synthesis, physical DRC/LVS layout, and tape-out.",
    href: "/resources/courses/ic-design-process",
    visualKind: "layout" as const,
    cta: "Read Design Process Guide →",
  },
  {
    tag: "EDA & Workbenches",
    title: "Tools, EDA Software & Facilities",
    description: "Find information about electronic design automation (EDA) software, simulation tools, and laboratory facilities.",
    href: "/resources/tools",
    visualKind: "digital" as const,
    cta: "Explore Design Tools →",
  },
  {
    tag: "Research Outputs",
    title: "Publications & Technical Papers",
    description: "Peer-reviewed conference papers, technical reports, and open hardware releases authored by DICEL researchers and students.",
    href: "/resources/publications",
    visualKind: "analog" as const,
    cta: "View Publications →",
  },
];

export default function ResourcesPage() {
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
                <span aria-current="page">Resources</span>
              </li>
            </ol>
          </nav>
          <span className="eyebrow">Hub · Learning & Infrastructure</span>
          <h1>Resources & Infrastructure</h1>
          <p>
            Explore our hardware inventory dashboard, academic course syllabi, EDA software workflows, technical design guides, and published research.
          </p>
        </div>
      </header>

      <div className="container draft-notice-wrap">
        <DraftNotice>
          Course outlines, equipment listings, software availability, and facility
          details are provisional and must be confirmed by the lab.
        </DraftNotice>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Academic & Hardware Access</span>
            <h2>Explore Lab Resources</h2>
            <p>
              Tools, facilities, and educational pathways designed to empower students and researchers at every stage of the silicon design journey.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 28 }}>
            {resourceCards.map((res) => (
              <Link
                className="card image-card"
                href={res.href}
                key={res.title}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <LabVisual kind={res.visualKind} showBadge={false} />
                <div className="inner-card-copy" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <span className="eyebrow" style={{ color: "var(--gold)", marginBottom: 4 }}>
                    {res.tag}
                  </span>
                  <h3>{res.title}</h3>
                  <p style={{ flex: 1, marginBottom: 16 }}>{res.description}</p>
                  <span className="card-foot" style={{ marginTop: "auto", paddingTop: 14 }}>
                    <b style={{ color: "var(--accent)" }}>{res.cta}</b>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
