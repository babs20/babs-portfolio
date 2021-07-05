import AboutMe from "../components/AboutMe";
import TechStackList from "../components/TechStackList";

const frontEnd: string[] = [
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Sass",
  "Tailwind CSS",
  "styled-components",
  "jQuery",
];

const backEnd: string[] = ["Node.js", "Express", "Rails"];
const languages: string[] = ["JavaScript", "TypeScript", "Ruby"];
const database: string[] = ["PostgreSQL"];

export const Home = (): JSX.Element => {
  return (
    <main className="py-20">
      <AboutMe />
      <section className="mt-20">
        <header className="flex items-center justify-between">
          <h2 className="font-bold text-heading">TECH STACK</h2>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black dark:text-white"
            aria-hidden="true"
            focusable="false"
          >
            <rect
              x="0.5"
              y="2.5"
              width="39"
              height="35"
              rx="3.5"
              stroke="currentColor"
            />
            <rect
              x="4.94434"
              y="7.30005"
              width="30.1111"
              height="25.4"
              rx="3.5"
              stroke="currentColor"
            />
            <path
              d="M8.56183 15.952V14.888L10.6818 13.56V13.528L8.56183 12.2V11.136L11.6498 13.136V13.952L8.56183 15.952ZM13.0547 17.512V16.632H16.8947V17.512H13.0547Z"
              fill="currentColor"
            />
          </svg>
        </header>
        <ul className="mt-2 space-y-6">
          <div className="flex justify-between">
            <TechStackList stackName="Front End" technologies={frontEnd} />
            <TechStackList stackName="Back End " technologies={backEnd} />
          </div>
          <div className="flex justify-between">
            <TechStackList stackName="Languages" technologies={languages} />
            <TechStackList stackName="Database" technologies={database} />
          </div>
        </ul>
        <span className="block mt-6 text-sm italic text-center text-medGray dark:text-lightGray">
          Always Learning and Exploring More...
        </span>
      </section>
    </main>
  );
};

export default Home;
