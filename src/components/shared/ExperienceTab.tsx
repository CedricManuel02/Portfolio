export default function ExperienceTab({start, right, title, year, description, languages}: any) {
  return (
    <li>
      {start ? <hr /> : null}
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={
          right ? "timeline-start md:text-end mb-10" : "timeline-end mb-10"
        }
      >
        <time className="font-mono italic">{year}</time>
        <div className="text-lg text-purple-300 py-2">{title}</div>
        {description}
        <h3 className="py-4 text-purple-300">Languages</h3>
        <div className={`flex flex-wrap gap-5 font-thin ${right ? "justify-start sm:justify-start md:justify-end lg:justify-end" : "justify-start"}`}>
          {languages.map((language : any, index : number) => (
            <div key={index} className="flex items-center gap-2 whitespace-nowrap">
            <img
              className="w-5"
              src={language.image}
              alt={language.name}
            />
            <p>{language.name}</p>
          </div>
          ))}
        </div>
      </div>
      <hr />
    </li>
  );
}
