import Header from "./shared/header";
import MotionContainer from "./shared/motion-container";
import Skill from "./shared/skill";

const skills = [
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", name: "Javascript" },
  { image: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png", name: "React" },
  { image: "https://cdn.worldvectorlogo.com/logos/next-js.svg", name: "Next JS" },
  { image: "https://raw.githubusercontent.com/github/explore/7608ddc367af1be315831c3fbb5b09aa56fa1bcb/topics/honojs/honojs.png", name: "Hono JS" },
  { image: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png", name: "Node JS" },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png", name: "PHP" },
  { image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg", name: "MongoDB" },
  { image: "https://static-00.iconduck.com/assets.00/mysql-icon-512x502-dn9lwwd1.png", name: "MySQL" },
  { image: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png", name: "HTML" },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png", name: "CSS" },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png", name: "Bootstrap" },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png", name: "Sass" },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    name: "Vs Code",
  },
  {
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256",
    name: "Postman",
  },
  { image: "https://cdn-icons-png.flaticon.com/512/25/25231.png", name: "GitHub" },
  { image: "https://www.cdnlogo.com/logos/j/17/jquery.svg", name: "JQuery" },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png", name: "DotNet" },
  { image: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg", name: "MSSQL" },
  { image: "https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png", name: "Figma" },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png", name: "Tailwind" },
];

export default function Skills() {
  return (
    <MotionContainer>
      <div id="skills" className="w-full m-auto h-auto py-10">
        <Header title={"Skills"} />
        <div className="px-4">
          <p className="my-5 text-slate-400">Technoligies and tools</p>
          <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8">
            {skills.map((skill, index) => (
              <Skill key={index} image={skill.image} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </MotionContainer>
  );
}
