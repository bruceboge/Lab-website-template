import Link from "@/components/next-link";
import LabBrand from "@/components/LabBrand";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteFooter() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div>
          <LabBrand />
          <p>DeKUT&apos;s integrated circuit engineering laboratory for education, research, and open-source silicon.</p>
          <Link className="footer-action" href="/contact">Contact the laboratory</Link>
        </div>
        <div>
          <b>Research</b>
          <Link href="/projects">Projects</Link>
          <Link href="/resources/publications">Publications</Link>
          <Link href="/resources/inventory">Inventory</Link>
        </div>
        <div>
          <b>Learning</b>
          <Link href="/resources/courses">Courses</Link>
          <Link href="/resources/courses/ic-design-process">IC Design Process</Link>
          <Link href="/resources">Resources</Link>
        </div>
        <div>
          <b>Organisation</b>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/events">Events</Link>
          <Link href="/about/gallery">Gallery</Link>
          <Link href="/support">Support</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-university">
          <a href="https://www.dkut.ac.ke" target="_blank" rel="noreferrer">
            Dedan Kimathi University of Technology
          </a>
          <span>© 2026 DICEL · All rights reserved</span>
        </div>
        <div className="footer-controls">
          <ThemeToggle />
          <div
            className="social-icons"
            role="group"
            aria-label="Institutional links"
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
          <a className="back-to-top" href="#top" aria-label="Back to top">↑</a>
        </div>
      </div>
    </footer>
  );
}
