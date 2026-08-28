import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { RecruiterHighlights } from "@/components/RecruiterHighlights";
import { Recommendation } from "@/components/Recommendation";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <RecruiterHighlights />
      <About />
      <Skills />
      <Experience />
      <Recommendation />
      <CaseStudies />
      <Education />
      <Contact />
    </main>
  );
}
