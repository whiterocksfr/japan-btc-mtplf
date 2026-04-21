"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { SECTIONS } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const activeLabel =
    SECTIONS.find((s) => s.id === active)?.label || "Overview";

  return (
    <div className="xl:hidden">
      {/* Sticky top bar */}
      <div
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 flex h-12 items-center justify-between px-4 transition-all duration-200",
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-ink-100 shadow-sm"
            : "bg-transparent"
        )}
      >
        <span
          className={clsx(
            "text-xs font-medium transition-opacity duration-200",
            scrolled ? "text-ink-500 opacity-100" : "opacity-0"
          )}
        >
          {activeLabel}
        </span>

        <button
          onClick={() => setOpen(!open)}
          className={clsx(
            "flex h-8 w-8 items-center justify-center rounded-sm transition-colors",
            scrolled
              ? "text-ink-600 hover:bg-ink-50"
              : "text-white/70 hover:text-white"
          )}
          aria-label="Toggle navigation"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l10 10M14 4L4 14" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 5h14M2 9h14M2 13h14" />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Menu panel */}
      <div
        className={clsx(
          "fixed top-12 left-0 right-0 z-50 max-h-[70vh] overflow-y-auto border-b border-ink-100 bg-white shadow-lg transition-all duration-200",
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <nav className="px-4 py-3">
          <ul className="space-y-0.5">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "block rounded-sm px-3 py-2 text-sm transition-colors",
                    active === section.id
                      ? "bg-ink-50 font-medium text-ink-900"
                      : "text-ink-500 hover:text-ink-700 hover:bg-ink-50/50"
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
