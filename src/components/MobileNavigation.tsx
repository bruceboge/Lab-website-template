"use client";
import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import PrimaryNavigation from "@/components/PrimaryNavigation";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggleRef.current?.focus();
    }
  }

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element && event.target.closest("a")) {
      setOpen(false);
    }
  }

  return (
    <div
      className={`mobile-nav${open ? " is-open" : ""}`}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      <button
        className="mobile-nav-toggle"
        ref={toggleRef}
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-primary-navigation"
        onClick={() => setOpen((currentlyOpen) => !currentlyOpen)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      {open ? (
        <div
          className="mobile-nav-backdrop"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      ) : null}
      <PrimaryNavigation mobile id="mobile-primary-navigation" hidden={!open} />
    </div>
  );
}
