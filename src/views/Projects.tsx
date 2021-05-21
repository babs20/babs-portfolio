import Project from '../components/Project';

export default function Projects(): JSX.Element {
  return (
    <section className='flex flex-col items-center px-8 sm:px-16'>
      <div>
        <div>
          <h1 className='text-4xl font-black text-primary'>Projects</h1>
          <span className='font-light text-primary'>
            A sample of some recent work.
          </span>
        </div>
        <div className='pb-16 divide-y divide-gray-300'>
          <Project
            projectName={'Journey'}
            projectType={'Team Project'}
            role={'Front End and UI / UX Design'}
            description={
              "Journey is a group travel planning app that allows users to plan itineraries in real time with members of their group. Users can also browse and search other members' public itineraries for inspiration."
            }
            image={'./img/journey-square.jpg'}
          />
          <Project
            projectName={'Scheduler'}
            projectType={'Solo Project'}
            role={'Front End (Application & UI State and UI Testing)'}
            description={
              'Scheduler is a SPA (Single-Page Application) used to schedule up-to-date, and organized appointments for organizations. Using real-time updating via a Websocket connection you are able to see what your colleagues are doing in real-time!'
            }
            image={'./img/scheduler-square.jpg'}
          />
          <Project
            projectName={'Jungle'}
            projectType={'Solo Project'}
            role={'Full Stack Developer'}
            description={
              "Jungle is a ecommerce website built with Ruby on Rails. It has an admin panel and ability for user's to leave reviews on products."
            }
            image={'./img/jungle-square.jpg'}
          />
        </div>
      </div>
    </section>
  );
}
