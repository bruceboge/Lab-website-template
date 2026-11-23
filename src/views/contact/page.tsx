import Link from "@/components/next-link";
import { EnquiryForm } from "@/views/contact/_components/EnquiryForm";

export const metadata = {
  title: "Contact DICEL · DeKUT",
  description:
    "Contact DICEL at Dedan Kimathi University of Technology about research, learning opportunities, equipment, or collaboration.",
};

export default function ContactPage() {
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
                <span aria-current="page">Contact</span>
              </li>
            </ol>
          </nav>
          <h1>Contact</h1>
          <p>
            Have a question about our IC research projects, course prerequisites, hardware inventory loans, or industry partnerships? Send our team a message.
          </p>
        </div>
      </header>

      <section className="section contact-section">
        <div className="container contact-layout">
          {/* Contact Details & Map info */}
          <div className="contact-details">
            <h2>Get in Touch</h2>

            <a className="contact-detail" href="mailto:deice@dkut.ac.ke">
              <span className="contact-symbol" aria-hidden="true">
                @
              </span>
              <span>
                <small>Official Lab Email</small>
                <b>deice@dkut.ac.ke</b>
              </span>
            </a>

            <a className="contact-detail" href="tel:+254722956166">
              <span className="contact-symbol" aria-hidden="true">
                Phone
              </span>
              <span>
                <small>Telephone / WhatsApp</small>
                <b>+254 722 956 166</b>
              </span>
            </a>

            <div className="contact-location" style={{ marginTop: 24 }}>
              <span className="eyebrow">Physical Location</span>
              <p style={{ margin: "6px 0 10px" }}>
                <b>Dedan Kimathi University of Technology (DeKUT)</b>
                <br />
                DICEL · Integrated Circuit Engineering Lab
                <br />
                Origin Labs Building, Ground Floor
                <br />
                Nyeri-Mweiga Road, Nyeri, Kenya
              </p>
              <a
                href="https://maps.google.com/?q=Dedan+Kimathi+University+of+Technology"
                target="_blank"
                rel="noreferrer"
                className="button button-small button-outline-green"
              >
                Get Directions in Google Maps ↗
              </a>
            </div>

          </div>

          {/* Form Panel */}
          <div className="contact-form-panel card">
            <span className="eyebrow">Online Inquiry Form</span>
            <h2>Send Us a Message</h2>
            <p style={{ marginBottom: 24 }}>
              Fill in your details below and our team will direct your inquiry to the relevant faculty or laboratory coordinator.
            </p>
            <EnquiryForm submit="Send Message →" />
          </div>
        </div>
      </section>
    </main>
  );
}
