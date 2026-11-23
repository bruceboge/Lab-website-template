import Link from "@/components/next-link";
import { PROJECTS_DATA } from "@/data/projects";
import { LabVisual } from "@/components/LabVisual";

export const metadata = {
  title: "Integrated Circuit Engineering Projects",
  description:
    "Explore silicon research, digital processors, analog interfaces, and verification projects at Dedan Kimathi University of Technology.",
};

export default function ProjectsPage() {
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
                <span aria-current="page">Projects</span>
              </li>
            </ol>
          </nav>
          <h1>Projects</h1>
          <p>
            Explore active research prototypes, tapeout shuttles, and educational hardware systems spanning digital VLSI, analog front-ends, physical layout, and automated verification.
          </p>
        </div>
      </header>

      <section className="section projects-section">
        <div className="container">
          <div className="project-simple-list">
            {PROJECTS_DATA.map((project) => (
              <Link
                className="project-simple-row"
                href={`/projects/${project.slug}`}
                key={project.slug}
              >
                <LabVisual kind={project.visualKind} showBadge={false} />
                <div>
                  <span className="eyebrow">{project.type} · {project.status} · {project.year}</span>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                </div>
                <span className="project-row-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
