"use client";

import Link from "next/link";
import { useRef, type FocusEvent, type KeyboardEvent } from "react";

type NavigationLink = {
  label: string;
  href: string;
};

export default function NavigationDropdown({
  label,
  links,
  id,
  className,
}: {
  label: string;
  links: NavigationLink[];
  id: string;
  className: string;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const hovered = useRef(false);

  function handleBlur(event: FocusEvent<HTMLDetailsElement>) {
    if (!event.currentTarget.contains(event.relatedTarget) && !hovered.current) {
      event.currentTarget.open = false;
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDetailsElement>) {
    if (event.key === "Escape") {
      event.currentTarget.open = false;
      event.currentTarget.querySelector("summary")?.focus();
    }
  }

  return (
    <details
      className={`nav-dropdown ${className}`}
      ref={detailsRef}
      onMouseEnter={() => {
        hovered.current = true;
        if (detailsRef.current) detailsRef.current.open = true;
      }}
      onMouseLeave={() => {
        hovered.current = false;
        if (
          detailsRef.current &&
          !detailsRef.current.contains(document.activeElement)
        ) {
          detailsRef.current.open = false;
        }
      }}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <summary aria-controls={id}>
        {label} <span className="nav-chevron" aria-hidden="true">⌄</span>
      </summary>
      <div className="nav-dropdown-menu" id={id}>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
