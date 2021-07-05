import AboutMe from "../components/AboutMe";
import TechStackList from "../components/TechStackList";
import Project from "../components/Project";
import Section from "../containers/Section";
import ComputerSVG from "../svg/ComputerSVG";
import FolderSVG from "../svg/FolderSVG";

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
      <Section svg={<ComputerSVG />} title="TECH STACK">
        <ul className="mt-3 space-y-6">
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
      </Section>
      <Section svg={<FolderSVG />} title="PROJECTS">
        <div className="mt-3 space-y-6">
          <Project
            projectName={"Journey"}
            projectType={"Team Project"}
            role={"Front End / UI Design"}
            description={
              "Journey is a group travel planning app that allows users to plan itineraries in real time with members of their group. Users can also browse and search other members' public itineraries for inspiration."
            }
            repo={"journey"}
            site={"https://journey-lhl.netlify.app/"}
          ></Project>
          <Project
            projectName={"Scheduler"}
            projectType={"Solo Project"}
            role={"Front End (Application & UI State and UI Testing)"}
            description={
              "Scheduler is a SPA (Single-Page Application) used to schedule up-to-date, and organized appointments for organizations. Using real-time updating via a Websocket connection you are able to see what your colleagues are doing in real-time!"
            }
            repo={"scheduler"}
          ></Project>
          <Project
            projectName={"The Planets"}
            projectType={"Solo Project"}
            role={"Front End Developer"}
            description={
              "An 8-page fact site for all the planets in our solar system. My goal with this project was to learn Next.js while also expanding upon my layout knowledge, mobile-first workflow, and HTML accessibility. Explore the responsive designs on all device sizes."
            }
            repo={"planets-fact-site"}
          ></Project>
          <Project
            projectName={"Blogr"}
            projectType={"Solo Project"}
            role={"Front End Developer"}
            description={
              "Using a design in Figma provided by Frontend Mentor, I recreated the design of blog publishing platform's landing page. I used React, TypeScript, and Styled Components."
            }
            repo={"blogr"}
          ></Project>
          <Project
            projectName={"Jungle"}
            projectType={"Solo Project"}
            role={"Full Stack Developer"}
            description={
              "Jungle is a ecommerce website built with Ruby on Rails. It has an admin panel and ability for user's to leave reviews on products."
            }
            repo={"jungle-rails"}
          ></Project>
        </div>
      </Section>
    </main>
  );
};

export default Home;
