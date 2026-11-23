import Link from "@/components/next-link";

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="section">
      <div className="container">
        <span className="eyebrow">404 · Page not found</span>
        <h1>We couldn&apos;t find that page.</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        <Link className="button" href="/">Return to home</Link>
      </div>
    </main>
  );
}
