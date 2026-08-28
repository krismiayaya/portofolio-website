import { profile } from "@/data/content";
import Image from "next/image";

export function Hero() {
  return <section id="top" className="relative overflow-hidden"><div className="absolute right-0 top-0 -z-10 h-[24rem] w-[24rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-mist dark:bg-teal/10 sm:h-[34rem] sm:w-[34rem]" />
    <div className="section grid items-center gap-10 py-14 sm:py-20 md:gap-12 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.05fr_.95fr] lg:py-24">
      <div><p className="reveal eyebrow">{profile.location}</p>
      <p className="reveal text-base font-semibold text-teal sm:text-lg">{profile.title}</p>
      <h1 className="reveal mt-4 break-words text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-ink dark:text-white sm:text-6xl lg:text-7xl">{profile.name}</h1>
      <p className="reveal-delay mt-6 max-w-2xl text-base leading-7 text-ink/70 dark:text-slate-300 sm:mt-7 sm:text-xl sm:leading-8">{profile.tagline}</p>
      <div className="reveal-delay mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"><a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal dark:bg-white dark:text-slate-950 dark:hover:bg-teal dark:hover:text-white sm:w-auto">Let&apos;s work together <span>↗</span></a><a href={profile.cvUrl} download className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal dark:border-white/20 dark:text-white sm:w-auto">Download CV <span>↓</span></a></div><a href="#case-studies" className="mt-5 inline-flex text-sm font-semibold text-teal transition hover:text-ink dark:hover:text-white">View selected work ↓</a></div>
      <div className="reveal-delay relative mx-auto w-full max-w-2xl lg:max-w-none">
        <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-teal/20 via-blue-500/5 to-transparent blur-2xl dark:from-teal/25 dark:via-blue-500/10" />
        <Image
          className="h-auto w-full rounded-[1.5rem] border border-white/10 object-cover shadow-2xl shadow-ink/20 ring-1 ring-ink/10 dark:shadow-black/40 dark:ring-white/10 sm:rounded-[2rem]"
          src="/images/geospatial-product-ecosystem.png"
          alt="Connected geospatial product ecosystem showing a SaaS dashboard, mobile field application, product analytics, and location intelligence"
          width={1536}
          height={918}
          priority
          sizes="(max-width: 1023px) 100vw, 46vw"
        />
        <Image
          className="portrait-cutout absolute bottom-[4%] left-[3%] h-auto w-20 sm:w-24 lg:w-28"
          src="/images/krismia-cartoon-portrait-transparent.png"
          alt="Cartoon portrait of Krismia Rohma"
          width={914}
          height={1721}
          sizes="96px"
        />
      </div>
    </div>
  </section>;
}
