"use client";
import { X } from "lucide-react";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
type TNavigationSidebar = {
  handleScrollTo: (tab: string) => void;
  handleToggle: () => void;
  toggle: boolean;
}

export default function NavigationSidebar({ handleScrollTo, handleToggle, toggle }: TNavigationSidebar) {
  return (
    <div className={`${toggle ? "block slide-down" : ""} slide block w-full h-screen fixed left-0 bg-[#121212]  z-10 sm:block md:block lg:hidden`}>
      <div className="w-11/12 sm:w-11/12 lg:w-5/12 m-auto h-full flex items-center justify-start relative">
        <X onClick={handleToggle} className="absolute m-4  top-2 right-[-12px] hover:text-slate-400 cursor-pointer rounded-md transition-all" />

        <ul className="flex flex-col items-start justify-center gap-10">
          <li>
            <ScrollLink onClick={() => handleScrollTo("home")} className="cursor-pointer text-2xl" to="/home" smooth={true} duration={500}>
              home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink onClick={() => handleScrollTo("about")} className="cursor-pointer text-2xl" to="about" smooth={true} duration={500}>
              about
            </ScrollLink>
          </li>
          <li>
            <ScrollLink onClick={() => handleScrollTo("project")} className="cursor-pointer text-2xl" to="project" smooth={true} duration={500}>
              projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink onClick={() => handleScrollTo("experience")} className="cursor-pointer text-2xl" to="experience" smooth={true} duration={500}>
              experience
            </ScrollLink>
          </li>

          <li>
            <ScrollLink onClick={() => handleScrollTo("skills")} className="cursor-pointer text-2xl" to="skills" smooth={true} duration={500}>
              skills
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
