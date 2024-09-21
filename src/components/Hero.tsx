import React from "react";
import { FileText, MessageSquareText } from "lucide-react";
import Resume from "../docs/Resume.pdf";
import { useRef} from "react";
import { ToastContainer } from "react-toastify";
import Modal from "./shared/Modal";

export default function Hero() {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <React.Fragment>
      <ToastContainer className="ToastContainer" />
      <div id="home" className="w-full h-screen flex items-center justify-evenly gap-10">
        <div className="w-10/12  h-screen flex flex-col items-center gap-5 justify-center font-semibold sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12">
          <h3 className="bg-slate-500 text-slate-300 flex items-center font-medium justify-center gap-2 w-64 rounded-full p-2">
            Hello, they call me Cedric.{" "}
            <img className="w-4" src="https://img.daisyui.com/images/emoji/smiling-face-with-sunglasses@80.webp" alt="icon"/>
          </h3>
          <h2 className="text-gradient text-4xl text-center sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-5xl">
            Experienced full-stack developer with a focus on front-end developer
          </h2>
         {/*This is the info section*/}
          <div className="py-5 flex items-center justify-center gap-5 w-11/12">
            <div className="flex items-center justify-start  gap-2 w-5/12 h-full flex-col sm:flex-col sm:justify-start md:justify-start md:flex-col lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row">
              <span className="bg-slate-500 text-slate-300 py-2 px-3 rounded-md">
                2
              </span>
              <p className="font-thin text-xs text-center whitespace-nowrap">
                Year's of <br /> experience
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 w-5/12 h-full  flex-col sm:flex-col sm:justify-start md:justify-start md:flex-col lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row border-dashed border-l border-slate-400 border-r px-5">
              <span className="bg-slate-500 text-slate-300 py-2 px-3 rounded-md">
                10k
              </span>
              <p className="font-thin text-xs text-center whitespace-nowrap">
                Level of <br /> stress encounter
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
         {/*This is the hero button section*/}
          <div className="flex items-center justify-center gap-3">
            <a href={Resume} className="bg-slate-600 hover:bg-slate-500 transition-all text-slate-200 py-3 px-5 sm:py-3 sm:px-5 md:py-3 md:px-5 lg:py-4 lg:px-8 xl:py-4 xl:px-8 2xl:py-4 2xl:px-8 rounded-full flex items-center gap-3">
                <FileText />
                Resume
            </a>
            <button onClick={openModal} className="border hover:bg-slate-200 text-slate-400 transition-all cursor-pointer py-3 px-5 sm:py-3 sm:px-5 md:py-3 md:px-5 lg:py-4 lg:px-8 xl:py-4 xl:px-8 2xl:py-4 2xl:px-8 rounded-full flex items-center gap-3">
                <MessageSquareText />
                Send Email
            </button>
            {/*This is the modal section*/}
           <Modal modalRef={modalRef}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

