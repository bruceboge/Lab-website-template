import Link from "@/components/next-link";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projects";
import { LabVisual } from "@/components/LabVisual";

export function generateStaticParams() {
  return PROJECTS_DATA.map(({ slug }) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} · IC Research Project`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    throw notFound();
  }

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
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <span className="breadcrumb-divider" aria-hidden="true">
                  /
                </span>
                <span aria-current="page">{project.title}</span>
              </li>
            </ol>
          </nav>

          <div className="project-detail-hero-meta">
            <span className="eyebrow">{project.type} IC Design</span>
          </div>

          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </header>

      {/* Meta Highlights Strip */}
      <div className="container" style={{ marginTop: "-24px", position: "relative", zIndex: 3 }}>
        <div className="proof-strip">
          <div className="proof-item">
            <small>Target Node</small>
            <span><b>{project.targetNode}</b></span>
          </div>
          <div className="proof-item">
            <small>Academic Year</small>
            <span><b>{project.year}</b></span>
          </div>
          <div className="proof-item">
            <small>Lead Researcher</small>
            <span><b>{project.leadResearcher}</b></span>
          </div>
          <div className="proof-item">
            <small>Facility</small>
            <span><b>Origin Labs · DeKUT</b></span>
          </div>
        </div>
      </div>

      <section className="section project-detail-body">
        <div className="container project-detail-grid">
          {/* Main Technical Brief */}
          <div className="project-detail-content">
            <article className="project-detail-section">
              <span className="eyebrow">Problem Statement</span>
              <h2>Engineering Motivation</h2>
              <p>{project.problemStatement}</p>
            </article>

            <article className="project-detail-section">
              <span className="eyebrow">Architecture & Methodology</span>
              <h2>System Architecture & Design</h2>
              <p>{project.architecture}</p>
            </article>

            <article className="project-detail-section">
              <span className="eyebrow">Parametric Metrics</span>
              <h2>Simulated & Measured Specifications</h2>
              <div className="specs-table-wrap">
                <table className="specs-table">
                  <thead>
                    <tr>
                      <th>Design Parameter</th>
                      <th>Target / Measured Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.specs.map((spec) => (
                      <tr key={spec.label}>
                        <td><b>{spec.label}</b></td>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="project-detail-section">
              <span className="eyebrow">Design Deliverables</span>
              <h2>Outcomes & Milestones</h2>
              <ul className="project-outcomes-list">
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>
                    <span className="outcome-bullet">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>

            <div className="project-nav-back">
              <Link href="/projects" className="button secondary">
                ← Back to All Projects
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="project-detail-sidebar">
            <div className="card sidebar-card">
              <LabVisual kind={project.visualKind} showBadge={true} />
              <div className="sidebar-copy">
                <h3>EDA Tools & Workflows</h3>
                <div className="sidebar-tools">
                  {project.toolsUsed.map((tool) => (
                    <span className="tag" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card sidebar-card" style={{ marginTop: 20 }}>
              <span className="eyebrow">Research Enquiries</span>
              <h3>Collaborate on this Project</h3>
              <p>
                Interested in testing this IP, co-authoring a publication, or sponsoring next-generation tapeouts?
              </p>
              <Link className="button button-gold" href="/contact">
                Contact the Research Lead →
              </Link>
            </div>

            <div className="card sidebar-card" style={{ marginTop: 20 }}>
              <span className="eyebrow">Equipment Used</span>
              <h3>Required Lab Hardware</h3>
              <p>
                This project relies on lab instrumentation and prototyping hardware available in our inventory.
              </p>
              <Link className="button button-outline-green" href="/resources/inventory">
                Browse Inventory Catalog →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
