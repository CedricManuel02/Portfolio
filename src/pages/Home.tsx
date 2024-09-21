import "react-toastify/dist/ReactToastify.css";


import Skill from "../components/Skill";

import About from "../components/About";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Experience from "../components/Experience";

export default function Home() {
 

 

  return (
    <main className="m-auto h-auto w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
      <Hero/>
      <About/>
      <Project/>
      <Skill/>
      <Experience/>
    </main>
  );
}
