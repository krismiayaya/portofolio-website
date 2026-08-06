import { profile } from "@/data/content";

export function Hero() {
  return <section id="top" className="relative overflow-hidden"><div className="absolute right-0 top-0 -z-10 h-[34rem] w-[34rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-mist" />
    <div className="section grid min-h-[calc(100vh-4rem)] items-center gap-12 py-24 lg:grid-cols-[1.05fr_.95fr]">
      <div><p className="reveal eyebrow">{profile.location}</p>
      <h1 className="reveal text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-7xl">{profile.name}</h1>
      <p className="reveal-delay mt-6 text-lg font-medium text-teal sm:text-xl">{profile.title}</p>
      <p className="reveal-delay mt-7 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">{profile.tagline}</p>
      <div className="reveal-delay mt-10"><a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal">Start a conversation <span>↓</span></a></div></div>
      <img className="reveal-delay w-full" src="/images/geospatial-product-visual.svg" alt="Abstract visualisation of geospatial signals, product metrics, and connected field operations" />
    </div>
  </section>;
}
