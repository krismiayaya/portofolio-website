import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krismia Rohma | Product Manager",
  description: "Portfolio of Krismia Rohma, Product Manager, Product Owner, Solution Specialist, and Business Analyst.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('theme');if(t!=='light')document.documentElement.classList.add('dark')}catch{document.documentElement.classList.add('dark')}` }} /></head><body>{children}{process.env.NODE_ENV === "production" && <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />}</body></html>;
}
