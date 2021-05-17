import ArticlePhotoLeft from '../components/ArticlePhotoLeft';
import ArticlePhotoRight from '../components/ArticlePhotoRight';

export default function Home(): JSX.Element {
  return (
    <section className='py-16'>
      <ArticlePhotoLeft />
      <ArticlePhotoRight />
    </section>
  );
}
