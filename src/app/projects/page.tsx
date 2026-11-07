import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { LabVisual } from "@/components/LabVisual";
import { DraftNotice } from "@/components/DraftNotice";

export const metadata: Metadata = {
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
          <span className="eyebrow">Research & Development · Silicon Engineering</span>
          <h1>Lab Projects & Silicon Designs</h1>
          <p>
            Explore active research prototypes, tapeout shuttles, and educational hardware systems spanning digital VLSI, analog front-ends, physical layout, and automated verification.
          </p>
        </div>
      </header>

      <div className="container draft-notice-wrap">
        <DraftNotice>Project status, technical metrics, outcomes, and researcher details are draft records that need confirmation.</DraftNotice>
      </div>

      <section className="section projects-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Engineering Prototypes</span>
            <h2>Current & Completed Projects</h2>
            <p>
              Each project combines disciplined engineering practice with open-source toolchains, targeting measurable real-world performance and educational rigor.
            </p>
          </div>

          <div className="grid-3">
            {PROJECTS_DATA.map((project) => (
              <Link
                className="card project-card image-card"
                href={`/projects/${project.slug}`}
                key={project.slug}
              >
                <LabVisual kind={project.visualKind} showBadge={false} />
                <div className="project-card-copy">
                  <div className="project-card-meta">
                    <span className="tag">{project.type}</span>
                    <span className="tag-status">{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-node-badge">Target: {project.targetNode}</p>
                  <p>{project.summary}</p>
                  <span className="card-foot">
                    <span>Year: {project.year}</span>
                    <b>View Architecture & Specs <span aria-hidden="true">↗</span></b>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Callout */}
      <section className="section compact">
        <div className="container callout">
          <div>
            <span className="eyebrow">Shared Research</span>
            <h2>Collaborate on an IC Design or Tapeout</h2>
            <p>
              We welcome academic partnerships, joint tapeout proposals on open PDKs, and industry-sponsored student projects. Contact the lab to discuss shared opportunities.
            </p>
          </div>
          <Link className="button button-gold" href="/contact">
            Start a Collaboration Enquiry →
          </Link>
        </div>
      </section>
    </main>
  );
}
