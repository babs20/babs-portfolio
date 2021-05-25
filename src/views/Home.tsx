import OpeningArticle from '../components/OpeningArticle';
import TechStack from '../components/TechStack';

export const Home = (): JSX.Element => {
  return (
    <section className='mx-32'>
      <OpeningArticle />
      <TechStack />
    </section>
  );
};

export default Home;
