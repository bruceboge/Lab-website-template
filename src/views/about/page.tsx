import Link from "@/components/next-link";
import { LabVisual } from "@/components/LabVisual";

export const metadata = {
  title: "About DeICE",
  description: "About the Integrated Circuit Engineering Lab at Dedan Kimathi University of Technology.",
};

const milestones = [
  ["2022", "DeICE established", "The lab began developing microelectronics teaching, facilities, and design tools."],
  ["2023", "Open-silicon curriculum", "Open-source semiconductor workflows and SkyWater 130nm PDK education were integrated."],
  ["2024", "Advanced prototyping", "Origin Labs expanded with precision oscilloscopes, function generators, and assembly facilities."],
  ["2025/2026", "Silicon development", "The laboratory supported multi-project tapeouts, silicon bring-up, and regional collaboration."],
];

export default function AboutPage() {
  return (
    <main id="main" tabIndex={-1} className="content-page">
      <header className="page-hero">
        <div className="container page-hero-inner">
          <h1>About the Lab</h1>
          <p>Integrated circuit engineering, electronic systems research, and hands-on semiconductor education at DeKUT.</p>
        </div>
      </header>

      <section className="section about-story">
        <div className="container about-story-grid">
          <div className="about-story-copy">
            <h2>Our laboratory</h2>
            <p>DeICE brings together students, faculty, and research partners to learn and work on integrated circuits and electronic systems. It connects circuit theory with practical silicon design, testing, and embedded hardware development.</p>
            <p>Our work includes digital and analog integrated circuit design, FPGA prototyping, verification, physical layout, and low-power sensor systems.</p>
          </div>
          <LabVisual kind="laboratory" showBadge={false} eager />
        </div>
      </section>

      <section className="section compact about-purpose">
        <div className="container about-purpose-grid">
          <article>
            <span className="eyebrow">Vision</span>
            <h2>A leading East African semiconductor engineering hub.</h2>
          </article>
          <article>
            <span className="eyebrow">Mission</span>
            <h2>Educate, research, and prototype through open tools and practical engineering.</h2>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container about-values-grid">
          <h2>Core values</h2>
          <ul>
            <li><b>Academic rigor</b><span>Ground circuit decisions in physics, modeling, and verification.</span></li>
            <li><b>Open-source silicon</b><span>Use accessible EDA tools and open process design kits.</span></li>
            <li><b>Local impact</b><span>Develop electronics for practical African engineering needs.</span></li>
            <li><b>Hands-on mentorship</b><span>Give students early access to real hardware and laboratory practice.</span></li>
          </ul>
        </div>
      </section>

      <section className="section compact about-history">
        <div className="container">
          <h2>Brief history</h2>
          <div className="about-milestones">
            {milestones.map(([year, title, description]) => (
              <article key={year}>
                <b>{year}</b>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-location">
          <div>
            <h2>Where to find us</h2>
            <p><b>Origin Labs, Ground Floor</b><br />Dedan Kimathi University of Technology<br />Nyeri-Mweiga Road, Nyeri, Kenya</p>
            <p>Monday to Friday, 08:30–17:00 EAT</p>
          </div>
          <div className="about-location-actions">
            <a className="button button-gold" href="https://maps.google.com/?q=Dedan+Kimathi+University+of+Technology" target="_blank" rel="noreferrer">Open in Google Maps</a>
            <Link className="button button-outline-green" href="/contact">Contact the Lab</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
