import ExperienceTab from "./shared/ExperienceTab";
import Header from "./shared/Header";

export default function Experience() {
  const experience = [
    {
      start: false,
      right: true,
      title: "Noah's Ark Dog & Cat Shelter",
      year: "2022 - 2023",
      description: "Developed a web application using ASP .NET Frameworks and MSSQL for the database. This project serves as our thesis system and is designed to manage the donation and adoption processes at a shelter. A notable feature of this project is its adoption system, which includes a pet matching functionality.",
      language: [
        {name: "HTML",
          image: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
        },
        {name: "CSS",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
        },
        {name: "Javascript",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
        {name: "JQuery",
          image: "https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png"
        },
        {name: ".NET Framework",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png"
        },
      ]
    },
    {
      start: true,
      right: false,
      title: "School Inventory Management",
      year: "2024",
      description: "Project developed for a school project using PHP for back-end, HTML & TailwindCSS for front-end and MySQL for database.",
      language: [
        {name: "HTML",
          image: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
        },
        {name: "CSS",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
        },
        {name: "Javascript",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
        {name: "JQuery",
          image: "https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png"
        },
        {name: ".NET Framework",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png"
        },
      ]
    },
    {
      start: true,
      right: true,
      title: "Cavite State University Bacoor - Campus Extension",
      year: "2024",
      description: "Developed this web application for my OJT at Cavite State University Bacoor - Campus with HTML, Tailwind CSS for styling with the help of Daisy UI component while PHP for the backend and MySQL for database.",
      language: [
        {name: "HTML",
          image: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
        },
        {name: "CSS",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
        },
        {name: "Javascript",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
        {name: "JQuery",
          image: "https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png"
        },
        {name: ".NET Framework",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png"
        },
      ]
    },
  ];

  return (
    <div id="experience" className="w-full pb-20">
      <Header title={"Experience"} />
      <ul className="text-slate-400 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
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
  );
}
