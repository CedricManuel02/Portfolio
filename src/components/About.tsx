import Header from "./shared/Header";
import Socials from "./shared/Socials";
export default function About() {
  return (
    <div
      id="about"
      className="flex items-center py-10 justify-between gap-5 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row"
    >
      <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 2xl:w-8/12">
        <Header title={"About"} />
        <p className="text-slate-400 text-justify">
          Hi, my name is Cedric Gio Manuel, and I'm a{" "}
          {new Date().getFullYear() - 2002} years old individual with a keen
          interest in technology and innovation. I hold a Bachelor of Science
          degree in Information Technology from Cavite State University Bacoor
          Campus. My academic journey has been an exciting exploration of the
          vast world of IT, and I'm eager to apply my knowledge to real-world
          projects.
        </p>
        <Socials />
      </div>
      <div className="mockup-code w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 2xl:w-8/12">
        <pre data-prefix="$">
          <code>npm i skills knowledge experience</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
}
