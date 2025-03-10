import Movie from "../assets/Movie.png";
import Project1 from "../assets/project1.png";
import Project4 from "../assets/project4.png";
import Project5 from "../assets/Project5.png";
import Header from "./shared/Header";

export default function Project() {
  return (
    <div id="project" className="w-full">
      <Header title={"Projects"} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <div>
          <figure className="bg-red-500 p-8 rounded-xl flex items-center justify-center">
            <img
              className="h-64 rounded-xl transition-all hover:scale-[1.1] cursor-pointer object-cover"
              src={Project1}
              alt="Aniwatch"
            />
          </figure>
          <figcaption className="flex items-center justify-between py-4 gap-5">
            <div>
            <div className="flex items-center gap-2">
                <h3 className="font-medium">League of Legends API </h3>
                <span className="badge badge-outline badge-success opacity-50">
                  Running
                </span>
              </div>
              <p className="text-slate-400 font-thin text-justify">
                League of Legends API, this provide a hero information, skills ,
                and abilities...
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/CedricManuel02/LeagueOfLegendsAPI-Integration"
                className="bg-slate-600 hover:bg-white hover:text-slate-400
              p-2 rounded-md transition-all"
              >
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://league-of-legends-api-integration.vercel.app/"
                className="bg-slate-600 hover:bg-white hover:text-slate-400 p-2 rounded-md transition-all"
              >
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </figcaption>
        </div>
        <div>
          <figure className="bg-purple-500 p-8 rounded-xl flex items-center justify-center">
            <img
              className="h-64 rounded-xl transition-all hover:scale-[1.1] cursor-pointer  object-cover"
              src={Movie}
              alt="Cineflex"
            />
          </figure>
          <figcaption className="flex items-center justify-between py-4 gap-5">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">Netflix Clone</h3>
                <span className="badge badge-outline badge-success opacity-50">
                  Running
                </span>
              </div>
              <p className="text-slate-400 font-thin text-justify">
                Netflix website is not a pirated movie website, this website
                provide information for upcoming movies.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/CedricManuel02/Netflix-Clone"
                className="bg-slate-600 hover:bg-white hover:text-slate-400
              p-2 rounded-md transition-all"
              >
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://cm-netflix.vercel.app/"
                className="bg-slate-600 hover:bg-white hover:text-slate-400 p-2 rounded-md transition-all"
              >
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </figcaption>
        </div>
        <div>
          <figure className="bg-green-500 p-8 rounded-xl flex items-center justify-center">
            <img
              className="h-64 rounded-xl transition-all hover:scale-[1.1] cursor-pointer  object-cover"
              src={Project4}
              alt="Spotify Clone"
            />
          </figure>
          <figcaption className="flex items-center justify-between py-4 gap-5">
            <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">Spotify Clone</h3>
                  <span className="badge badge-outline badge-warning opacity-50">
                    In progress
                  </span>
                </div>
              <p className="text-slate-400 font-thin text-justify">
                I created a spotify clone and use the API provided of the
                Spotify, user can play and enjoy their music.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="bg-slate-600 hover:bg-white hover:text-slate-400
              p-2 rounded-md transition-all"
              >
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-slate-600 hover:bg-white hover:text-slate-400 p-2 rounded-md transition-all"
              >
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </figcaption>
        </div>
        <div>
          <figure className="bg-yellow-500 p-8 rounded-xl flex items-center justify-center">
            <img
              className="h-64 rounded-xl transition-all hover:scale-[1.1] cursor-pointer  object-cover"
              src={Project5}
              alt="Bella & Pepper Korean e-commerce website"
            />
          </figure>
          <figcaption className="flex items-center justify-between py-4 gap-5">
            <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">Bella & Pepper Korean E-Commerce</h3>
                  <span className="badge badge-outline badge-warning opacity-50">
                    In progress
                  </span>
                </div>
              <p className="text-slate-400 font-thin text-justify">
                I created a Korean e-commerece website
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="bg-slate-600 hover:bg-white hover:text-slate-400
              p-2 rounded-md transition-all"
              >
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-slate-600 hover:bg-white hover:text-slate-400 p-2 rounded-md transition-all"
              >
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}
