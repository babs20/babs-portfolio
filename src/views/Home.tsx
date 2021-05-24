import OpeningArticle from '../components/OpeningArticle';
import Projects from './Projects';

export const Home = (): JSX.Element => {
  return (
    <section className=''>
      <OpeningArticle />
      <Projects />
    </section>
  );
};

export default Home;
