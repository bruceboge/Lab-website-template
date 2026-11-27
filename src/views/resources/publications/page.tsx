import Link from "@/components/next-link";
import Image from "next/image";

export const metadata = {
  title: "Publications & Research Reports",
  description:
    "Technical papers, conference proceedings, working reports, and open hardware releases from the DeKUT Integrated Circuit Engineering Lab.",
};

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: "Technical Report" | "Conference Paper" | "Hardware Release" | "White Paper";
  abstract: string;
  poster: string;
};

const publications: Publication[] = [
  {
    title: "15 MHz Frequency Synthesizer Digital Phase-Locked Loop Using 130 nm Technology",
    authors: "Ian Kigen, Marion Ogono, Esther Muraguri, Waweru Njeri",
    venue: "9th DeKUT STI&E International Conference",
    year: "2025",
    type: "Conference Paper",
    abstract: "Presents a 130 nm digital phase-locked loop designed to generate a 15 MHz output. The poster describes its phase-frequency detector, loop filter, voltage-controlled oscillator, and frequency divider.",
    poster: "/visuals/STI 15 MHZ FREQUENCY SYNTHESIZER.webp",
  },
  {
    title: "Low-Power Sigma-Delta Modulator for Hearing Aid Applications",
    authors: "Jesica Nyambura, Kelvin Rai, Waweru Njeri, Esther Muraguri",
    venue: "9th DeKUT STI&E Conference",
    year: "2025",
    type: "Conference Paper",
    abstract: "Describes a low-power 1-bit sigma-delta modulator for hearing aids, implemented using a 130 nm CMOS process. The poster reports a total power consumption of 121.9 μW.",
    poster: "/visuals/STI 2025 LOW POWER SIGMA.webp",
  },
  {
    title: "Low-Voltage CMOS Low-Noise Amplifier for IoT Application",
    authors: "Faith Muchira, Joel Mungai, Esther Muraguri, Waweru Njeri",
    venue: "9th DeKUT STI&E Conference",
    year: "2025",
    type: "Conference Paper",
    abstract: "Presents a CMOS common-source cascode low-noise amplifier with inductive degeneration for IoT receiver applications, including simulated gain, noise, and matching results.",
    poster: "/visuals/STI 2025 LOW VOLTAGE CMOS.webp",
  },
  {
    title: "Design of a Low-Cost RFID System for Medical Equipment Tracking in Kenyan Hospitals",
    authors: "Kariuki J. Kiboi, Kirera Angela Wambui, Princeley Muthomi, Waweru Njeri, Wambui Nyabero",
    venue: "9th DeKUT STI&E International Conference",
    year: "2025",
    type: "Conference Paper",
    abstract: "Proposes an RFID-based system for tracking medical equipment in Kenyan hospitals, combining a reader, antennas, and a dashboard to support equipment visibility and inventory management.",
    poster: "/visuals/STI 2025 MEDICAL.webp",
  },
  {
    title: "RFID-Based Smart Speed Advisory System for Enhanced Road Safety",
    authors: "Collins Theuri, Felix Kipkosgei, Johnson Karimi, Waweru Njeri",
    venue: "9th DeKUT STI&E International Conference",
    year: "2025",
    type: "Conference Paper",
    abstract: "Describes a hybrid speed advisory system using roadside RFID tags for zone detection and GPS as a fallback, with on-vehicle speed monitoring, voice alerts, and event telemetry.",
    poster: "/visuals/STI 2025 RFID.webp",
  },
  {
    title: "VLSI Decimation Filter for Sigma-Delta ADC for Audio Applications",
    authors: "Ann Njeri Mucheke, Ian Roy Otieno, Esther Muraguri, Waweru Njeri",
    venue: "9th DeKUT STI&E Conference",
    year: "2025",
    type: "Conference Paper",
    abstract: "Presents a two-stage FIR-CIC decimation filter for audio that converts a 1-bit, 3.072 MHz signal to 16-bit samples at 48 kHz, targeting digital hearing-aid applications.",
    poster: "/visuals/STI 2025 VLSI DECIMATION.webp",
  },
];

export default function PublicationsPage() {
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
                <span aria-current="page">Publications</span>
              </li>
            </ol>
          </nav>
          <h1>Publications</h1>
          <p>
            Peer-reviewed papers, institutional technical reports, white papers, and open hardware releases authored by researchers and students at the DeKUT Integrated Circuit Engineering Lab.
          </p>
        </div>
      </header>

      <section className="section publications-section">
        <div className="container">
          <div className="content-list">
            {publications.map((pub) => (
              <article className="list-item publication-item" key={pub.title}>
                <div className="pub-body">
                  <div className="pub-meta">
                    <span className="eyebrow pub-type">{pub.type}</span>
                    <span className="pub-year">Year: {pub.year}</span>
                  </div>
                  <h3 className="pub-title">{pub.title}</h3>
                  <p className="pub-authors">
                    <b>Authors:</b> {pub.authors}
                  </p>
                  <p className="pub-venue">
                    <i>{pub.venue}</i>
                  </p>
                  <p className="pub-abstract">{pub.abstract}</p>
                </div>

                <div className="pub-action">
                  <a
                    className="pub-poster-link"
                    href={pub.poster}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open poster for ${pub.title}`}
                  >
                    <Image
                      className="pub-poster"
                      src={pub.poster}
                      alt={`Conference poster: ${pub.title}`}
                      width={900}
                      height={1400}
                    />
                    <span>Open poster ↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
