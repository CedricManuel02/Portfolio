import { Link as ScrollLink } from 'react-scroll';

export default function Footer(){
  const handleScrollTo = (id:any) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    }); // Scroll to the target div
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
                  <a className="flex items-center gap-2 py-2 px-5 rounded-md hover:bg-slate-800" href="https://open.spotify.com/track/18ioFJkxW5B0hOXE0l2ddw?si=f43347fff0cf4a83">
                    <img className="w-12 h-12 object-cover rounded-md" src="https://best-fit.transforms.svdcdn.com/production/images/Lauv_2020New.jpeg?w=1200&h=977&q=100&auto=format&fit=crop&dm=1642881955&s=a5a05bb3b1bfd46991019665fc5b04d8" alt="cover" />
                    <div>
                      <h3>Modern Loneliness</h3>
                      <small>Lauv</small>
                    </div>
                  </a>
                </div>
                <div>
                  <p className="py-2 text-slate-400 text-sm font-normal sm:text-sm md:text-sm lg:text-md xl:text-md 2xl:text-md">"Love my friends to death
                  But I never call and I never text" - Lauv</p>
                </div>
              </div>
        </footer>
    )
}