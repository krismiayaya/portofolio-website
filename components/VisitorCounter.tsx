"use client";

import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    const endpoint = new URL("https://counterapi.com/api/krismia.web.id/visit/portfolio-home");
    endpoint.searchParams.set("unique", "true");
    if (isLocal) endpoint.searchParams.set("readOnly", "true");

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load visitor count");
        return response.json() as Promise<{ value?: number }>;
      })
      .then((data) => {
        if (typeof data.value === "number") setVisitors(52 + data.value);
      })
      .catch(() => setVisitors(null));
  }, []);

  return (
    <div className="mt-7 flex min-h-10 items-center justify-center" aria-live="polite">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/65">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#9EE7E3]" />
        {visitors === null ? "Visitor count loading…" : <><span className="font-semibold text-white">{visitors.toLocaleString()}</span> people have visited this portfolio</>}
      </div>
    </div>
  );
}
