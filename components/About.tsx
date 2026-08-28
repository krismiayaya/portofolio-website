import { about, strengths } from "@/data/content";

export function About() {
  return <section id="about" className="border-y border-ink/5 bg-slate-50/60 dark:border-white/10 dark:bg-slate-900/60"><div className="section grid gap-10 md:grid-cols-[.8fr_1.4fr]">
    <div><p className="eyebrow">01 — Profile</p><h2 className="section-title">Product thinking, with technical depth.</h2></div>
    <div><p className="max-w-3xl text-base leading-7 text-ink/70 dark:text-slate-300 sm:text-lg sm:leading-8">{about}</p><div className="mt-9 border-t border-ink/10 pt-6 dark:border-white/10"><p className="text-sm font-semibold uppercase tracking-[.14em] text-ink/45 dark:text-slate-500">What I bring to a team</p><ul className="mt-4 space-y-3">{strengths.map((strength) => <li key={strength} className="flex gap-3 text-ink/75 dark:text-slate-300"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />{strength}</li>)}</ul></div></div>
  </div></section>;
}
