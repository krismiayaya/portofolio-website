"use client";

import { navigation, profile } from "@/data/content";
import { useEffect, useRef, useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  useEffect(() => {
    if (!open) return;

    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-slate-950/90">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <a href="#top" className="whitespace-nowrap text-sm font-bold tracking-tight text-ink dark:text-white">Krismia Rohma<span className="text-teal">.</span></a>
        <div className="flex items-center gap-2 lg:hidden"><button onClick={toggleTheme} className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-base text-ink dark:border-white/15 dark:text-white" aria-label={dark ? "Use light mode" : "Use dark mode"}>{dark ? "☀" : "☾"}</button><button onClick={() => setOpen(!open)} className="rounded-full px-3 py-2 text-sm font-semibold text-ink dark:text-white" aria-expanded={open} aria-label="Toggle menu">Menu</button></div>
        <div className={`${open ? "flex" : "hidden"} absolute left-0 top-16 w-full flex-col gap-4 border-b border-ink/5 bg-white px-5 py-5 dark:border-white/10 dark:bg-slate-950 sm:px-8 lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:dark:bg-transparent`}>
          {navigation.map((item) => <a key={item.href} onClick={() => setOpen(false)} href={item.href} className="text-sm font-medium text-ink/65 transition hover:text-teal dark:text-slate-300 dark:hover:text-teal">{item.label}</a>)}
          <button onClick={toggleTheme} className="hidden h-9 w-9 place-items-center rounded-full border border-ink/10 text-base text-ink transition hover:border-teal hover:text-teal dark:border-white/15 dark:text-white lg:grid" aria-label={dark ? "Use light mode" : "Use dark mode"}>{dark ? "☀" : "☾"}</button>
          <a href={profile.cvUrl} onClick={() => setOpen(false)} download className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal">Download CV ↓</a>
        </div>
      </nav>
    </header>
  );
}
