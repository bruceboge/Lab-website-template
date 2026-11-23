"use client";
import Link from "@/components/next-link";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";

const destinations = [
  { label: "Home", description: "DICEL overview and featured work", href: "/", keywords: "start landing" },
  { label: "About the lab", description: "Mission, facilities, and contact information", href: "/about", keywords: "about lab overview" },
  { label: "Team", description: "Meet the people at DICEL", href: "/team", keywords: "people staff researchers" },
  { label: "Gallery", description: "Photos and visual highlights", href: "/about/gallery", keywords: "photos images" },
  { label: "Projects", description: "Research and engineering projects", href: "/projects", keywords: "research design engineering" },
  { label: "Events", description: "Lab events and activities", href: "/events", keywords: "calendar workshops talks" },
  { label: "Resources", description: "Learning, publications, and lab resources", href: "/resources", keywords: "learning" },
  { label: "Courses", description: "Courses and learning materials", href: "/resources/courses", keywords: "classes lessons education" },
  { label: "IC design process", description: "A guide to integrated-circuit design", href: "/resources/courses/ic-design-process", keywords: "chip stages guide" },
  { label: "Tools and facilities", description: "Lab equipment and facilities", href: "/resources/tools", keywords: "equipment tools" },
  { label: "Inventory", description: "Search equipment and availability", href: "/resources/inventory", keywords: "borrow hardware stock" },
  { label: "Publications", description: "Research publications and reading", href: "/resources/publications", keywords: "papers articles" },
  { label: "Support the lab", description: "Partnership and support information", href: "/support", keywords: "partners sponsorship donate" },
  { label: "Contact", description: "Get in touch with the lab", href: "/contact", keywords: "email phone message" },
];
const EMPTY_RECENT_HREFS: string[] = [];
let recentHrefsSnapshot: string[] = EMPTY_RECENT_HREFS;
const RECENT_PAGES_EVENT = "dicel-recent-pages-change";

function readRecentHrefs(): string[] {
  try {
    const saved = window.localStorage.getItem("dicel-recent-pages");
    if (!saved) {
      return [];
    }

    const parsed: unknown = JSON.parse(saved);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (href): href is string =>
        typeof href === "string" &&
        destinations.some((destination) => destination.href === href),
    );
  } catch {
    return [];
  }
}

function getRecentHrefsSnapshot() {
  return recentHrefsSnapshot;
}

function subscribeToRecentHrefs(onChange: () => void) {
  function syncFromStorage() {
    recentHrefsSnapshot = readRecentHrefs();
    onChange();
  }

  window.addEventListener(RECENT_PAGES_EVENT, syncFromStorage);
  window.addEventListener("storage", syncFromStorage);
  syncFromStorage();

  return () => {
    window.removeEventListener(RECENT_PAGES_EVENT, syncFromStorage);
    window.removeEventListener("storage", syncFromStorage);
  };
}

function saveRecentHrefs(hrefs: string[]) {
  recentHrefsSnapshot = hrefs;
  try {
    window.localStorage.setItem("dicel-recent-pages", JSON.stringify(hrefs));
  } catch {
    // Recent destinations remain available until this page is closed.
  }
  window.dispatchEvent(new Event(RECENT_PAGES_EVENT));
}

function matchesSearch(text: string, query: string) {
  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return true;
  }
  if (normalizedText.includes(normalizedQuery)) {
    return true;
  }

  return normalizedQuery
    .split(/\s+/)
    .every((term) =>
      term.length < 3
        ? false
        : normalizedText.split(/\s+/).some((word) => {
            let queryIndex = 0;
            for (const character of word) {
              if (character === term[queryIndex]) {
                queryIndex += 1;
              }
              if (queryIndex === term.length) {
                return true;
              }
            }
            return false;
          }),
    );
}

export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const recentHrefs = useSyncExternalStore(
    subscribeToRecentHrefs,
    getRecentHrefsSnapshot,
    () => EMPTY_RECENT_HREFS,
  );
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const recentDestinations = useMemo(
    () =>
      recentHrefs
        .map((href) => destinations.find((destination) => destination.href === href))
        .filter((destination) => destination !== undefined),
    [recentHrefs],
  );
  const results = useMemo(() => {
    if (!query.trim()) {
      return recentDestinations.length > 0
        ? recentDestinations
        : destinations.slice(0, 6);
    }

    return destinations.filter((destination) =>
      matchesSearch(
        `${destination.label} ${destination.description} ${destination.keywords}`,
        query,
      ),
    );
  }, [query, recentDestinations]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((currentlyOpen) => !currentlyOpen);
      }
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  function rememberDestination(href: string) {
    const nextRecentHrefs = [
      href,
      ...recentHrefs.filter((recentHref) => recentHref !== href),
    ].slice(0, 5);
    saveRecentHrefs(nextRecentHrefs);
    setOpen(false);
  }

  return (
    <>
      <button
        className="site-search-trigger"
        type="button"
        aria-label="Search the DICEL website"
        aria-keyshortcuts="Control+K Meta+K"
        title="Search the DICEL website (Ctrl+K / Cmd+K)"
        onClick={() => {
          setQuery("");
          setOpen(true);
        }}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 5 5" />
        </svg>
      </button>
      <dialog
        className="site-search-dialog"
        ref={dialogRef}
        aria-labelledby="site-search-title"
        onClose={() => setOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            setOpen(false);
          }
        }}
      >
        <div className="site-search-panel">
          <div className="site-search-heading">
            <h2 id="site-search-title">Search DICEL</h2>
            <button
              type="button"
              className="site-search-close"
              aria-label="Close search"
              onClick={() => setOpen(false)}
            >
              Esc
            </button>
          </div>
          <label className="site-search-field">
            <span className="visually-hidden">Search pages and resources</span>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search pages, projects, courses, equipment..."
              autoComplete="off"
              enterKeyHint="search"
            />
          </label>
          <p className="site-search-caption" aria-live="polite">
            {query.trim()
              ? `${results.length} ${results.length === 1 ? "result" : "results"}`
              : recentDestinations.length > 0
                ? "Recently visited"
                : "Suggested pages"}
          </p>
          {results.length > 0 ? (
            <ul className="site-search-results">
              {results.map((destination) => (
                <li key={destination.href}>
                  <Link
                    href={destination.href}
                    onClick={() => rememberDestination(destination.href)}
                  >
                    <span>{destination.label}</span>
                    <small>{destination.description}</small>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="site-search-empty">
              No matching pages. Try a broader term or browse the main navigation.
            </p>
          )}
        </div>
      </dialog>
    </>
  );
}
