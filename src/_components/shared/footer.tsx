"use client";
import { Link as ScrollLink } from "react-scroll";
import { Facebook, Github, Instagram, LinkedinIcon, Mail } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (id: any) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <footer className="py-10 footer sm:footer-horizontal flex items-center flex-col justify-center bg-base-200 text-base-content p-4">
      <nav className="flex flex-wrap items-center justify-center space-x-4">
        <ScrollLink onClick={() => handleScrollTo("home")} className="hover:underline cursor-pointer" to="home" smooth={true} duration={500}>
          home
        </ScrollLink>
        <ScrollLink onClick={() => handleScrollTo("about")} className="hover:underline cursor-pointer" to="about" smooth={true} duration={500}>
          about
        </ScrollLink>
        <ScrollLink onClick={() => handleScrollTo("experience")} className="hover:underline cursor-pointer" to="experience" smooth={true} duration={500}>
          experience
        </ScrollLink>
        <ScrollLink onClick={() => handleScrollTo("skills")} className="hover:underline cursor-pointer" to="skills" smooth={true} duration={500}>
          skills
        </ScrollLink>
        <ScrollLink onClick={() => handleScrollTo("project")} className="hover:underline cursor-pointer" to="project" smooth={true} duration={500}>
          project
        </ScrollLink>
      </nav>
      <nav>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" data-tip="cedricmanuel02@gmail.com" className="tooltip cursor-pointer hover:scale-[1.1] hover:text-purple-400 transition-all">
              <Mail size={23} />
            </a>
            <a
              href="https://www.facebook.com/cedricmanuel19"
              data-tip="@cedricmanuel19"
              className="tooltip cursor-pointer hover:scale-[1.1] hover:text-purple-400 transition-all"
            >
              <Facebook size={23} />
            </a>
            <a
              href="https://www.instagram.com/cedie_manuel/"
              data-tip="@cedie_manuel"
              className="tooltip cursor-pointer hover:scale-[1.1] hover:text-purple-400 transition-all"
            >
              <Instagram size={23} />
            </a>
            <a
              href="https://www.linkedin.com/in/cedric-manuel-763902293/"
              data-tip="in/cedric-manuel"
              className="tooltip cursor-pointer hover:scale-[1.1] hover:text-purple-400 transition-all"
            >
              <LinkedinIcon size={23} />
            </a>
            <a
              href="https://github.com/CedricManuel02"
              data-tip="/CedricManuel02"
              className="tooltip cursor-pointer hover:scale-[1.1] hover:text-purple-400 transition-all"
            >
              <Github size={23} />
            </a>
        </div>
      </nav>
      <aside className="text-slate-500">
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Cedric Gio Manuel</p>
      </aside>
    </footer>
  );
}
