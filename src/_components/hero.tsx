"use client"
import React from "react";
import { FileText } from "lucide-react";
import Modal from "./shared/email-modal";
import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/magicui/meteors";
import Image from "next/image";

export default function Hero() {
  return (
    <React.Fragment>
      <div id="home" className="w-full h-screen flex items-center justify-evenly gap-10">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Meteors number={30} />
          <div className="w-10/12  h-screen flex flex-col items-center gap-5 justify-center font-semibold sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12">
            <h3 className="border border-slate-600 text-slate-300 flex items-center font-medium justify-center gap-2 w-64 rounded-full p-2">
              Hello, they call me Cedric.{" "}
              <Image className="w-4" width={100} height={100} src="https://img.daisyui.com/images/emoji/smiling-face-with-sunglasses@80.webp" alt="icon" />
            </h3>
            <h2 className="text-4xl lg:text-5xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-400 to-slate-600/80 bg-clip-text text-center font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Experienced full-stack developer with a focus on front-end developer
            </h2>
            {/*This is the info section*/}
            <div className="py-5 flex items-center justify-center gap-5 w-11/12">
              <div className="flex items-center justify-start  gap-2 w-5/12 h-full flex-col sm:flex-col sm:justify-start md:justify-start md:flex-col lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row">
                <span className="bg-slate-500 text-slate-300 py-2 px-3 rounded-md">2</span>
                <p className="font-thin text-xs text-center whitespace-nowrap text-white">
                  Year&apos;s of <br /> experience
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 w-5/12 h-full  flex-col sm:flex-col sm:justify-start md:justify-start md:flex-col lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row border-dashed border-l border-slate-400 border-r px-5">
                <span className="bg-slate-500 text-slate-300 py-2 px-3 rounded-md">10k</span>
                <p className="font-thin text-xs text-center whitespace-nowrap text-white">
                  Level of <br /> stress encounter
                </p>
              </div>
              <div className="flex items-center justify-start gap-2 w-5/12 h-full  flex-col sm:flex-col sm:justify-start md:justify-start md:flex-col lg:justify-center lg:flex-row xl:justify-center xl:flex-row 2xl:justify-center 2xl:flex-row">
                <span className="bg-slate-500 text-slate-300 py-2 px-3 rounded-md">5k</span>
                <p className="font-thin text-xs text-center whitespace-nowrap text-white">
                  Cups of <br /> coffee consumed
                </p>
              </div>
            </div>
            {/*This is the hero button section*/}
            <div className="flex items-center justify-center gap-3">
              <Button onClick={() => window.open("https://res.cloudinary.com/dewuwe0ig/image/upload/v1744946416/CEDRIC-MANUEL-CV_ltl3kc.png", "_blank")} className="bg-slate-700 flex items-center justify-center gap-2 w-32 h-12 sm:h-14 sm:w-44  rounded-full cursor-pointer">
                <FileText />
                Resume
              </Button>
              {/*This is the modal section*/}
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
