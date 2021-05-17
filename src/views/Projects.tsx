import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import Project from '../components/Project';

export default function Projects(): JSX.Element {
  return (
    <main className='h-full'>
      <TopNav />
      <section className='flex flex-col items-center px-16'>
        <div className='mt-16'>
          <div className='-mb-8'>
            <h1 className='text-4xl font-black text-primary'>Projects</h1>
            <span className='font-light text-primary'>
              A sample of some recent work.
            </span>
          </div>
          <div className='pb-16 divide-y divide-gray-300'>
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
