import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link as ScrollLink } from 'react-scroll';
//import emailjs from '@emailjs/browser';//
interface TechStack {
    image: string
    title: string
}
interface Project {
  color: string
  image: string
  title: string
  description: string
  github: string
  url: string
}
export default function Home(){
    const [teckStack, setTechStack] = useState<TechStack[]>([]);
    const [project, setProject] = useState<Project[]>([]);
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
    useEffect(() => {
        const fetchTechStack = async () => {
          try {
            const res = await fetch("http://localhost:5173/src/utils/TechStack.json");
            if (!res.ok) {
              throw new Error('Failed to fetch data');
            }
            const {techstack} = await res.json();
            setTechStack(techstack);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        const fetchProject = async () => {
          try {
            const res = await fetch("http://localhost:5173/src/utils/Project.json");
            if (!res.ok) {
              throw new Error('Failed to fetch data');
            }
            const {projectList} = await res.json();
            setProject(projectList);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchProject();
        fetchTechStack();
      }, []);
    return(
        <main className="m-auto h-auto w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12">
            <ToastContainer className="ToastContainer"/>
            <div id="home" className="w-full h-screen flex items-center justify-evenly gap-10">
                <div className="w-11/12 h-screen flex flex-col items-center gap-5 justify-center font-semibold sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12">
                    <h3 className="flex items-center font-medium justify-center gap-2 bg-slate-600 w-64 rounded-full p-2">Hello, <p className="wave">👋</p> they call me Cedric.</h3>
                    <h2 className="text-4xl text-center sm:text-4xl md:text-6xl lg:text-6xl 2xl:text-6xl">Experienced <span className="text-purple-400">full-stack developer</span>  with a focus on <span className="text-purple-400">back-end developer</span>.</h2>
                    <div className="flex items-center justify-center gap-3">
                        <a href="#" className="py-3 px-5 sm:py-3 sm:px-5 md:py-3 md:px-5 lg:py-4 lg:px-8 xl:py-4 xl:px-8 2xl:py-4 2xl:px-8 bg-slate-200 text-slate-600 rounded-full flex items-center gap-3"><svg width="26" height="26" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line>
                        </svg>Resume</a>
                        <ScrollLink className="cursor-pointer py-3 px-5 sm:py-3 sm:px-5 md:py-3 md:px-5 lg:py-4 lg:px-8 xl:py-4 xl:px-8 2xl:py-4 2xl:px-8 bg-slate-600 rounded-full flex items-center gap-3 text-slate-200" to="contact" smooth={true} duration={500}><svg width="26" height="26" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>Contact</ScrollLink>
                    </div>
                </div>
            </div>
            <div id="about" className="flex items-center py-10 justify-between gap-5 flex-col-reverse sm:flex-col-reverse md:flex-col-reverse  lg:flex-row xl:flex-row 2xl:flex-row">
                <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 2xl:w-8/12">
                    <h2 className="flex items-end font-semibold text-4xl my-10">About me<p className="text-purple-500">.</p></h2>
                    <p className="text-justify text-slate-400">Hi, my name is Cedric Gio Manuel, and I'm a 22-year-old individual with a keen interest in technology
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
                {teckStack.map((item, index) => (
                    <div key={index} className="bg-[#1E1E1E] h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg">
                        <img className="w-10 h-7 object-contain" src={item.image} alt={item.title}/>
                        <h3>{item.title}</h3>
                    </div>
                ))}
             </div>
            </div>
            <div id="project" className="w-full py-10">
            <h2 className="flex items-end font-semibold text-4xl my-10">Project<p className="text-purple-500">.</p></h2>
            <p className="my-8">Featured projects</p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              {project.map((project, index) => (
                <div key={index}>
                  <figure className={`${project.color} p-8 rounded-xl flex items-center justify-center`}>
                    <img className="rounded-xl transition-all hover:scale-[1.1] cursor-pointer  object-cover" src={project.image} alt={project.title} />
                  </figure>
                  <figcaption className="flex items-center justify-between py-4 gap-5">
                    <div>
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="text-slate-400">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href={project.github} className="p-2 bg-slate-600 rounded-md hover:bg-white hover:text-slate-600 transition-all">
                          <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </a>
                        <a href={project.url} className="p-2 bg-slate-600 rounded-md hover:bg-white hover:text-slate-600 transition-all">
                          <svg height="18" width="18"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                    </div>
                  </figcaption>
              </div>
              ))}
            </div>
            </div>
            <div id="experience" className="w-full py-10">
            <h2 className="flex items-end font-semibold text-4xl my-10">Experience<p className="text-purple-500">.</p></h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg">Noah's Ark Dog & Cat Shelter</h3>
                    <span className="text-purple-400">Full-Stack Developer</span>
                    <small className="italic font-thin">2022-2023</small>
                    <p className="h-auto text-slate-400 font-thin text-justify sm:h-auto md:h-auto lg:h-32 xl:h-32 2xl:h-32">I created this web application using ASP .Net Frameworks and MSSQL for the database
                       .This project is our thesis system, shelter to manage their donation and adoption process,
                       the special features of this project is the adoption system that include the pet matching.
                    </p>
                    <div className={buttonOne ? "hidden" : "block"}>
                      <h3 className="py-5 font-semibold">Activities</h3>
                      <ul className="text-slate-400">
                        <li>User interface using HTML, CSS</li>
                        <li>Back-end infrastracture #C .NET Framework MVC</li>
                        <li>Database design with Microsoft Sql Server</li>
                      </ul>
                      <h3 className="py-5 font-semibold">Technologies</h3>
                      <div className="flex flex-wrap gap-5">
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
                    <button onClick={() => setButtonOne(!buttonOne)} className="py-2 px-5 w-32 bg-slate-600 rounded-full my-5 text-white">See more</button>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg">Member Registry</h3>
                    <span className="text-purple-400">Full-Stack Developer</span>
                    <small className="italic font-thin">2023-2024</small>
                    <p className="h-auto text-slate-400 font-thin text-justifysm:h-auto md:h-auto lg:h-32 xl:h-32 2xl:h-32">This is my recent project for the year 2023 - 2024, I created this with React Js, Express, Node Js, and
                       MySQL for the database, this website use as the registration of all hemophilia existed in the Philippines.
                    </p>
                    <div className={buttonTwo ? "hidden" : "block"}>
                      <h3 className="py-5 font-semibold">Activities</h3>
                      <ul className="text-slate-400">
                        <li>User interface using React Js, Tailwind</li>
                        <li>Back-end infrastracture Node JS, Express Js</li>
                        <li>Database design with MySQL</li>
                      </ul>
                      <h3 className="py-5 font-semibold">Technologies</h3>
                      <div className="flex flex-wrap gap-5">
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
                    <button onClick={() => setButtonTwo(!buttonTwo)} className="py-2 px-5 w-32 bg-slate-600 rounded-full my-5 text-white">See more</button>
                </div>
            </div>
            </div>
            <div id="education" className="w-full py-10">
              <h2 className="flex items-end font-semibold text-4xl my-10">Education<p className="text-purple-500">.</p></h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex items-center gap-5">
                      <img className="w-20 rounded-md object-cover" src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/430283917_792150889602026_7764746930089458669_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GeiDoa5buXYAX_MnWL8&_nc_ht=scontent.fmnl3-4.fna&oh=00_AfBmPythAokyNGEoWKRRrtizbw3dQUY-EPBHftDy5F5agQ&oe=6602004E" alt="logo" />
                      <div className="w-full">
                        <small className="text-slate-600 font-medium">Degree</small>
                        <p className="text-slate-300 font-medium">Bachelor of Science Information Technology</p>
                        <p className="text-slate-600 font-medium">2019 - 2024</p>
                        <small className="text-slate-400 font-medium">Cavite State University - Bacoor Campus</small>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <img className="w-20 rounded-md object-cover" src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/305577153_448207523995095_3724038137914672630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=i-xukIUSGDUAX-HJZ4u&_nc_ht=scontent.fmnl3-3.fna&oh=00_AfAg7P5T9Mxh_2RSZHSSuwM53iuIQMHr5cQMnan3zdYo3g&oe=6602691D" alt="logo" />
                      <div className="w-full">
                        <small className="text-slate-600 font-medium">Secondary</small>
                        <p className="text-slate-300 font-medium">Secondary Education (ALS)</p>
                        <p className="text-slate-600 font-medium">2017 - 2018</p>
                        <small className="text-slate-400 font-medium">Queensrow East Elementary School</small>
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
                  <small className="text-slate-400">Send me and email:</small>
                  <h3 className="text-md">cedricmanuel02@gmail.com</h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <img className="w-10" src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="" />
                <div>
                  <small className="text-slate-400">My LinkedIn account:</small>
                  <h3 className="text-md">in/cedric-manuel</h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <img className="w-10" src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" alt="" />
                <div>
                  <small className="text-slate-400">My GitHub account:</small>
                  <h3 className="text-md">/CedricManuel02</h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <img className="w-10" src="https://cdn-icons-png.flaticon.com/256/1384/1384063.png" alt="" />
                <div>
                  <small className="text-slate-400">My Instagram account:</small>
                  <h3 className="text-md">@cedie_manuel</h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <img className="w-10" src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="" />
                <div>
                  <small className="text-slate-400">My Facebook account:</small>
                  <h3 className="text-md">@cedricmanuel19</h3>
                </div>
              </div>
              </div>
            </div>
        </main>
    )
}