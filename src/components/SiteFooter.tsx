import Link from "next/link";
import LabBrand from "@/components/LabBrand";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <LabBrand />
          <p>
            Research, education, and silicon engineering for integrated circuits.
          </p>
          <small>
            DeKUT Integrated Circuit Engineering Lab (DICEL)
            <br />
            Dedan Kimathi University of Technology
            <br />
            Nyeri, Kenya.
          </small>
        </div>
        <div>
          <b>Lab</b>
          <Link href="/about">About the Lab</Link>
          <Link href="/team">Research Team</Link>
          <Link href="/about/gallery">Lab Gallery</Link>
          <Link href="/projects">Silicon Projects</Link>
          <Link href="/events">Events & Workshops</Link>
        </div>
        <div>
          <b>Resources</b>
          <Link href="/resources/inventory">Equipment Inventory</Link>
          <Link href="/resources/courses">Courses & Syllabi</Link>
          <Link href="/resources/courses/ic-design-process">From Idea to Silicon</Link>
          <Link href="/resources/tools">Tools & EDA Stack</Link>
          <Link href="/resources/publications">Publications</Link>
          <Link href="/support">Support the Lab</Link>
        </div>
        <div>
          <b>Contact</b>
          <Link href="/contact">Contact the Lab</Link>
          <a href="mailto:deice@dkut.ac.ke">deice@dkut.ac.ke</a>
          <a href="tel:+254722956166">+254 722 956 166</a>
          <div
            className="social-icons"
            role="group"
            aria-label="Institutional links and community channels"
          >
            <a
              href="https://www.linkedin.com/school/dedan-kimathi-university-of-technology/"
              target="_blank"
              rel="noreferrer"
              aria-label="DeKUT LinkedIn"
              title="DeKUT LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@DeKUTKenya"
              target="_blank"
              rel="noreferrer"
              aria-label="DeKUT YouTube Channel"
              title="DeKUT YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.dkut.ac.ke"
              target="_blank"
              rel="noreferrer"
              aria-label="DeKUT Official Portal"
              title="DeKUT University Portal"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 DICEL · Dedan Kimathi University of Technology</span>
        <span>Integrated Circuit Engineering Lab · Nyeri, Kenya</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
