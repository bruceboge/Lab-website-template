"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const THEME_CHANGE_EVENT = "dicel-theme-change";

function applyTheme(theme: Theme) {
  document.documentElement.dataset["theme"] = theme;
  document.documentElement.style.colorScheme = theme;
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset["theme"] === "dark" ? "dark" : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribeToTheme(onChange: () => void) {
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");
  const updateFromSystem = (event: MediaQueryListEvent) => {
    try {
      if (window.localStorage.getItem("dicel-theme")) {
        return;
      }
    } catch {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
  };
  const updateFromStorage = (event: StorageEvent) => {
    if (event.key !== "dicel-theme") {
      return;
    }

    if (event.newValue === "light" || event.newValue === "dark") {
      applyTheme(event.newValue);
    } else {
      applyTheme(systemPreference.matches ? "dark" : "light");
    }
  };

  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  window.addEventListener("storage", updateFromStorage);
  systemPreference.addEventListener("change", updateFromSystem);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", updateFromStorage);
    systemPreference.removeEventListener("change", updateFromSystem);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);

    try {
      window.localStorage.setItem("dicel-theme", nextTheme);
    } catch {
      // The selected theme remains active for this page when storage is unavailable.
    }
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
        </svg>
      )}
    </button>
  );
}
