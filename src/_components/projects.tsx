import { Github, Link } from "lucide-react";
import Header from "./shared/header";
import { DEFAULT_ICON_SIZE } from "@/constant/constant";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import MotionContainer from "./shared/motion-container";

export default function Project() {
  const projects = [
    {
      image: "https://res.cloudinary.com/dewuwe0ig/image/upload/v1745394736/ezgif.com-video-to-gif-converter_1_fq3ui5.gif",
      title: "Netflix Clone",
      description: "Netflix website is not a pirated movie website, this website provide information for upcoming movies.",
      status: true,
      github: "https://github.com/CedricManuel02/Netflix-Clone",
      url: "https://cm-netflix.vercel.app/",
    },
    {
      image: "https://res.cloudinary.com/dewuwe0ig/image/upload/v1745462263/ezgif.com-video-to-gif-converter_quddsr.gif",
      title: "League of Legends API",
      description: "League of Legends API, this provide a hero information, skills , and abilities.",
      status: true,
      github: "https://github.com/CedricManuel02/LeagueOfLegendsAPI-Integration",
      url: "https://league-of-legends-api-integration.vercel.app/",
    },
    {
      image: "https://res.cloudinary.com/dewuwe0ig/image/upload/v1745393118/ezgif.com-video-to-gif-converter_gtm2wg.gif",
      title: "Spotify Clone",
      description: "I created a spotify clone and use the API provided of the Spotify, user can play and enjoy their music.",
      status: true,
      github: "/",
      url: "/",
    },
    {
      image: "https://res.cloudinary.com/dewuwe0ig/image/upload/v1745464085/ezgif.com-video-to-gif-sd_mo9yjl.gif",
      title: "Seoul Mart Korean E-Commerce",
      description: "Developed a Korean E-commerce website with Next JS and Hono JS for backend.",
      status: false,
      github: "/",
      url: "/",
    },
  ];
  return (
    <MotionContainer>
      <div id="project" className="w-full">
        <Header title={"Projects"} />
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s]">
            {projects.map((project, index) => (
              <div className="w-[450px]" key={index}>
                <figure className="rounded-xl flex items-center justify-center">
                  <Image
                    className="h-54 md:h-64 w-full rounded-md  cursor-pointer object-cover"
                    src={project.image}
                    width={600}
                    height={500}
                    alt={project.title}
                  />
                </figure>
                <figcaption className="flex items-center justify-between py-4 gap-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-white">{project.title}</h3>
                      <span
                        className={`${
                          project.status ? "badge-success outline-green-500" : "badge-warning  outline-yellow-500"
                        } text-xs badge badge-outline outline px-2`}
                      >
                        {project.status ? "Complete" : "In Progress"}
                      </span>
                    </div>
                    <p className="text-slate-400 font-thin text-justify">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      className="bg-slate-600 text-white hover:bg-white hover:text-slate-400
                  p-2 rounded-md transition-all"
                    >
                      <Github size={DEFAULT_ICON_SIZE - 5} />
                    </a>
                    <a href={project.url} className="bg-slate-600 text-white hover:bg-white hover:text-slate-400 p-2 rounded-md transition-all">
                      <Link size={DEFAULT_ICON_SIZE - 5} />
                    </a>
                  </div>
                </figcaption>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#121212] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#121212] to-transparent"></div>
        </div>
      </div>
    </MotionContainer>
  );
}
