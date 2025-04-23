"use client";
import { AlignRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import NavigationSidebar from "./navigation-sidebar";

export default function NavigationBar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleScrollTo = (id: string) => {
    setToggle(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);
  return (
    <nav className="bg-[#121212] w-full py-6 fixed z-30 shadow text-slate-400 font-medium">
      <NavigationSidebar toggle={toggle} handleToggle={handleToggle} handleScrollTo={handleScrollTo} />
      {/* Main Navigation */}
      <section className="w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-7/12 m-auto flex items-center justify-between h-full">
        <p className="font-normal cursor-pointer">
          <ScrollLink to="/">@cedricmanuel.</ScrollLink>
        </p>
        <div className="flex items-center justify-center gap-5">
          <div className="hidden lg:block">
            <ul className="flex items-center justify-evenly gap-10">
              <li>
                <ScrollLink className="py-5 font-normal cursor-pointer" to="home" smooth={true} duration={500}>
                  home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className="py-5 font-normal cursor-pointer" to="about" smooth={true} duration={500}>
                  about
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className="py-5 font-normal cursor-pointer" to="project" smooth={true} duration={500}>
                  projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className="py-5 font-normal cursor-pointer" to="experience" smooth={true} duration={500}>
                  experience
                </ScrollLink>
              </li>

              <li>
                <ScrollLink className="py-5 font-normal cursor-pointer" to="skills" smooth={true} duration={500}>
                  skills
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div onClick={() => setToggle(true)} className=" hover:text-slate-400 cursor-pointer rounded-md block lg:hidden">
            <AlignRight />
          </div>
        </div>
      </section>
    </nav>
  );
}
