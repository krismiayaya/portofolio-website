import { profile, recommendation } from "@/data/content";

export function Recommendation() {
  return (
    <section id="recommendation" className="border-b border-ink/5 bg-mist/45 dark:border-white/10 dark:bg-slate-950">
      <div className="section grid items-center gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
        <div>
          <p className="eyebrow">Leadership endorsement</p>
          <h2 className="section-title">Recommended by my CTO.</h2>
          <p className="mt-5 max-w-md leading-7 text-ink/65 dark:text-slate-400">{recommendation.context}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a href={profile.recommendationUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal dark:bg-white dark:text-slate-950 dark:hover:bg-teal dark:hover:text-white">
              Read recommendation ↗
            </a>
            <a href={profile.recommendationUrl} download className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal dark:border-white/20 dark:text-white">
              Download letter ↓
            </a>
          </div>
        </div>
        <figure className="relative rounded-3xl border border-ink/10 bg-white p-7 shadow-xl shadow-ink/5 dark:border-white/10 dark:bg-slate-900 sm:p-10">
          <span aria-hidden="true" className="absolute right-7 top-3 font-serif text-7xl leading-none text-teal/20 sm:right-10 sm:text-8xl">“</span>
          <blockquote className="relative max-w-3xl text-xl font-medium leading-9 tracking-tight text-ink dark:text-white sm:text-2xl sm:leading-10">
            “{recommendation.quote}”
          </blockquote>
          <figcaption className="mt-7 border-t border-ink/10 pt-5 dark:border-white/10">
            <p className="font-semibold text-ink dark:text-white">{recommendation.author}</p>
            <p className="mt-1 text-sm text-ink/55 dark:text-slate-400">{recommendation.role}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
