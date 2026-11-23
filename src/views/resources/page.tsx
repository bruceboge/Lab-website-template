import Link from "@/components/next-link";

export const metadata = {
  title: "Resources, Inventory & Learning Pathways",
  description:
    "Explore equipment inventory, course syllabi, EDA software tools, design process guides, and academic publications from DICEL at DeKUT.",
};

const resourceCards = [
  {
    tag: "Research",
    title: "Publications",
    description: "Technical papers, reports, and open hardware releases.",
    href: "/resources/publications",
  },
  {
    tag: "Learning",
    title: "Courses",
    description: "The laboratory's courses and learning pathways.",
    href: "/resources/courses",
  },
  {
    tag: "Facilities",
    title: "Inventory & Facilities",
    description: "Equipment, software, benches, and access information.",
    href: "/resources/inventory",
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
          <h1>Resources</h1>
          <p>
            Publications, courses, and laboratory equipment and facilities.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="resource-dashboard">
            {resourceCards.map((res) => (
              <Link className="resource-dashboard-row" href={res.href} key={res.title}>
                <span className="eyebrow">{res.tag}</span>
                <h2>{res.title}</h2>
                <p>{res.description}</p>
                <span className="resource-row-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
