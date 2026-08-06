import { caseStudies } from "@/data/content";

export function CaseStudies() {
  return <section id="case-studies" className="section"><p className="eyebrow">04 — Selected work</p><h2 className="section-title">Featured case studies.</h2>
    <div className="mt-12 space-y-6">{caseStudies.map((study) => <article key={study.number} className="group rounded-2xl border border-ink/10 p-6 transition hover:border-teal/45 hover:shadow-xl hover:shadow-ink/5 sm:p-9">
      <div className="grid gap-8 lg:grid-cols-[100px_1fr]"><span className="font-mono text-sm text-teal">{study.number}</span><div><p className="text-sm font-medium uppercase tracking-[.12em] text-ink/45">{study.subtitle}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{study.title}</h3><p className="mt-5 max-w-2xl leading-7 text-ink/70">{study.context}</p>
      {study.features.length > 0 && <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{study.features.map(([title, description]) => <div key={title} className="rounded-xl bg-slate-50 p-4"><h4 className="text-sm font-semibold text-ink">{title}</h4><p className="mt-2 text-sm leading-6 text-ink/60">{description}</p></div>)}</div>}
      <div className="mt-8 border-l-2 border-teal pl-4"><p className="text-sm font-semibold text-teal">Impact</p><p className="mt-1 leading-7 text-ink/75">{study.impact}</p></div></div></div>
    </article>)}</div>
  </section>;
}
