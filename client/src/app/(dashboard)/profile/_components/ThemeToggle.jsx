"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

// Icons swap via CSS so server and client render the same markup.
// The pre-paint script in app/layout.jsx applies the saved theme.
export default function ThemeToggle({ className = "" }) {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <button type="button" onClick={toggle} aria-label="تغییر حالت تیره و روشن" className={className}>
      <MoonIcon className="w-5 h-5 [.dark-mode_&]:hidden" aria-hidden="true" />
      <SunIcon className="w-5 h-5 hidden [.dark-mode_&]:block" aria-hidden="true" />
    </button>
  );
}
