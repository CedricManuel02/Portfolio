import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

import Movie from "../assets/Movie.png";
import Project1 from "../assets/project1.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";

import Resume from "../docs/Resume.pdf";
import Skills from "../components/Skills";
import { Facebook, Github, Instagram, LinkedinIcon, Loader2, Mail } from "lucide-react";
import { useRef, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_7i3trfl",
          "template_q5t5952",
          form.current,
          "CPc8VLyk3ZkK4RBGd"
        )
        .then(
          () => {
            toast.success(`Successfully Sent`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              style: { background: "white" },
            });
            setIsLoading(false);
            form.current?.reset();
          },
          (err) => {
            console.log(err);
            toast.warn(`Something went wrong, Try again. ${err}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              style: { background: "white" },
            });
            setIsLoading(false);
          }
        );
    }
  };
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <main className="m-auto h-auto w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
      <ToastContainer className="ToastContainer" />
      <div
        id="home"
        className="w-full h-screen flex items-center justify-evenly gap-10"
      >
        <div className="w-10/12  h-screen flex flex-col items-center gap-5 justify-center font-semibold sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12">
          <h3 className="bg-slate-500 text-slate-300 flex items-center font-medium justify-center gap-2 w-64 rounded-full p-2">
            Hello, they call me Cedric.{" "}
            <img
              className="w-4"
              src="https://img.daisyui.com/images/emoji/smiling-face-with-sunglasses@80.webp"
              alt="icon"
            />
          </h3>
          <h2 className="text-gradient text-4xl text-center sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-5xl">
            Experienced full-stack developer with a focus on front-end developer
          </h2>
          <div className="py-5 flex items-center justify-center gap-5 w-11/12">
            <div className="flex items-center justify-start  gap-2 w-5/12 h-full flex-col sm:flex-col sm:justify-start md:justify-start md:flex-col lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row">
              <span className="bg-slate-500 text-slate-300 py-2 px-3 rounded-md">
                8
              </span>
              <p className="font-thin text-xs text-center whitespace-nowrap">
                Months of <br /> experience
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 w-5/12 h-full  flex-col sm:flex-col sm:justify-start md:justify-start md:flex-col lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row border-dashed border-l border-slate-400 border-r px-5">
              <span className="bg-slate-500 text-slate-300 py-2 px-3 rounded-md">
                1k
              </span>
              <p className="font-thin text-xs text-center whitespace-nowrap">
                Lines of <br /> code written
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 w-5/12 h-full  flex-col sm:flex-col sm:justify-start md:justify-start md:flex-col lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row">
              <span className="bg-slate-500 text-slate-300 py-2 px-3 rounded-md">
                5k
              </span>
              <p className="font-thin text-xs text-center whitespace-nowrap">
                Cups of <br /> coffee consumed
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <a
              href={Resume}
              className="bg-slate-600 text-slate-200 py-3 px-5 sm:py-3 sm:px-5 md:py-3 md:px-5 lg:py-4 lg:px-8 xl:py-4 xl:px-8 2xl:py-4 2xl:px-8 rounded-full flex items-center gap-3"
            >
              <svg
                width="26"
                height="26"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
              Resume
            </a>
            <button
              onClick={openModal}
              className="border hover:bg-slate-200 text-slate-400 transition-all cursor-pointer py-3 px-5 sm:py-3 sm:px-5 md:py-3 md:px-5 lg:py-4 lg:px-8 xl:py-4 xl:px-8 2xl:py-4 2xl:px-8 rounded-full flex items-center gap-3"
            >
              <svg
                width="26"
                height="26"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Send Email
            </button>
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
              <div className="modal-box">
                <form method="dialog">
                  <h3 className="font-bold text-lg">Email me</h3>
                  <p className="py-4">Let's collaborate !</p>
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form ref={form} onSubmit={sendEmail}>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Your Name</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                      </svg>
                      <input
                        type="text"
                        className="grow"
                        placeholder="Enter your name"
                        name="user_name"
                        required
                      />
                    </label>
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Your Email</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                      </svg>
                      <input
                        type="email"
                        className="grow"
                        placeholder="Email"
                        name="user_email"
                        required
                      />
                    </label>
                  </label>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Message</span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered textarea-lg h-24"
                      placeholder="Your message here"
                      name="message"
                      required
                    ></textarea>
                  </label>
                  <div className="pt-4 flex items-center justify-end">
                    {isLoading ? (
                      <button
                        type="submit"
                        className="btn btn-primary text-white"
                      >
                        <Loader2 className="animate-spin"/> Sending...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary text-white"
                      >
                        Send
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="flex items-center py-10 justify-between gap-5 flex-col sm:flex-col md:flex-col  lg:flex-row xl:flex-row 2xl:flex-row"
      >
        <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 2xl:w-8/12">
          <h2 className="flex items-end font-semibold text-4xl my-10">
            About me<p className="text-purple-500">.</p>
          </h2>
          <p className="text-slate-400 text-justify">
            Hi, my name is Cedric Gio Manuel, and I'm a 22-year-old individual
            with a keen interest in technology and innovation. Currently, I'm in
            my 4th year of college, pursuing a Bachelor of Science in
            Information Technology. My academic journey has been an exciting
            exploration of the vast world of IT, and I'm enthusiastic about
            applying my knowledge to real-world projects.
          </p>
          <div className="flex items-center justify-start gap-4 py-4">
            <a
              href="#"
              data-tip="cedricmanuel02@gmail.com"
              className="tooltip cursor-pointer hover:scale-[1.1] hover:text-purple-400 transition-all"
            >
              <Mail size={23} />
            </a>
            <a
              href="#"
              data-tip="@cedricmanuel19"
              className="tooltip cursor-pointer hover:scale-[1.1] hover:text-purple-400 transition-all"
            >
              <Facebook size={23} />
            </a>
            <a
              href="#"
              data-tip="@cedie_manuel"
              className="tooltip cursor-pointer hover:scale-[1.1] hover:text-purple-400 transition-all"
            >
              <Instagram size={23} />
            </a>
            <a
              href="#"
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
        <div className="mockup-code w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 2xl:w-8/12">
          <pre data-prefix="$">
            <code>npm i skills knowledge experience</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>
      </div>
      <div id="project" className="w-full py-10">
        <h2 className="flex items-end font-semibold text-4xl my-10">
          Project<p className="text-purple-500">.</p>
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          <div>
            <figure className="bg-red-500 p-8 rounded-xl flex items-center justify-center">
              <img
                className="rounded-xl transition-all hover:scale-[1.1] cursor-pointer object-cover"
                src={Project1}
                alt="Aniwatch"
              />
            </figure>
            <figcaption className="flex items-center justify-between py-4 gap-5">
              <div>
                <h3 className="font-medium">League of Legends API</h3>
                <p className="text-slate-400 font-thin text-justify">
                  League of Legends API, this provide a hero information, skills
                  , and abilities...
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="bg-slate-600 hover:bg-white hover:text-slate-400
                  p-2 rounded-md transition-all"
                >
                  <svg
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-slate-600 hover:bg-white hover:text-slate-400 p-2 rounded-md transition-all"
                >
                  <svg
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </figcaption>
          </div>
          <div>
            <figure className="bg-purple-500 p-8 rounded-xl flex items-center justify-center">
              <img
                className="rounded-xl transition-all hover:scale-[1.1] cursor-pointer  object-cover"
                src={Movie}
                alt="Cineflex"
              />
            </figure>
            <figcaption className="flex items-center justify-between py-4 gap-5">
              <div>
                <h3 className="font-medium">Netflix Clone</h3>
                <p className="text-slate-400 font-thin text-justify">
                  Netflix website is not a pirated movie website, this website
                  provide information for upcoming and...
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="bg-slate-600 hover:bg-white hover:text-slate-400
                  p-2 rounded-md transition-all"
                >
                  <svg
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  href="https://netflix-tmdb-clone.vercel.app/"
                  className="bg-slate-600 hover:bg-white hover:text-slate-400 p-2 rounded-md transition-all"
                >
                  <svg
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </figcaption>
          </div>
          <div>
            <figure className="bg-blue-500 p-8 rounded-xl flex items-center justify-center">
              <img
                className="rounded-xl transition-all hover:scale-[1.1] cursor-pointer  object-cover"
                src={Project3}
                alt="Guess the Rank"
              />
            </figure>
            <figcaption className="flex items-center justify-between py-4 gap-5">
              <div>
                <h3 className="font-medium">Guess the Rank</h3>
                <p className="text-slate-400 font-thin text-justify">
                  This is my side project that I created to those who love
                  guessing the rank of their favorite game...
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="bg-slate-600 hover:bg-white hover:text-slate-400
                  p-2 rounded-md transition-all"
                >
                  <svg
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-slate-600 hover:bg-white hover:text-slate-400 p-2 rounded-md transition-all"
                >
                  <svg
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </figcaption>
          </div>
          <div>
            <figure className="bg-green-500 p-8 rounded-xl flex items-center justify-center">
              <img
                className="rounded-xl transition-all hover:scale-[1.1] cursor-pointer  object-cover"
                src={Project4}
                alt="Spotify Clone<"
              />
            </figure>
            <figcaption className="flex items-center justify-between py-4 gap-5">
              <div>
                <h3 className="font-medium">Spotify Clone</h3>
                <p className="text-slate-400 font-thin text-justify">
                  I created a spotify clone and use the API provided of the
                  Spotify, user can play and enjoy their music...
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="bg-slate-600 hover:bg-white hover:text-slate-400
                  p-2 rounded-md transition-all"
                >
                  <svg
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-slate-600 hover:bg-white hover:text-slate-400 p-2 rounded-md transition-all"
                >
                  <svg
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
      <div id="skills" className="w-full m-auto h-auto py-10">
        <h2 className="flex items-end font-semibold text-4xl my-10">
          Skills<p className="text-purple-500">.</p>
        </h2>
        <p className="my-5">Technoligies and tools</p>
        <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-8 2xl:grid-cols-8">
          <Skills
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
            }
            name={"PHP"}
          />
          <Skills
            image={
              "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
            }
            name={"React"}
          />
          <Skills
            image={
              "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
            }
            name={"Node JS"}
          />
          <Skills
            image={
              "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
            }
            name={"MongoDB"}
          />
          <Skills
            image={
              "https://cdn.iconscout.com/icon/free/png-256/free-mysql-18-1174938.png"
            }
            name={"MySQL"}
          />
          <Skills
            image={
              "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            }
            name={"Javascript"}
          />
          <Skills
            image={"https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"}
            name={"HTML"}
          />
          <Skills
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
            }
            name={"CSS"}
          />
          <Skills
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
            }
            name={"Bootstrap"}
          />
          <Skills
            image={"https://cdn.worldvectorlogo.com/logos/next-js.svg"}
            name={"Next JS"}
          />
          <Skills
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
            }
            name={"Sass"}
          />
          <Skills
            image={
              "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png"
            }
            name={"Vs Code"}
          />
          <Skills
            image={
              "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
            }
            name={"Postman"}
          />
          <Skills
            image={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
            name={"GitHub"}
          />
          <Skills
            image={
              "https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png"
            }
            name={"JQuery"}
          />
          <Skills
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png"
            }
            name={"NPM"}
          />
          <Skills
            image={
              "https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-svg-vector.svg"
            }
            name={"Netlify"}
          />
          <Skills
            image={
              "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png"
            }
            name={"Vercel"}
          />
          <Skills
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png"
            }
            name={"DotNet"}
          />
          <Skills
            image={
              "https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_logo_icon_146458.png"
            }
            name={"Java"}
          />
          <Skills
            image={
              "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
            }
            name={"MSSQL"}
          />
          <Skills
            image={
              "https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png"
            }
            name={"Figma"}
          />
          <Skills
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
            }
            name={"Typescript"}
          />
          <Skills
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/1024px-Status_iucn_EX_icon.svg.png"
            }
            name={"Express Js"}
          />
          <Skills
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
            }
            name={"Tailwind"}
          />
        </div>
      </div>
      <div id="experience" className="w-full pb-20">
        <h2 className="flex items-end font-semibold text-4xl my-10">
          Experience<p className="text-purple-500">.</p>
        </h2>
        <ul className="text-slate-400 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2022 - 2023</time>
              <div className="text-lg text-purple-300 py-2">
                Noah's Ark Dog & Cat Shelter
              </div>
              Developed a web application using ASP .NET Frameworks and MSSQL
              for the database. This project serves as our thesis system and is
              designed to manage the donation and adoption processes at a
              shelter. A notable feature of this project is its adoption system,
              which includes a pet matching functionality.
              <h3 className="py-4 text-purple-300">Languages</h3>
              <div className="flex flex-wrap gap-5 font-thin justify-start sm:justify-start md:justify-end lg:justify-end">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
                    alt="HTML"
                  />
                  <p>HTML</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
                    alt="CSS"
                  />
                  <p>CSS</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png"
                    alt="JQuery"
                  />
                  <p>JQuery</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt="Javascript"
                  />
                  <p>Javascript</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png"
                    alt="DotNet"
                  />
                  <p>.NET Framework</p>
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2024</time>
              <div className="text-lg text-purple-300 py-2">
                School Inventory Management
              </div>
              Project developed for a school project using PHP for back-end,
              HTML & TailwindCSS for front-end and MySQL for database.
              <h3 className="py-4 text-purple-300">Languages</h3>
              <div className="flex flex-wrap gap-5 font-thin justify-start">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                    alt="PHP"
                  />
                  <p>PHP</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                    alt="Tailwind CSS"
                  />
                  <p>Tailwind CSS</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
                    alt="HTML"
                  />
                  <p>HTML</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-mysql-18-1174938.png"
                    alt="MySql"
                  />
                  <p>MySQL</p>
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2024</time>
              <div className="text-lg text-purple-300 py-2">
                Cavite State University Bacoor - Campus Extension
              </div>
              Developed this web application for my OJT at Cavite State
              University Bacoor - Campus with HTML, Tailwind CSS for styling
              with the help of Daisy UI component while PHP for the backend
              and MySQL for database.
              <h3 className="py-4 text-purple-300">Languages</h3>
              <div className="flex flex-wrap gap-5 font-thin justify-end">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                    alt="PHP"
                  />
                  <p>PHP</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                    alt="Tailwind CSS"
                  />
                  <p>Tailwind CSS</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
                    alt="HTML"
                  />
                  <p>HTML</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    className="w-5"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-mysql-18-1174938.png"
                    alt="MySql"
                  />
                  <p>MySQL</p>
                </div>
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </main>
  );
}
