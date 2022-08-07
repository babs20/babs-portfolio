import AboutMe from '../components/AboutMe';
import TechStackList from '../components/TechStackList';
import Project from '../components/Project';
import Section from '../containers/Section';
import ComputerSVG from '../svg/ComputerSVG';
import FolderSVG from '../svg/FolderSVG';

const frontEnd: string[] = [
	'HTML',
	'CSS',
	'React',
	'Next.js',
	'Sass',
	'Tailwind CSS',
	'styled-components',
	'jQuery',
];
const backEnd = ['Node.js', 'Express', 'Rails'];
const languages = ['JavaScript', 'TypeScript', 'Ruby'];
const database = ['PostgreSQL'];

export const Home = (): JSX.Element => {
	return (
		<main className="py-20 xl:flex xl:space-x-20 xl:justify-between">
			<div className="xl:space-y-20 xl:w-[1024px]">
				<AboutMe />
				<Section svg={<FolderSVG />} title="PROJECTS">
					<div className="mt-3 space-y-6 lg:grid-cols-2 lg:grid lg:gap-6 lg:space-y-0 xl:block xl:space-y-6">
						<Project
							projectName={'Journey'}
							projectType={'Team Project'}
							role={'Front End / UI Design'}
							description={
								"Journey is a group travel planning app that allows users to plan itineraries in real time with members of their group. Users can also browse and search other members' public itineraries for inspiration."
							}
							repo={'journey'}
							site={'https://journey-lhl.netlify.app/'}></Project>
						<Project
							projectName={'Scheduler'}
							projectType={'Solo Project'}
							role={
								'Front End (Application & UI State and UI Testing)'
							}
							description={
								'Scheduler is a SPA (Single-Page Application) used to schedule up-to-date, and organized appointments for organizations. Using real-time updating via a Websocket connection you are able to see what your colleagues are doing in real-time!'
							}
							repo={'scheduler'}
							site={
								'https://scheduler-babs.netlify.app/'
							}></Project>
						<Project
							projectName={'The Planets'}
							projectType={'Solo Project'}
							role={'Front End Developer'}
							description={
								'An 8-page fact site for all the planets in our solar system. My goal with this project was to learn Next.js while also expanding upon my layout knowledge, mobile-first workflow, and HTML accessibility. Explore the responsive designs on all device sizes.'
							}
							repo={'planets-fact-site'}
							site={
								'https://theplanets-babs.netlify.app/'
							}></Project>
						<Project
							projectName={'Blogr'}
							projectType={'Solo Project'}
							role={'Front End Developer'}
							description={
								"Using a design in Figma provided by Frontend Mentor, I recreated the design of blog publishing platform's landing page. I used React, TypeScript, and Styled Components."
							}
							repo={'blogr'}
							site={'https://blogr-babs.netlify.app/'}></Project>
						<Project
							projectName={'Jungle'}
							projectType={'Solo Project'}
							role={'Full Stack Developer'}
							description={
								"Jungle is a ecommerce website built with Ruby on Rails. It has an admin panel and ability for user's to leave reviews on products."
							}
							repo={'jungle-rails'}></Project>
					</div>
				</Section>
				<Section svg={<ComputerSVG />} title="TECHNICAL SKILLS">
					<ul className="grid grid-cols-2 mt-3 gap-y-6 sm:flex sm:justify-between">
						<TechStackList
							stackName="Front End"
							technologies={frontEnd}
						/>
						<TechStackList
							stackName="Back End "
							technologies={backEnd}
						/>
						<TechStackList
							stackName="Languages"
							technologies={languages}
						/>
						<TechStackList
							stackName="Database"
							technologies={database}
						/>
					</ul>
					<span className="block mt-6 text-sm italic text-center text-medGray dark:text-lightGray sm:inline-block">
						Always Learning and Exploring More...
					</span>
				</Section>
			</div>
		</main>
	);
};

export default Home;
