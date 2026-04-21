"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { SECTIONS } from "@/lib/constants";

export function TocSidebar() {
  const [active, setActive] = useState("hero");

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

  return (
    <nav className="fixed left-0 top-0 z-40 hidden h-screen w-52 border-r border-ink-100 bg-white/95 backdrop-blur-sm xl:flex xl:flex-col xl:justify-center">
      <ul className="space-y-0.5 px-4">
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={clsx(
                "block rounded px-3 py-1.5 text-[0.6875rem] font-medium transition-colors",
                active === section.id
                  ? "bg-ink-50 text-ink-900"
                  : "text-ink-400 hover:text-ink-600"
              )}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
