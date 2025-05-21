import About from "@/_components/about";
import Certifications from "@/_components/certificate";
import Experience from "@/_components/experience";
import Hero from "@/_components/hero";
import Project from "@/_components/projects";
import Skills from "@/_components/skills";

export default function Home() {
  return (
    <main className="m-auto h-auto w-full lg:w-10/12 xl:w-8/12 2xl:w-7/12">
      <Hero/>
      <About/>
      <Certifications/>
      <Skills/>
      <Project/>
      <Experience/>
    </main>
  );
}
