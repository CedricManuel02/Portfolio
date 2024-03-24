import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../utils/Context';
//import emailjs from '@emailjs/browser';//

import Movie from "../assets/Movie.png";
import Project1 from "../assets/project1.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";

import Resume from "../docs/Resume.docx.pdf";

export default function Home(){
    const {isDarkMode} = useTheme();
    const [buttonOne, setButtonOne] = useState<Boolean>(true);
    const [buttonTwo, setButtonTwo] = useState<Boolean>(true);
    /*const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(form.current){
        emailjs.sendForm("service_7i3trfl", "template_q5t5952", form.current, "CPc8VLyk3ZkK4RBGd")
        .then(() => {
            toast.success(`Successfully Sent`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                style: { background: 'white'}
                });
            setEmail("");
            setMessage("");
        }, () => {
            toast.warn(`Something went wrong, Try again.`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                style: { background: 'white'}

                });
        });
      }
    };*/
 
    return(
        <main className="m-auto h-auto w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12">
            <ToastContainer className="ToastContainer"/>
            <div id="home" className="w-full h-screen flex items-center justify-evenly gap-10">
                <div className="w-11/12 h-screen flex flex-col items-center gap-5 justify-center font-semibold sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12">
                    <h3 className={`${isDarkMode ? "bg-[#EEE] text-slate-600 " : "bg-slate-500 text-slate-200 "} flex items-center font-medium justify-center gap-2 w-64 rounded-full p-2`}>Hello, <p className="wave">👋</p> they call me Cedric.</h3>
                    <h2 className="text-4xl text-center sm:text-4xl md:text-6xl lg:text-6xl 2xl:text-6xl">Experienced <span className="text-purple-400">full-stack developer</span>  with a focus on <span className="text-purple-400">back-end developer</span>.</h2>
                    <div className="py-5 flex items-center justify-center gap-5 w-11/12">
                      <div className="flex items-center justify-start  gap-2 w-5/12 h-full flex-col sm:flex-col sm:justify-start md:justify-start md:flex-col lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row">
                        <span className={`${isDarkMode ? "bg-[#EEE] text-slate-500" : "bg-slate-500 text-slate-300"} py-2 px-3 rounded-md`}>8</span>
                        <p className="font-thin text-xs text-center whitespace-nowrap">Months of <br/> experience</p>
                      </div>
                      <div className="flex items-center justify-start gap-2 w-5/12 h-full  flex-col sm:flex-col sm:justify-start md:justify-start md:flex-col lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row border-dashed border-l border-slate-400 border-r px-5">
                        <span className={`${isDarkMode ? "bg-[#EEE] text-slate-500" : "bg-slate-500 text-slate-300"} py-2 px-3 rounded-md`}>1k</span>
                        <p className="font-thin text-xs text-center whitespace-nowrap">Lines of <br/> code written</p>
                      </div>
                      <div className="flex items-center justify-start gap-2 w-5/12 h-full  flex-col sm:flex-col sm:justify-start md:justify-start md:flex-col lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row">
                        <span className={`${isDarkMode ? "bg-[#EEE] text-slate-500" : "bg-slate-500 text-slate-300"} py-2 px-3 rounded-md`}>5k</span>
                        <p className="font-thin text-xs text-center whitespace-nowrap">Cups of <br/> coffee consumed</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <a href={Resume} className={`${isDarkMode ? "bg-[#121212] text-slate-200" : "bg-slate-200 text-slate-600"} py-3 px-5 sm:py-3 sm:px-5 md:py-3 md:px-5 lg:py-4 lg:px-8 xl:py-4 xl:px-8 2xl:py-4 2xl:px-8 rounded-full flex items-center gap-3`}><svg width="26" height="26" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line>
                        </svg>Resume</a>
                        <ScrollLink className={`${isDarkMode ? "bg-slate-200 text-slate-600" : "bg-slate-600 text-slate-200"} cursor-pointer py-3 px-5 sm:py-3 sm:px-5 md:py-3 md:px-5 lg:py-4 lg:px-8 xl:py-4 xl:px-8 2xl:py-4 2xl:px-8 rounded-full flex items-center gap-3`} to="contact" smooth={true} duration={500}><svg width="26" height="26" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>Contact</ScrollLink>
                    </div>
                </div>
            </div>
            <div id="about" className="flex items-center py-10 justify-between gap-5 flex-col-reverse sm:flex-col-reverse md:flex-col-reverse  lg:flex-row xl:flex-row 2xl:flex-row">
                <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 2xl:w-8/12">
                    <h2 className="flex items-end font-semibold text-4xl my-10">About me<p className="text-purple-500">.</p></h2>
                    <p  className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} text-justify font-thin`}>Hi, my name is Cedric Gio Manuel, and I'm a 22-year-old individual with a keen interest in technology
                    and innovation. Currently, I'm in my 4th year of college, pursuing a Bachelor of Science in Information
                    Technology. My academic journey has been an exciting exploration of the vast world of IT, and I'm 
                    enthusiastic about applying my knowledge to real-world projects.
                    <br/>
                    <br/>
                        It's worth mentioning that I navigate the challenges of life with Hemophilia A, a blood disorder. Despite this,
                        I remain resilient and use my experiences to fuel my determination in both my academic and personal pursuits.
                        I am excited about the opportunities that lie ahead and look forward to making a meaningful impact in the
                        world of technology."
                    </p>
                </div>
                <img className="w-52 h-52 object-cover rounded-full bg-[url('https://backgroundabstract.com/wp-content/uploads/edd/2022/01/gradient-network-connection-background_23-2148865392-e1656081168680.jpg')]" src="https://static.wixstatic.com/media/4e8031_c39120a1650a43ef912f2225d98f6a9b~mv2.png/v1/fill/w_640,h_554,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4e8031_c39120a1650a43ef912f2225d98f6a9b~mv2.png" alt="" />
            </div>
            <div id="skills" className="w-full m-auto h-auto py-10">
             <h2 className="flex items-end font-semibold text-4xl my-10">Skills<p className="text-purple-500">.</p></h2>
             <p className="my-5">Technoligies and tools</p>
             <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-8 2xl:grid-cols-8">
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="PHP"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>PHP</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="React"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>React</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Node JS"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Node Js</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="MongoDB"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>MongoDB</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://cdn.iconscout.com/icon/free/png-256/free-mysql-18-1174938.png" alt="MySQL"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>MySQL</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Javascript</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>HTML</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="CSS"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>CSS</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="Bootstrap"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Bootstrap</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://seekvectors.com/files/download/vue-9-01.png" alt="Vue JS"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Vue JS</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Next JS"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Next JS</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" alt="Sass"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Sass</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt="Vs Code"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Vs Code</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" alt="Postman"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Postman</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>GitHub</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png" alt="JQuery"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>JQuery</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="NPM"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>NPM</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-svg-vector.svg" alt="Netlify"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Netlify</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png" alt="Vercel"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Vercel</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png" alt="DotNet"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>DotNet</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_logo_icon_146458.png" alt="Java"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Java</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://cyclr.com/wp-content/uploads/2022/03/ext-550.png" alt="MSSQL"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>MSSQL</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png" alt="Figma"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Figma</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" alt="Typescript"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Typescript</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/1024px-Status_iucn_EX_icon.svg.png" alt="Express Js"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Express Js</h3>
                    </div>
                    <div className={`${isDarkMode ? "bg-[#EEE]" : "bg-[#1E1E1E]"} h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg`}>
                        <img className="w-10 h-7 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind"/>
                        <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-sm`}>Tailwind</h3>
                    </div>
             </div>
            </div>
            <div id="project" className="w-full py-10">
            <h2 className="flex items-end font-semibold text-4xl my-10">Project<p className="text-purple-500">.</p></h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div>
                  <figure className="bg-red-500 p-8 rounded-xl flex items-center justify-center">
                    <img className="rounded-xl transition-all hover:scale-[1.1] cursor-pointer  object-cover" src={Project1} alt="Aniwatch"/>
                  </figure>
                  <figcaption className="flex items-center justify-between py-4 gap-5">
                    <div>
                      <h3 className="font-medium">League of Legends API</h3>
                      <p className={`${!isDarkMode ? "text-slate-400" : "text-slate-600"} font-thin text-justify`}>League of Legends API, this provide a hero information, skills , and abilities...</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="#" className={`${!isDarkMode ? "bg-slate-600 hover:bg-white hover:text-slate-600" : "bg-[#EEE] hover:bg-slate-300"} p-2 rounded-md transition-all`}>
                          <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </a>
                        <a href="https://riotleagueoflegends.netlify.app/" className={`${!isDarkMode ? "bg-slate-600 hover:bg-white hover:text-slate-600" : "bg-[#EEE] hover:bg-slate-300"} p-2 rounded-md transition-all`}>
                          <svg height="18" width="18"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                    </div>
                  </figcaption>
              </div>
              <div>
                  <figure className="bg-purple-500 p-8 rounded-xl flex items-center justify-center">
                    <img className="rounded-xl transition-all hover:scale-[1.1] cursor-pointer  object-cover" src={Movie} alt="Cineflex"/>
                  </figure>
                  <figcaption className="flex items-center justify-between py-4 gap-5">
                    <div>
                      <h3 className="font-medium">Cineflex</h3>
                      <p className={`${!isDarkMode ? "text-slate-400" : "text-slate-600"} font-thin text-justify `}>Cineflex website is not a pirated movie website, this website provide information for upcoming and...</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="#" className={`${!isDarkMode ? "bg-slate-600 hover:bg-white hover:text-slate-600" : "bg-[#EEE] hover:bg-slate-300"} p-2 rounded-md transition-all`}>
                          <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </a>
                        <a href="#" className={`${!isDarkMode ? "bg-slate-600 hover:bg-white hover:text-slate-600" : "bg-[#EEE] hover:bg-slate-300"} p-2 rounded-md transition-all`}>
                          <svg height="18" width="18"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                    </div>
                  </figcaption>
              </div>
              <div>
                  <figure className="bg-blue-500 p-8 rounded-xl flex items-center justify-center">
                    <img className="rounded-xl transition-all hover:scale-[1.1] cursor-pointer  object-cover" src={Project3} alt="Guess the Rank"/>
                  </figure>
                  <figcaption className="flex items-center justify-between py-4 gap-5">
                    <div>
                      <h3 className="font-medium">Guess the Rank</h3>
                      <p className={`${!isDarkMode ? "text-slate-400" : "text-slate-600"} font-thin text-justify `}>This is my side project that I created to those who love guessing the rank of their favorite game...</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="#" className={`${!isDarkMode ? "bg-slate-600 hover:bg-white hover:text-slate-600" : "bg-[#EEE] hover:bg-slate-300"} p-2 rounded-md transition-all`}>
                          <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </a>
                        <a href="#" className={`${!isDarkMode ? "bg-slate-600 hover:bg-white hover:text-slate-600" : "bg-[#EEE] hover:bg-slate-300"} p-2 rounded-md transition-all`}>
                          <svg height="18" width="18"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                    </div>
                  </figcaption>
              </div>
              <div>
                  <figure className="bg-green-500 p-8 rounded-xl flex items-center justify-center">
                    <img className="rounded-xl transition-all hover:scale-[1.1] cursor-pointer  object-cover" src={Project4}alt="Spotify Clone<"/>
                  </figure>
                  <figcaption className="flex items-center justify-between py-4 gap-5">
                    <div>
                      <h3 className="font-medium">Spotify Clone</h3>
                      <p className={`${!isDarkMode ? "text-slate-400" : "text-slate-600"} font-thin text-justify `}>I created a spotify clone and use the API provided of the Spotify, user can play and enjoy their music...</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="#" className={`${!isDarkMode ? "bg-slate-600 hover:bg-white hover:text-slate-600" : "bg-[#EEE] hover:bg-slate-300"} p-2 rounded-md transition-all`}>
                          <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </a>
                        <a href="#" className={`${!isDarkMode ? "bg-slate-600 hover:bg-white hover:text-slate-600" : "bg-[#EEE] hover:bg-slate-300"} p-2 rounded-md transition-all`}>
                          <svg height="18" width="18"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                    </div>
                  </figcaption>
              </div>
            </div>
            </div>
            <div id="experience" className="w-full py-10">
            <h2 className="flex items-end font-semibold text-4xl my-10">Experience<p className="text-purple-500">.</p></h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg">Noah's Ark Dog & Cat Shelter</h3>
                    <span className="text-purple-400">Full-Stack Developer</span>
                    <small className="italic font-thin">2022-2023</small>
                    <p className={`${isDarkMode ? "text-slate-600" : "text-slate-400"} font-thin h-auto  text-justify sm:h-auto md:h-auto lg:h-32 xl:h-32 2xl:h-32`}>
                      Developed a web application using ASP .NET Frameworks and MSSQL for the database. This project serves as our thesis system and is designed to manage the donation 
                      and adoption processes at a shelter. A notable feature of this project is its adoption system, which includes a pet matching functionality.
                    </p>
                    <div className={buttonOne ? "hidden" : "block"}>
                      <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-400"} py-5 font-semibold`}>Activities</h3>
                      <ul className={`${isDarkMode ? "text-slate-600" : "text-slate-400"} font-thin list-disc`}>
                        <li>User interface using HTML, CSS</li>
                        <li>Back-end infrastracture #C .NET Framework MVC</li>
                        <li>Database design with Microsoft Sql Server</li>
                      </ul>
                      <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-400"} py-5 font-semibold`}>Technologies</h3>
                      <div className="flex flex-wrap gap-5 font-thin">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <img className="w-5" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML" />
                          <p>HTML</p>
                        </div>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="CSS" />
                          <p>CSS</p>
                        </div>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <img className="w-5" src="https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png" alt="JQuery" />
                          <p>JQuery</p>
                        </div>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript" />
                          <p>Javascript</p>
                        </div>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png" alt="DotNet" />
                          <p>.NET Framework</p>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setButtonOne(!buttonOne)} className={`${!isDarkMode ? "bg-slate-600 text-white" : "bg-[#EEE] text-slate-600"} py-2 px-5 w-32 rounded-full my-5`}>See more</button>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg">Member Registry</h3>
                    <span className="text-purple-400">Full-Stack Developer</span>
                    <small className="italic font-thin">2023-2024</small>
                    <p className={`${isDarkMode ? "text-slate-600" : "text-slate-400"} font-thin h-auto  text-justify sm:h-auto md:h-auto lg:h-32 xl:h-32 2xl:h-32`}>
                      I developed this project using React JS, Express, Node JS, and MySQL for the database. The website is used for
                      registering all individuals with hemophilia in the Philippines.
                    </p>
                    <div className={buttonTwo ? "hidden" : "block"}>
                      <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-400"} py-5 font-semibold`}>Activities</h3>
                      <ul className={`${isDarkMode ? "text-slate-600" : "text-slate-400"} font-thin list-disc`}>
                        <li>User interface using React Js, Tailwind</li>
                        <li>Back-end infrastracture Node JS, Express Js</li>
                        <li>Database design with MySQL</li>
                      </ul>
                      <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-400"} py-5 font-semibold`}>Technologies</h3>
                      <div className="flex flex-wrap gap-5 font-thin">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <img className="w-5" src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="React Js" />
                          <p>React JS</p>
                        </div>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind" />
                          <p>Tailwind</p>
                        </div>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <img className="w-5" src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Node Js" />
                          <p>Node JS</p>
                        </div>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <img className="w-5" src="https://cdn.iconscout.com/icon/free/png-256/free-mysql-18-1174938.png" alt="MySql" />
                          <p>MySQL</p>
                        </div>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/1024px-Status_iucn_EX_icon.svg.png" alt="MySql" />
                          <p>Express JS</p>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setButtonTwo(!buttonTwo)} className={`${!isDarkMode ? "bg-slate-600 text-white" : "bg-[#EEE] text-slate-600"} py-2 px-5 w-32 rounded-full my-5`}>See more</button>
                </div>
            </div>
            </div>
            <div id="education" className="w-full py-10">
              <h2 className="flex items-end font-semibold text-4xl my-10">Education<p className="text-purple-500">.</p></h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex items-center gap-5">
                      <img className="w-20 rounded-md object-cover" src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/430283917_792150889602026_7764746930089458669_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GeiDoa5buXYAX_MnWL8&_nc_ht=scontent.fmnl3-4.fna&oh=00_AfBmPythAokyNGEoWKRRrtizbw3dQUY-EPBHftDy5F5agQ&oe=6602004E" alt="logo" />
                      <div className="w-full">
                        <small className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} font-thin`}>Degree</small>
                        <p className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} font-normal`}>Bachelor of Science Information Technology</p>
                        <p className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} italic text-sm`}>2019 - 2024</p>
                        <small className="text-slate-400 font-thin">Cavite State University - Bacoor Campus</small>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <img className="w-20 rounded-md object-cover" src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/305577153_448207523995095_3724038137914672630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=i-xukIUSGDUAX-HJZ4u&_nc_ht=scontent.fmnl3-3.fna&oh=00_AfAg7P5T9Mxh_2RSZHSSuwM53iuIQMHr5cQMnan3zdYo3g&oe=6602691D" alt="logo" />
                      <div className="w-full">
                        <small className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} font-thin`}>Secondary</small>
                        <p className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} font-normal`}>Secondary Education (ALS)</p>
                        <p className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} italic text-sm`}>2017 - 2018</p>
                        <small className="text-slate-400 font-thin">Queensrow East Elementary School</small>
                      </div>
                    </div>
              </div>
            </div>
            <div id="contact" className="w-full py-10">
             <h2 className="flex items-end font-semibold text-4xl my-10">Contact<p className="text-purple-500">.</p></h2>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
              <div className="flex items-center gap-5">
                <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="" />
                <div>
                  <small className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} font-thin`}>Send me and email:</small>
                  <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-md font-thin`}>cedricmanuel02@gmail.com</h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <img className="w-10" src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="" />
                <div>
                  <small className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} font-thin`}>My LinkedIn account:</small>
                  <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-md font-thin`}>in/cedric-manuel</h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <img className="w-10" src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" alt="" />
                <div>
                  <small className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} font-thin`}>My GitHub account:</small>
                  <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-md font-thin`}>/CedricManuel02</h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <img className="w-10" src="https://cdn-icons-png.flaticon.com/256/1384/1384063.png" alt="" />
                <div>
                  <small className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} font-thin`}>My Instagram account:</small>
                  <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-md font-thin`}>@cedie_manuel</h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <img className="w-10" src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="" />
                <div>
                  <small className={`${!isDarkMode ? "text-slate-200" : "text-slate-600"} font-thin`}>My Facebook account:</small>
                  <h3 className={`${isDarkMode ? "text-slate-600" : "text-slate-200"} text-md font-thin`}>@cedricmanuel19</h3>
                </div>
              </div>
              </div>
            </div>
        </main>
    )
}