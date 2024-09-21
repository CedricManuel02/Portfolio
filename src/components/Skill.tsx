import Header from "./shared/Header";
import Skills from "./shared/SkillsCard";

export default function Skill() {
  return (
    <div id="skills" className="w-full m-auto h-auto py-10">
      <Header title={"Skills"} />
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
            "https://static-00.iconduck.com/assets.00/mysql-icon-512x502-dn9lwwd1.png"
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
  );
}
