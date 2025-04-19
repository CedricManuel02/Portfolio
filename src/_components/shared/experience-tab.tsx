import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

type TLanguage = {
  name: string;
  image: string;
}

type TExperience = {
  start: boolean;
  right: boolean;
  title: string;
  year: string;
  description: string;
  languages: TLanguage[];
}

export default function ExperienceTab({ start, right, title, year, description, languages }: TExperience) {
  return (
    <li>
      {start ? <hr /> : null}
      <div className="timeline-middle">
        <CheckCircle2/>
      </div>
      <div className={right ? "timeline-start  md:text-end mb-10" : "timeline-end md:timeline-start mb-10"}>
        <time className="font-mono italic">{year}</time>
        <div className="text-lg text-purple-300 py-2">{title}</div>
        <p className="text-slate-400 text-base font-normal">{description}</p>
        <h3 className="py-4 text-purple-300">Languages</h3>
        <div className={`flex flex-wrap gap-5 font-thin ${right ? "justify-start sm:justify-start md:justify-end lg:justify-end" : "justify-start"}`}>
          {languages.map((language: TLanguage, index: number) => (
            <div key={index} className="flex items-center gap-2 whitespace-nowrap">
              <Image className="w-5" width={100} height={100} src={language.image} alt={language.name} />
              <p>{language.name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </li>
  );
}
