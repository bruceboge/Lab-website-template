import Link from "@/components/next-link";
import { LabVisual } from "@/components/LabVisual";

export const metadata = {
  title: "Laboratory Gallery · DeICE DeKUT",
  description:
    "Visual tour of the DeKUT Integrated Circuit Engineering Laboratory, showcasing design workstations, measurement instrumentation, and silicon prototypes.",
};

const galleryItems: {
  kind: "laboratory" | "layout" | "analog" | "digital";
  src: string;
  alt: string;
  title: string;
  category: string;
}[] = [
  {
    kind: "laboratory",
    src: "/visuals/ORIGIN LAB BANNER.webp",
    alt: "Origin Labs and DeICE hardware engineering entrance banner at DeKUT",
    title: "Origin Labs & DeICE Facility",
    category: "Hardware Facility",
  },
  {
    kind: "layout",
    src: "/visuals/DICEL ENTRANCE VIEW.webp",
    alt: "Research posters and work area inside the DeICE workspace",
    title: "DeICE Laboratory Entrance & Poster Wall",
    category: "Research Showcase",
  },
  {
    kind: "digital",
    src: "/visuals/DICEL ENTRANCE VIEW2.webp",
    alt: "Research posters displayed inside the DeICE workspace",
    title: "Silicon & VLSI Research Gallery",
    category: "Digital VLSI",
  },
  {
    kind: "analog",
    src: "/visuals/OFFICE 1.webp",
    alt: "Interior workspace at the DeKUT Integrated Circuit Engineering Laboratory",
    title: "DeICE Design Studio & Workstations",
    category: "Analog & Mixed-Signal",
  },
  {
    kind: "laboratory",
    src: "/visuals/OFFICE 2.webp",
    alt: "Equipment and workstations inside the DeKUT laboratory",
    title: "Measurement & Bench Bring-Up Station",
    category: "Hardware Facility",
  },
  {
    kind: "laboratory",
    src: "/visuals/ENTRANCE.webp",
    alt: "Main entrance to the DeICE integrated circuit engineering laboratory",
    title: "DeKUT IC Engineering Lab Entrance",
    category: "Campus Lab",
  },
  {
    kind: "layout",
    src: "/visuals/ORIGIN BANNER HALF.webp",
    alt: "Origin Labs branding panel at Dedan Kimathi University of Technology",
    title: "Origin Labs Engineering Wing",
    category: "Hardware Facility",
  },
  {
    kind: "digital",
    src: "/visuals/STI 15 MHZ FREQUENCY SYNTHESIZER.webp",
    alt: "STI conference poster for a 15 MHz digital phase-locked loop in 130nm CMOS",
    title: "15 MHz Frequency Synthesizer DPLL",
    category: "STI&E 2025 Conference",
  },
  {
    kind: "analog",
    src: "/visuals/STI 2025 LOW POWER SIGMA.webp",
    alt: "STI conference poster for a low-power sigma-delta modulator for hearing aids",
    title: "Low-Power Sigma-Delta Modulator",
    category: "STI&E 2025 Conference",
  },
  {
    kind: "analog",
    src: "/visuals/STI 2025 LOW VOLTAGE CMOS.webp",
    alt: "STI conference poster for a low-voltage CMOS low-noise amplifier",
    title: "Low-Voltage CMOS LNA for IoT",
    category: "STI&E 2025 Conference",
  },
  {
    kind: "digital",
    src: "/visuals/STI 2025 VLSI DECIMATION.webp",
    alt: "STI conference poster for a VLSI decimation filter for audio applications",
    title: "VLSI Decimation Filter Architecture",
    category: "STI&E 2025 Conference",
  },
  {
    kind: "laboratory",
    src: "/visuals/STI 2025 MEDICAL.webp",
    alt: "STI conference poster for a low-cost RFID medical equipment tracking system",
    title: "RFID Medical Equipment Tracking",
    category: "STI&E 2025 Conference",
  },
];

export default function GalleryPage() {
  return (
    <main id="main" tabIndex={-1} className="content-page gallery-page">
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
                <Link href="/about">About</Link>
              </li>
              <li>
                <span className="breadcrumb-divider" aria-hidden="true">
                  /
                </span>
                <span aria-current="page">Gallery</span>
              </li>
            </ol>
          </nav>
          <h1>Gallery</h1>
          <p>
            A visual tour of the people, places, and workflows behind DeICE&apos;s work.
          </p>
        </div>
      </header>

      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure key={item.title} className="gallery-card">
                <LabVisual kind={item.kind} src={item.src} alt={item.alt} showBadge={false} />
                <figcaption className="gallery-card-copy">
                  <div>
                    <span className="gallery-card-category">{item.category}</span>
                    <h3 title={item.title}>{item.title}</h3>
                  </div>
                  <span className="gallery-card-arrow" aria-hidden="true">
                    →
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
