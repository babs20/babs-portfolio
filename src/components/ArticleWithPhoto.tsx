import { ReactNode } from 'react';

type ArticleProps = {
  photoSide: string;
  children: ReactNode;
};

export default function ArticleWithPhoto({
  photoSide,
  children,
}: ArticleProps): JSX.Element {
  return (
    <article className='flex flex-col items-center justify-center lg:flex-row'>
      {photoSide === 'right' && children}
      <div className='mb-16 lg:mr-32 lg:mb-0'>
        <svg
          width='405'
          height='396'
          viewBox='0 0 405 396'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M196.921 0.124808C237.463 -2.47918 266.566 36.277 300.225 59.0551C335.4 82.8597 381.717 96.7305 397.806 136.072C414.205 176.173 394.904 220.32 383.239 262.05C371.024 305.745 366.892 358.621 328.747 383.116C290.828 407.467 240.864 391.62 196.921 381.695C161.276 373.644 130.243 355.433 102.219 331.952C75.9732 309.96 57.5831 282.336 41.9572 251.849C23.2536 215.357 -10.1489 177.184 2.97969 138.331C16.1172 99.4507 69.4212 95.5336 102.818 71.7347C135.722 48.2865 156.618 2.71352 196.921 0.124808Z'
            fill='#F2E1E1'
          />
        </svg>
        <img
          src='./img/brady.jpeg'
          alt='Brady Blair in Bamboo'
          className='relative z-10 mt-[-350px] mask-image ml-4 w-[405px] h-[396px]'
        />
        <svg
          width='390'
          height='337'
          viewBox='0 0 390 337'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='relative z-10 mt-[-380px]'
        >
          <clipPath id='clip'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M192.831 5.67444C232.298 3.29826 278.731 -9.17929 308.024 16.3805C337.387 42.0015 317.096 90.0057 330.583 125.87C344.855 163.822 398.554 190.917 388.386 230.074C378.362 268.674 326.002 280.418 287.011 293.664C256.651 303.978 224.546 291.17 192.831 296.51C150.253 303.68 106.852 353.537 71.2125 330.002C35.9532 306.719 74.1744 249.29 61.7153 209.928C49.6679 171.867 -4.39594 148.461 1.27514 109.049C6.87342 70.1434 52.054 48.8613 87.6564 29.6482C119.868 12.2648 155.971 7.89369 192.831 5.67444Z'
              fill='white'
            />
          </clipPath>
        </svg>
      </div>
      {photoSide === 'left' && children}
    </article>
  );
}
