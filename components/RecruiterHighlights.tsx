import { recruiterHighlights } from "@/data/content";

export function RecruiterHighlights() {
  return (
    <section aria-label="Career highlights" className="border-y border-ink/10 bg-mist/50 dark:border-white/10 dark:bg-slate-900">
      <div className="mx-auto grid max-w-6xl divide-y divide-ink/10 px-5 dark:divide-white/10 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
        {recruiterHighlights.map((highlight) => (
          <div key={highlight.value} className="py-6 md:px-8 md:first:pl-0 md:last:pr-0">
            <p className="text-3xl font-semibold tracking-tight text-ink dark:text-white">{highlight.value}</p>
            <p className="mt-1 text-sm leading-6 text-ink/65 dark:text-slate-400">{highlight.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
