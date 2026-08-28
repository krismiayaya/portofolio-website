import { caseStudies } from "@/data/content";
import { CaseStudyGallery } from "@/components/CaseStudyGallery";

export function CaseStudies() {
  return <section id="case-studies" className="section"><p className="eyebrow">04 — Selected work</p><h2 className="section-title">Products built around real field needs.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-ink/65 dark:text-slate-400 sm:text-lg sm:leading-8">A snapshot of how I turn client context, operational complexity, and cross-functional delivery into product direction.</p>
    <div className="mt-10 min-w-0 space-y-6 sm:mt-12">{caseStudies.map((study) => <article key={study.number} className="group min-w-0 max-w-full rounded-2xl border border-ink/10 p-5 transition hover:border-teal/45 hover:shadow-xl hover:shadow-ink/5 dark:border-white/10 dark:bg-slate-900/40 sm:p-9">
      <div className="grid min-w-0 gap-5 lg:grid-cols-[100px_minmax(0,1fr)] lg:gap-8"><span className="font-mono text-sm text-teal">{study.number}</span><div className="min-w-0 max-w-full"><p className="break-words text-xs font-medium uppercase leading-5 tracking-[.12em] text-ink/45 dark:text-slate-500 sm:text-sm">{study.subtitle}</p><h3 className="mt-2 break-words text-2xl font-semibold tracking-tight text-ink dark:text-white sm:text-3xl">{study.title}</h3><p className="mt-5 max-w-2xl break-words leading-7 text-ink/70 dark:text-slate-300">{study.context}</p>
      {study.features.length > 0 && <div className="mt-8 grid w-full max-w-lg min-w-0 gap-3 sm:max-w-4xl sm:grid-cols-2 lg:grid-cols-3">{study.features.map(([title, description]) => <div key={title} className="min-w-0 max-w-full rounded-xl bg-slate-50 p-4 dark:bg-slate-800"><h4 className="break-words text-sm font-semibold text-ink dark:text-white">{title}</h4><p className="mt-2 break-words text-sm leading-6 text-ink/60 dark:text-slate-400">{description}</p></div>)}</div>}
      <div className="mt-8 min-w-0 max-w-full border-l-2 border-teal pl-4"><p className="text-sm font-semibold text-teal">Business signal</p><p className="mt-1 break-words leading-7 text-ink/75 dark:text-slate-300">{study.impact}</p></div>
      {study.gallery.length > 0 && <CaseStudyGallery items={study.gallery} />}</div></div>
    </article>)}</div>
  </section>;
}
