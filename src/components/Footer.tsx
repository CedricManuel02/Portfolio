import { Link as ScrollLink } from 'react-scroll';
import { Facebook, Github, Instagram, LinkedinIcon, Mail } from "lucide-react";

export default function Footer(){
  const handleScrollTo = (id:any) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
    return (
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <ScrollLink onClick={() => handleScrollTo("home")} className="link link-hover" to="home" smooth={true} duration={500}>Home</ScrollLink>
        <ScrollLink onClick={() => handleScrollTo("about")} className="link link-hover" to="about" smooth={true} duration={500}>About</ScrollLink>
        <ScrollLink onClick={() => handleScrollTo("experience")} className="link link-hover" to="experience" smooth={true} duration={500}>Experience</ScrollLink>
        <ScrollLink onClick={() => handleScrollTo("skills")} className="link link-hover" to="skills" smooth={true} duration={500}>Skills</ScrollLink>
        <ScrollLink onClick={() => handleScrollTo("project")} className="link link-hover" to="project" smooth={true} duration={500}>Project</ScrollLink>
      </nav> 
      <nav>
        <div className="grid grid-flow-col gap-4">
        <div className="flex items-center justify-start gap-4 py-4">
            <a
              href="#"
              data-tip="cedricmanuel02@gmail.com"
              className="tooltip cursor-pointer hover:scale-[1.1] hover:text-purple-400 transition-all"
            >
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
              href="#"
              data-tip="/CedricManuel02"
              className="tooltip cursor-pointer hover:scale-[1.1] hover:text-purple-400 transition-all"
            >
              <Github size={23} />
            </a>
          </div>
        </div>
      </nav> 
      <aside>
        <p>Copyright © 2024 - All right reserved by Cedric Gio Manuel</p>
      </aside>
    </footer>
    )
}