import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../utils/Context';

export default function Footer(){
  const {isDarkMode} = useTheme();
  const handleScrollTo = (id:any) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
    return (
        <footer className="border-t py-4 border-t-slate-400 h-auto w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 m-auto">
              <div className="py-5 flex items-start flex-col justify-between sm:flex-col sm:items-start md:flex-col md:items-start lg:flex-row lg:items-center xl:items-center xl:flex-row 2xl:flex-row 2xl:items-center">
                <h3 className="py-2">@cedricmanuel.</h3>
                <ul className="flex items-start flex-col justify-evenly gap-4 font-light sm:flex-col sm:items-start md:flex-col md:items-start lg:flex-row xl:flex-row 2xl:flex-row">
                  <li><ScrollLink onClick={() => handleScrollTo("home")} className="cursor-pointer hover:underline" to="/home" smooth={true} duration={500}>home</ScrollLink></li>
                  <li><ScrollLink onClick={() => handleScrollTo("project")} className="cursor-pointer hover:underline" to="/project" smooth={true} duration={500}>projects</ScrollLink></li>
                  <li><ScrollLink onClick={() => handleScrollTo("experience")} className="cursor-pointer hover:underline" to="/experience" smooth={true} duration={500}>experience</ScrollLink></li>
                  <li><ScrollLink onClick={() => handleScrollTo("education")} className="cursor-pointer hover:underline" to="/education" smooth={true} duration={500}>education</ScrollLink></li>
                  <li><ScrollLink onClick={() => handleScrollTo("about")} className="cursor-pointer hover:underline" to="/about" smooth={true} duration={500}>about</ScrollLink></li>
                  <li><ScrollLink onClick={() => handleScrollTo("contact")} className="cursor-pointer hover:underline" to="/contact" smooth={true} duration={500}>contact</ScrollLink></li>
                </ul>
              </div>
              <div className="flex items-start flex-col justify-between sm:flex-col sm:items-start md:flex-col md:items-start lg:flex-row lg:items-center xl:items-center xl:flex-row 2xl:flex-row 2xl:items-center">
                <div>
                  <small className="text-slate-400">Weekly music discovery</small>
                  <a className={`${isDarkMode ? "hover:bg-slate-200" : "hover:bg-slate-800"} flex items-center gap-2 py-2 px-5 rounded-md w-52`} href="https://open.spotify.com/track/1iVUQ3TrEuXmq3sdjls9yZ?si=0d0dd539c8dd4e29">
                    <img className="w-12 h-12 object-cover rounded-md" src="https://i.scdn.co/image/ab67616d0000b273e513cffca577e653e01fe34d" alt="cover" />
                    <div>
                      <h3>K & B</h3>
                      <small className={`${isDarkMode ? "text-slate-600" : "text-slate-500"} py-2 text-sm font-normal sm:text-sm md:text-sm lg:text-md xl:text-md 2xl:text-md`}>CLR</small>
                    </div>
                  </a>
                </div>
                <div>
                  <p className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} py-2 text-sm font-thin sm:text-sm md:text-sm lg:text-md xl:text-md 2xl:text-md`}>"Kung akala nila, 'di mo kaya iyon
                  Diretso lang lakad, 'wag ka nang lumingon" - Omar Baliw</p>
                </div>
              </div>
        </footer>
    )
}