import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

import Resume from "../docs/Resume.pdf";
import Skill from "../components/Skill";
import {Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import About from "../components/About";
import Project from "../components/Project";
import Experience from "../components/Experience";

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
                2
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
      <About/>
      <Project/>
      <Skill/>
      <Experience/>
    </main>
  );
}
