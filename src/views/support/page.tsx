import Link from "@/components/next-link";

export const metadata = {
  title: "Support DeICE",
  description: "Partner with DeICE through equipment, research funding, scholarships, mentorship, and collaboration.",
};

export default function SupportPage() {
  return (
    <main id="main" tabIndex={-1} className="content-page">
      <header className="page-hero">
        <div className="container page-hero-inner">
          <h1>Support</h1>
          <p>Help strengthen laboratory education, student research, and semiconductor engineering capacity.</p>
        </div>
      </header>

      <section className="section">
        <div className="container support-simple">
          <div className="support-copy">
            <h2>Ways to support the lab</h2>
            <ul>
              <li>Equipment and hardware donations</li>
              <li>Silicon shuttle and tapeout funding</li>
              <li>Student research fellowships and scholarships</li>
              <li>Industry mentorship and collaborative projects</li>
            </ul>
          </div>
          <div className="support-copy">
            <h2>Partnership enquiries</h2>
            <p>For corporate sponsorships, institutional grants, or research partnerships, contact the laboratory administration.</p>
            <p><b>Email:</b> <a href="mailto:deice@dkut.ac.ke">deice@dkut.ac.ke</a><br /><b>Phone:</b> <a href="tel:+254722956166">+254 722 956 166</a></p>
            <div className="actions">
              <Link className="button button-gold" href="/contact">Contact the Lab</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
