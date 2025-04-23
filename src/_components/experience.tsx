import React from "react";
import Header from "./shared/header";
import ExperienceTab from "./shared/experience-tab";
import MotionContainer from "./shared/motion-container";

export default function Experience() {
  const experience = [
    {
      start: false,
      right: true,
      title: "Noah's Ark Dog & Cat Shelter",
      year: "2022 - 2023",
      description:
        "Developed a full-stack web application using ASP .NET Frameworks and MSSQL for the database. The project serves as our capstone project and it is designed to manage the donation and adoption processes at a shelter. A notable feature of this project is its adoption system, which includes a pet matching functionality.",
      language: [
        { name: "HTML", image: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" },
        { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" },
        { name: "Bootstrap", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" },
        { name: "Javascript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "JQuery", image: "https://www.cdnlogo.com/logos/j/17/jquery.svg" },
        {
          name: ".NET Framework",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png",
        },
        { name: "MSSQL Server", image: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
      ],
    },
    {
      start: true,
      right: false,
      title: "School Inventory Management",
      year: "2024",
      description: "Developed for a school project the system was built with PHP for the back-end, HTML & TailwindCSS for front-end and MySQL for database.",
      language: [
        { name: "HTML", image: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" },
        {
          name: "Tailwind CSS",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
        },
        { name: "Javascript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "PHP", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" },
        { name: "MySQL", image: "https://static-00.iconduck.com/assets.00/mysql-icon-512x502-dn9lwwd1.png" },
      ],
    },
    {
      start: true,
      right: true,
      title: "Cavite State University Bacoor - Campus Extension",
      year: "2024",
      description:
        "Developed a full-stack web application as part of my internship at Cavite State University Bacoor - Campus, system was built with HTML, Tailwind CSS for styling with the help of Daisy UI component while PHP for the backend and MySQL for database.",
      language: [
        { name: "HTML", image: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" },
        {
          name: "Tailwind CSS",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
        },
        { name: "Javascript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "JQuery", image: "https://www.cdnlogo.com/logos/j/17/jquery.svg" },
        { name: "PHP", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" },
        { name: "MySQL", image: "https://static-00.iconduck.com/assets.00/mysql-icon-512x502-dn9lwwd1.png" },
      ],
    },
    {
      start: true,
      right: false,
      title: "Seoul Mart Korean E-Commerce Website",
      year: "2024 - 2025",
      description: "Developed an e-commerce website for a client, built with Next JS for the frontend and Hono JS for the backend",
      language: [
        { name: "Next JS", image: "https://img.icons8.com/color/512/nextjs.png" },
        {
          name: "Tailwind CSS",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
        },
        {
          name: "Hono JS",
          image: "https://raw.githubusercontent.com/github/explore/7608ddc367af1be315831c3fbb5b09aa56fa1bcb/topics/honojs/honojs.png",
        },
        { name: "Prisma", image: "https://img.icons8.com/?size=512&id=zJh5Gyrd6ZKu&format=png" },
        { name: "MySQL", image: "https://static-00.iconduck.com/assets.00/mysql-icon-512x502-dn9lwwd1.png" },
        { name: "Cloudinary", image: "https://static-00.iconduck.com/assets.00/cloudinary-icon-512x335-z2n5aue3.png" },
      ],
    },
  ];

  return (
    <MotionContainer>
      <div id="experience" className="w-full pb-20">
        <Header title={"Experience"} />
        <ul className="px-4 text-slate-400 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {experience.map((data, index) => (
            <ExperienceTab
              key={index}
              start={data.start}
              right={data.right}
              title={data.title}
              year={data.year}
              description={data.description}
              languages={data.language}
            />
          ))}
        </ul>
      </div>
    </MotionContainer>
  );
}
