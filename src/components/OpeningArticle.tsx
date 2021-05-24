import { Link } from 'react-router-dom';
export const OpeningArticle = (): JSX.Element => {
  return (
    <article className='flex items-start justify-center space-x-2'>
      <div className='flex flex-col w-[500px] space-y-4'>
        <h1 className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500'>
          Hello, I am Brady Blair.
        </h1>
        <div className='space-y-4 text-lg'>
          <p>
            A <b className='font-medium'>Full Stack Web Developer</b> with a
            focus on{' '}
            <b className='font-medium'>Front End Design / Frameworks</b>. I am
            currently located in the Baltimore-Washington Metropolitan Area.
          </p>
          <p>
            Some of the technologies I enjoy and have experience working with
            are:{' '}
            <b className='font-medium'>
              React, TypeScript, Express.js, PostgresSQL, Ruby on Rails, and
              TailwindCSS.
            </b>
          </p>
        </div>
        <Link to='/projects' className='mt-4 text-lg italic underline'>
          Check Out Some of My Recent Projects!
        </Link>
      </div>
      <div className='relative'>
        <svg
          width='396'
          height='364'
          viewBox='0 0 396 364'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M223.647 362.85C188.282 369.176 155.805 347.921 122.117 335.413C88.0682 322.77 48.4138 318.277 26.2334 289.551C3.39888 259.977 -3.82099 219.03 4.09467 182.558C11.4612 148.617 43.6884 128.457 66.8231 102.531C88.5017 78.2356 105.688 50.2091 134.961 35.8979C168.984 19.2644 210.511 -1.7849 244.028 15.8982C277.835 33.7347 272.543 83.7881 290.052 117.723C304.951 146.6 334.582 167.223 338.723 199.434C343.289 234.948 334.253 271.876 313.636 301.153C292.184 331.617 260.373 356.28 223.647 362.85Z'
            fill='#FFEEEE'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M245.066 20.1999C272.32 29.0838 290.027 52.2647 314.156 67.7197C340.495 84.5897 380.539 85.9718 392.692 114.755C404.838 143.522 380.255 173.66 371.545 203.642C362.45 234.95 366.697 274.259 340.643 293.918C314.554 313.603 277.639 296.134 245.066 299.075C207.687 302.45 166.189 334.7 136.041 312.39C105.825 290.03 124.716 240.915 116.863 204.201C110.167 172.898 90.8634 145.376 93.4934 113.476C96.6373 75.3426 100.351 28.746 132.984 8.66428C165.756 -11.5031 208.467 8.27024 245.066 20.1999Z'
            fill='url(#paint0_linear)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M245.066 20.1999C272.32 29.0838 290.027 52.2647 314.156 67.7197C340.495 84.5897 380.539 85.9718 392.692 114.755C404.838 143.522 380.255 173.66 371.545 203.642C362.45 234.95 366.697 274.259 340.643 293.918C314.554 313.603 277.639 296.134 245.066 299.075C207.687 302.45 166.189 334.7 136.041 312.39C105.825 290.03 124.716 240.915 116.863 204.201C110.167 172.898 90.8634 145.376 93.4934 113.476C96.6373 75.3426 100.351 28.746 132.984 8.66428C165.756 -11.5031 208.467 8.27024 245.066 20.1999Z'
            fill='#D6D8DB'
          />
        </svg>
        <img
          src='./img/brady-2.png'
          alt=''
          className='w-[281px] absolute z-10 top-[40px] left-[57px]'
        />
      </div>
    </article>
  );
};

export default OpeningArticle;