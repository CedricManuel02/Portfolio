import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
export default function Navbar(){
    const [toggle, setToggle] = useState<Boolean>(false);
    const handleScrollTo = (id:any) => {
        setToggle(false);
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth"
        });
      };
      
    return(
        <nav className="bg-[#121212] w-full py-4 fixed z-30 shadow">
            <div className={`${toggle ? "block slide-down" : ""} slide block w-full h-screen fixed left-0 bg-[#121212]  z-10 sm:block md:block lg:hidden xl:hidden 2xl:hidden`}>
                <div className="w-11/12 sm:w-10/12 md:w-10/12 lg:w-5/12 xl:w-5/12 2xl:5/12 m-auto h-full flex items-center justify-start relative">
                        <svg onClick={() => setToggle(false)}  className="absolute m-5 top-[-4px] right-[-25px] hover:bg-slate-400 cursor-pointer rounded-md transition-all" width="28" height="28" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <ul className="flex flex-col items-start justify-center gap-10">
                            <li><ScrollLink onClick={() => handleScrollTo("home")}  className="cursor-pointer text-2xl" to="/home" smooth={true} duration={500}>home</ScrollLink></li>
                            <li><ScrollLink onClick={() => handleScrollTo("project")} className="cursor-pointer text-2xl" to="project" smooth={true} duration={500}>projects</ScrollLink></li>
                            <li><ScrollLink onClick={() => handleScrollTo("experience")} className="cursor-pointer text-2xl" to="experience" smooth={true} duration={500}>experience</ScrollLink></li>
                            <li><ScrollLink onClick={() => handleScrollTo("about")} className="cursor-pointer text-2xl" to="about" smooth={true} duration={500}>about</ScrollLink></li>
                            <li><ScrollLink onClick={() => handleScrollTo("skills")} className="cursor-pointer text-2xl" to="skills" smooth={true} duration={500}>skills</ScrollLink></li>
                        </ul>
                </div>
            </div>
            <section className="w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-7/12 m-auto flex items-center justify-between h-full">
                <p className=" text-slate-400 font-normal cursor-pointer"><ScrollLink to="/">@cedricmanuel.</ScrollLink></p>
                <div className="flex items-center justify-center gap-5">
                    <div className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                        <ul className="flex items-center justify-evenly gap-10">
                            <li><ScrollLink className="text-slate-400 py-5 font-normal cursor-pointer" to="home" smooth={true} duration={500}>home</ScrollLink></li>
                            <li><ScrollLink className="text-slate-400 py-5 font-normal cursor-pointer" to="project" smooth={true} duration={500}>projects</ScrollLink></li>
                            <li><ScrollLink className="text-slate-400 py-5 font-normal cursor-pointer" to="experience" smooth={true} duration={500}>experience</ScrollLink></li>
                            <li><ScrollLink className="text-slate-400 py-5 font-normal cursor-pointer" to="about" smooth={true} duration={500}>about</ScrollLink></li>
                            <li><ScrollLink className="text-slate-400 py-5 font-normal cursor-pointer" to="skills" smooth={true} duration={500}>skills</ScrollLink></li>
                        </ul>
                    </div>
                    <div onClick={() => setToggle(true)} className=" hover:bg-slate-400 rounded-md block sm:block md:block lg:hidden xl:hidden 2xl:hidden"><svg  className="rotate-180 cursor-pointer rounded-md transition-all block sm:block md:block lg:hidden xl:hidden 2xl:hidden"  width="20" height="20" strokeWidth="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M3 5h8M3 12h13M3 19h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                </div>
            </section>
        </nav>
    )
}