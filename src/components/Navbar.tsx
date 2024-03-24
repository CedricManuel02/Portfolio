
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../utils/Context';
import { useState } from 'react';
export default function Navbar(){
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [toggle, setToggle] = useState<Boolean>(false);
    const handleScrollTo = (id:any) => {
        setToggle(false);
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth"
        });
      };
      
    return(
        <nav className="w-full py-5 absolute">
            <div className={`${toggle ? "block slide-down" : ""} slide block w-full h-screen fixed left-0 bg-[#121212] z-10 sm:block md:block lg:hidden xl:hidden 2xl:hidden`}>
                <div className="w-11/12 sm:w-8/12 md:w-8/12 lg:w-5/12 xl:w-5/12 2xl:5/12 m-auto h-full flex items-center justify-start relative">
                        <svg onClick={() => setToggle(false)}  className="absolute m-5 top-0 right-0 hover:bg-slate-400 cursor-pointer rounded-md transition-all" width="28" height="28" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <ul className="flex flex-col items-start justify-center gap-10">
                            <li><ScrollLink onClick={() => handleScrollTo("home")}  className="cursor-pointer text-2xl" to="/" smooth={true} duration={500}>home</ScrollLink></li>
                            <li><ScrollLink onClick={() => handleScrollTo("project")} className="cursor-pointer text-2xl" to="project" smooth={true} duration={500}>projects</ScrollLink></li>
                            <li><ScrollLink onClick={() => handleScrollTo("experience")} className="cursor-pointer text-2xl" to="experience" smooth={true} duration={500}>experience</ScrollLink></li>
                            <li><ScrollLink onClick={() => handleScrollTo("education")} className="cursor-pointer text-2xl" to="education" smooth={true} duration={500}>education</ScrollLink></li>
                            <li><ScrollLink onClick={() => handleScrollTo("about")} className="cursor-pointer text-2xl" to="about" smooth={true} duration={500}>about</ScrollLink></li>
                            <li><ScrollLink onClick={() => handleScrollTo("skills")} className="cursor-pointer text-2xl" to="skills" smooth={true} duration={500}>skills</ScrollLink></li>
                            <li><ScrollLink onClick={() => handleScrollTo("contact")}  className="cursor-pointer text-2xl" to="contact" smooth={true} duration={500}>contact</ScrollLink></li>
                        </ul>
                </div>
            </div>
            <section className="w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 m-auto flex items-center justify-between h-full">
                <p className="font-medium"><ScrollLink className="cursor-pointer" to="/">@cedricmanuel.</ScrollLink></p>
                <div className="flex items-center justify-center gap-5">
                    <div className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                        <ul className="flex items-center justify-evenly gap-10">
                            <li><ScrollLink className="cursor-pointer" to="/" smooth={true} duration={500}>home</ScrollLink></li>
                            <li><ScrollLink className="cursor-pointer" to="project" smooth={true} duration={500}>projects</ScrollLink></li>
                            <li><ScrollLink className="cursor-pointer" to="experience" smooth={true} duration={500}>experience</ScrollLink></li>
                            <li><ScrollLink className="cursor-pointer" to="about" smooth={true} duration={500}>about</ScrollLink></li>
                            <li><ScrollLink className="cursor-pointer" to="education" smooth={true} duration={500}>education</ScrollLink></li>
                            <li><ScrollLink className="cursor-pointer" to="skills" smooth={true} duration={500}>skills</ScrollLink></li>
                        </ul>
                    </div>
                {isDarkMode ? <svg onClick={toggleDarkMode} className="cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path></g></svg> 
                : <svg onClick={toggleDarkMode} className="cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M10 6a8 8 0 0 0 11.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0 0 10 6zm-6 6a8 8 0 0 0 8 8 8.006 8.006 0 0 0 6.957-4.045c-.316.03-.636.045-.957.045-5.523 0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 0 0 4 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"></path></g></svg>}
                <div onClick={() => setToggle(true)} className="p-2 hover:bg-slate-400 rounded-md"><svg  className="rotate-180 cursor-pointer rounded-md transition-all block sm:block md:block lg:hidden xl:hidden 2xl:hidden"  width="20" height="20" stroke-width="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M3 5h8M3 12h13M3 19h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                </div>
            </section>
        </nav>
    )
}