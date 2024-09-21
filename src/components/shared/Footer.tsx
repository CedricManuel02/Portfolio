import { Link as ScrollLink } from "react-scroll";
import Socials from "./Socials";
export default function Footer() {
  const handleScrollTo = (id: any) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <ScrollLink
          onClick={() => handleScrollTo("home")}
          className="link link-hover"
          to="home"
          smooth={true}
          duration={500}
        >
          Home
        </ScrollLink>
        <ScrollLink
          onClick={() => handleScrollTo("about")}
          className="link link-hover"
          to="about"
          smooth={true}
          duration={500}
        >
          About
        </ScrollLink>
        <ScrollLink
          onClick={() => handleScrollTo("experience")}
          className="link link-hover"
          to="experience"
          smooth={true}
          duration={500}
        >
          Experience
        </ScrollLink>
        <ScrollLink
          onClick={() => handleScrollTo("skills")}
          className="link link-hover"
          to="skills"
          smooth={true}
          duration={500}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          onClick={() => handleScrollTo("project")}
          className="link link-hover"
          to="project"
          smooth={true}
          duration={500}
        >
          Project
        </ScrollLink>
      </nav>
      <nav>
        <Socials />
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Cedric Gio Manuel</p>
      </aside>
    </footer>
  );
}
