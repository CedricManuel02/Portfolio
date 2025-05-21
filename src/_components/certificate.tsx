import React from "react";
import Header from "./shared/header";
import Image from "next/image";
import MotionContainer from "./shared/motion-container";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";

export default function Certifications() {
  const certificates = [
    {
      title: "Introduction to Front-End Development",
      image: "https://res.cloudinary.com/dewuwe0ig/image/upload/v1747802988/Front-end-development-certificate_xipw89.png",
      date: "May 19, 2025",
      link: "https://coursera.org/share/b852520635eb9ddaaacdd3c3ef5e50e1",
      issued_by: "Meta",
    },
    {
      title: "How to be Cybersafe: Cybersecurity 101 for Women and Girls",
      image: "https://res.cloudinary.com/dewuwe0ig/image/upload/v1744946416/Manuel_Cedric_Gio_-_2021_March_17_Webinar_peexeg.png",
      date: "March 17, 2021",
      link: "#",
      issued_by: "Department of Information and Communications Technology",
    },
    {
      title: "Introduction to Cybersecurity",
      image: "https://res.cloudinary.com/dewuwe0ig/image/upload/v1747802988/INTRO_TO_CYBERSEC-1_w7aezv.png",
      date: "March 14, 2021",
      link: "https://www.credly.com/badges/e976c493-4695-4231-beb2-378c812e0d0e/public_url",
      issued_by: "Cisco",
    },
    {
      title: "Introduction to Packet Tracer",
      image: "https://res.cloudinary.com/dewuwe0ig/image/upload/v1747802988/INTRO_TO_PACKET_TRACER-1_njpcvj.png",
      date: "April 16, 2021",
      link: "https://www.credly.com/badges/383184bd-f3bf-4402-a5c0-b9f436281e1e",
      issued_by: "Cisco",
    },
    {
      title: "Networking Essentials",
      image: "https://res.cloudinary.com/dewuwe0ig/image/upload/v1747802988/NETWORK_ESSENTIALS-1_woxyn8.png",
      date: "April 27, 2021",
      link: "#",
      issued_by: "Cisco",
    },
    {
      title: "Introduction to IoT",
      image: "https://res.cloudinary.com/dewuwe0ig/image/upload/v1747802988/IOT-1_hylzfp.png",
      date: "May 14, 2021",
      link: "https://www.credly.com/badges/03652fb5-4893-4b60-834e-5169063f604f/public_url",
      issued_by: "Cisco",
    },
  ];
  return (
    <MotionContainer>
      <div id="certifications" className="w-full">
        <Header title={"Certifications"} />
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {certificates.map((certificate: any, index: number) => (
              <figure className="w-96 h-full" key={index}>
                <Image src={certificate.image} alt={certificate.title} className="rounded-md w-full h-64 object-cover" width={1000} height={100} />
                <figcaption className="mt-2">
                  <Link href={certificate.link}>
                    <h4 className="text-white w-80 whitespace-nowrap text-ellipsis overflow-hidden hover:underline hover:text-slate-500/90">
                      {certificate.title}
                    </h4>
                  </Link>
                  <time className="text-slate-400 text-sm">{certificate.date}</time>
                  <span className="w-80 block text-slate-400/80 whitespace-nowrap text-ellipsis overflow-hidden text-sm">{certificate.issued_by}</span>
                </figcaption>
              </figure>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#121212] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#121212] to-transparent"></div>
        </div>
      </div>
    </MotionContainer>
  );
}
