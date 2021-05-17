import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import ArticlePhotoLeft from '../components/ArticlePhotoLeft';
import ArticlePhotoRight from '../components/ArticlePhotoRight';

export default function Home(): JSX.Element {
  return (
    <main className='h-full'>
      <TopNav></TopNav>
      {/* <svg
        viewBox='0 0 1440 362'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute top-0 w-full -z-10'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 86L34 101C69 115 137 144 206 194C274 245 343 317 411 346C480 374 549 360 617 338C686 317 754 288 823 281C891 274 960 288 1029 310C1097 331 1166 360 1234 360C1303 360 1371 331 1406 317L1440 302V0H1406C1371 0 1303 0 1234 0C1166 0 1097 0 1029 0C960 0 891 0 823 0C754 0 686 0 617 0C549 0 480 0 411 0C343 0 274 0 206 0C137 0 69 0 34 0H0V86Z'
          fill='#6B7385'
        />
      </svg> */}
      <section className='py-16'>
        <ArticlePhotoLeft />
        <ArticlePhotoRight />
      </section>
      <Footer></Footer>
    </main>
  );
}
