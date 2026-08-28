"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryItem = {
  src: string;
  title: string;
  description: string;
  format: string;
};

function imageClass(_item: GalleryItem) {
  return "product-blue-ui";
}

function PhoneFrame({ item, className, onOpen, priority = false }: { item: GalleryItem; className: string; onOpen: () => void; priority?: boolean }) {
  return (
    <button type="button" onClick={onOpen} aria-label={`Open ${item.title} screen`} className={`group absolute block text-left ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] border-[5px] border-[#111820] bg-[#111820] shadow-2xl shadow-ink/25 transition duration-500 group-hover:-translate-y-2 sm:rounded-[2.5rem] sm:border-[7px]">
        <div className="absolute left-1/2 top-1.5 z-10 h-2.5 w-10 -translate-x-1/2 rounded-full bg-[#111820] sm:h-3 sm:w-16" />
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.55rem] bg-white sm:rounded-[2rem]">
          <Image src={item.src} alt={`${item.title} mobile interface from LOKASI Targetin`} fill sizes="(max-width: 640px) 45vw, 290px" className={`${imageClass(item)} object-cover object-top`} priority={priority} />
        </div>
      </div>
    </button>
  );
}

function LaptopFrame({ item }: { item: GalleryItem }) {
  return (
    <div className="relative mx-auto w-full pb-4">
      <div className="relative overflow-hidden rounded-t-xl border-[5px] border-[#161d24] bg-[#161d24] shadow-2xl shadow-ink/20 sm:rounded-t-2xl sm:border-[8px]">
        <div className="absolute left-1/2 top-1 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/30" />
        <div className="relative aspect-video overflow-hidden bg-slate-700">
          <Image src={item.src} alt={`${item.title} web interface from LOKASI Targetin`} fill sizes="(max-width: 640px) 78vw, (max-width: 1024px) 66vw, 620px" className={`${imageClass(item)} object-cover object-top transition duration-500 group-hover:scale-[1.01]`} />
        </div>
      </div>
      <div className="relative mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-xl bg-gradient-to-b from-slate-200 to-slate-400 shadow-md sm:h-4">
        <div className="absolute left-1/2 top-0 h-1.5 w-[18%] -translate-x-1/2 rounded-b-lg bg-slate-500/45" />
      </div>
      <div className="mx-auto h-1.5 w-[28%] rounded-b-full bg-slate-400/70" />
    </div>
  );
}

function ImageViewer({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={`${item.title} full-size preview`} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-3 backdrop-blur-md sm:p-6" onClick={onClose}>
      <div className="flex h-[94vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-blue-400/20 bg-white shadow-2xl dark:bg-slate-950 sm:rounded-3xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 border-b border-ink/10 px-4 py-3 dark:border-white/10 sm:px-6">
          <div><p className="text-xs font-bold uppercase tracking-[.14em] text-blue-600 dark:text-blue-400">LOKASI Targetin</p><h5 className="mt-1 font-semibold text-ink dark:text-white">{item.title}</h5></div>
          <button type="button" onClick={onClose} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/10 text-xl text-ink transition hover:border-blue-500 hover:text-blue-600 dark:border-white/15 dark:text-white dark:hover:border-blue-400" aria-label="Close full-size preview">×</button>
        </div>
        <div className="relative min-h-0 flex-1 bg-blue-50/60 p-3 dark:bg-slate-900 sm:p-6">
          <Image src={item.src} alt={`${item.title} full-size product interface`} fill sizes="95vw" className={`${imageClass(item)} object-contain`} priority />
        </div>
        <p className="border-t border-ink/10 px-4 py-3 text-sm leading-6 text-ink/60 dark:border-white/10 dark:text-slate-400 sm:px-6">{item.description}</p>
      </div>
    </div>
  );
}

export function CaseStudyGallery({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const desktop = items.filter((item) => item.format === "desktop");
  const mobile = items.filter((item) => item.format === "mobile");

  return (
    <div className="mt-10 border-t border-ink/10 pt-9 dark:border-white/10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[.16em] text-blue-600 dark:text-blue-400">Product gallery</p><h4 className="mt-2 text-xl font-semibold tracking-tight text-ink dark:text-white">From operations desk to field execution</h4></div>
        <p className="max-w-md text-sm leading-6 text-ink/55 dark:text-slate-400">Selected screens from the web platform and mobile field workflow. Scroll sideways or open any image at full size.</p>
      </div>

      <div className="mt-7 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-6 pr-6 scroll-smooth gallery-scroll" tabIndex={0} aria-label="Targetin desktop product screens">
        {desktop.map((item) => (
          <button type="button" key={item.src} onClick={() => setSelected(item)} className="group w-[82vw] max-w-[720px] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-blue-500/15 bg-blue-50/70 p-3 text-left transition hover:-translate-y-1 hover:border-blue-500/45 hover:shadow-xl hover:shadow-blue-950/10 dark:border-blue-400/15 dark:bg-blue-950/20 sm:w-[72vw] sm:rounded-[1.75rem] sm:p-8 lg:w-[60vw]">
            <LaptopFrame item={item} />
            <div className="px-2 pb-3 pt-4 sm:p-5"><div className="flex items-start justify-between gap-4"><h5 className="font-semibold text-ink dark:text-white">{item.title}</h5><span className="text-blue-600 dark:text-blue-400">↗</span></div><p className="mt-2 text-sm leading-6 text-ink/60 dark:text-slate-400">{item.description}</p></div>
          </button>
        ))}
      </div>

      {mobile.length > 0 && <div className="mt-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-sm font-semibold text-ink dark:text-white">Mobile field workflow</p><p className="mt-1 text-sm text-ink/55 dark:text-slate-400">The visit journey, designed for teams working on the move.</p></div>
          <span className="text-xs font-bold uppercase tracking-[.14em] text-blue-600 dark:text-blue-400">Tap a device to explore ↗</span>
        </div>

        {mobile.length >= 3 && <div className="relative mt-5 overflow-hidden rounded-[1.5rem] border border-blue-500/15 bg-blue-50/70 px-2 pt-6 dark:border-blue-400/15 dark:bg-blue-950/20 sm:rounded-[2.5rem] sm:px-8 sm:pt-9">
          <div className="absolute left-1/2 top-[18%] h-[62%] w-[70%] -translate-x-1/2 rounded-full bg-blue-200/70 dark:bg-blue-500/20" />
          <div className="absolute -left-8 top-20 h-28 w-28 rounded-full border-[18px] border-white/70 sm:left-10 sm:h-36 sm:w-36" />
          <div className="absolute -right-6 bottom-20 h-24 w-24 rounded-full bg-blue-300/55 sm:right-12 sm:h-32 sm:w-32" />
          <div className="relative z-10 text-center"><span className="inline-flex rounded-full bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[.12em] text-blue-600 shadow-sm dark:bg-slate-800 dark:text-blue-400 sm:px-4 sm:text-xs sm:tracking-[.16em]">LOKASI Targetin · Field App</span><h5 className="mx-auto mt-3 max-w-lg px-2 text-lg font-semibold tracking-tight text-ink dark:text-white sm:text-2xl">One connected flow from store context to order capture.</h5></div>
          <div className="relative mx-auto mt-3 h-[360px] max-w-4xl min-[420px]:h-[410px] sm:mt-6 sm:h-[610px]">
            <PhoneFrame item={mobile[1]} onOpen={() => setSelected(mobile[1])} className="left-[3%] top-[16%] z-10 w-[42%] max-w-[265px] -rotate-6 sm:left-[14%]" />
            <PhoneFrame item={mobile[0]} onOpen={() => setSelected(mobile[0])} className="left-1/2 top-[5%] z-30 w-[47%] max-w-[295px] -translate-x-1/2" priority />
            <PhoneFrame item={mobile[mobile.length - 1]} onOpen={() => setSelected(mobile[mobile.length - 1])} className="right-[3%] top-[16%] z-20 w-[42%] max-w-[265px] rotate-6 sm:right-[14%]" />
          </div>
        </div>}

        <p className="mt-7 text-xs font-bold uppercase tracking-[.14em] text-ink/45 dark:text-slate-500">Explore every mobile screen</p>
        <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-6 pr-6 scroll-smooth gallery-scroll" tabIndex={0} aria-label="Targetin mobile field workflow screens">
          {mobile.map((item) => (
            <button type="button" key={item.src} onClick={() => setSelected(item)} className="group w-[72vw] max-w-[300px] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border border-blue-500/15 bg-blue-50/60 p-2 text-left transition hover:-translate-y-1 hover:border-blue-500/45 hover:shadow-xl hover:shadow-blue-950/10 dark:border-blue-400/15 dark:bg-blue-950/20 sm:w-[280px]">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.35rem] border-[4px] border-[#111820] bg-slate-700"><div className="absolute left-1/2 top-1 z-10 h-2.5 w-14 -translate-x-1/2 rounded-full bg-[#111820]" /><Image src={item.src} alt={`${item.title} mobile interface from LOKASI Targetin`} fill sizes="(max-width: 640px) 72vw, 280px" className={`${imageClass(item)} object-cover object-top transition duration-500 group-hover:scale-[1.015]`} /></div>
              <div className="p-5"><div className="flex items-start justify-between gap-3"><h5 className="font-semibold text-ink dark:text-white">{item.title}</h5><span className="text-blue-600 dark:text-blue-400">↗</span></div><p className="mt-2 text-sm leading-6 text-ink/60 dark:text-slate-400">{item.description}</p></div>
            </button>
          ))}
        </div>
      </div>}

      {selected && <ImageViewer item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
