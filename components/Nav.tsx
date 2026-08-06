"use client";

import { navigation, profile } from "@/data/content";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8" aria-label="Main navigation">
        <a href="#top" className="text-sm font-bold tracking-tight text-ink">KR<span className="text-teal">.</span></a>
        <button onClick={() => setOpen(!open)} className="text-sm font-semibold md:hidden" aria-expanded={open} aria-label="Toggle menu">Menu</button>
        <div className={`${open ? "flex" : "hidden"} absolute left-0 top-16 w-full flex-col gap-4 border-b border-ink/5 bg-white px-6 py-5 md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
          {navigation.map((item) => <a key={item.href} onClick={() => setOpen(false)} href={item.href} className="text-sm font-medium text-ink/65 transition hover:text-teal">{item.label}</a>)}
          <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-teal transition hover:text-ink">Let&apos;s talk ↗</a>
        </div>
      </nav>
    </header>
  );
}
