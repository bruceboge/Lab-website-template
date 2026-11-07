import Link from "next/link";
import type { ReactNode } from "react";

export default function ContentPage({
  title,
  intro,
  breadcrumbs = [],
  children,
}: {
  title?: string;
  intro?: string;
  breadcrumbs?: { label: string; href: string }[];
  children?: ReactNode;
}) {
  return (
    <main id="main" tabIndex={-1} className="content-page">
      <header className="page-hero">
        <div className="container page-hero-inner">
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumbs">
                <li>
                  <Link href="/">Home</Link>
                </li>
                {breadcrumbs.map((crumb, idx) => (
                  <li key={crumb.href}>
                    <span className="breadcrumb-divider" aria-hidden="true">
                      /
                    </span>
                    {idx === breadcrumbs.length - 1 ? (
                      <span aria-current="page">{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href}>{crumb.label}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {title && <h1>{title}</h1>}
          {intro && <p>{intro}</p>}
        </div>
      </header>

      {children && <div className="container section">{children}</div>}
    </main>
  );
}
