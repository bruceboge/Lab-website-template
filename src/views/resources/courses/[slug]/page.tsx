import Link from "@/components/next-link";

export const metadata = {
  title: "Course Details",
  description: "Course details for a DeICE integrated circuit engineering programme.",
};

const courseNames: Record<string, string> = {
  "digital-vlsi-design": "Digital VLSI Design",
  "analog-vlsi-design": "Analog VLSI Design",
  "signals-and-ic-design": "Signals & IC Design",
  "mixed-signal-design": "Mixed-Signal Design",
  "embedded-systems-fpga": "Embedded Systems & FPGA",
};

export default function CourseDetailPage({ params }: { params?: { slug?: string } }) {
  const slug = params?.slug ?? "";
  const title = courseNames[slug] ?? "Course";

  return (
    <main id="main" tabIndex={-1} className="content-page">
      <header className="page-hero">
        <div className="container page-hero-inner">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumbs">
              <li><Link href="/resources">Resources</Link></li>
              <li><span className="breadcrumb-divider">/</span><Link href="/resources/courses">Courses</Link></li>
              <li><span className="breadcrumb-divider">/</span><span aria-current="page">{title}</span></li>
            </ol>
          </nav>
          <h1>{title}</h1>
          <p>Course details will be expanded in the next development phase.</p>
        </div>
      </header>
    </main>
  );
}
