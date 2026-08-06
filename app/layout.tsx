import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krismia Rohmanurfitria | Product Manager",
  description: "Portfolio of Krismia Rohmanurfitria, Product Manager and Solution Specialist.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
