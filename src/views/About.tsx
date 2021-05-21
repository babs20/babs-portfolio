import ArticleWithPhoto from '../components/ArticleWithPhoto';

export default function About(): JSX.Element {
  return (
    <section className='min-h-full px-8 py-8'>
      <ArticleWithPhoto photoSide='left'>
        <div className='lg:w-[40rem] mx-auto lg:m-0'>
          <h2 className='mb-3 text-3xl font-bold text-[#6B7385] ml-4'>
            About Me
          </h2>
          <div className='text-[#6B7385] bg-white p-8 rounded-3xl leading-6 shadow-full prose'>
            <p className='indent'>
              Hard-working and committed to making things work. No matter the
              challenge, I have a passion to break it down to its roots and
              solve it head-on. I have been involved in live broadcast
              environments since I was a teenager, working in video, audio, and
              lighting. I love to use technology to create an immersive and
              engaging environment.
            </p>
            <p className='indent'>
              From 2018-2020, I was involved in a startup for LED Displays and
              became the Lead Engineer and Technician for programming and
              solving any technical issues related to the displays. I had my
              hand in almost every aspect of the company and lead the technology
              directory for the future.
            </p>
            <p className='indent'>
              As the company grew and became larger, I found myself invested in
              solving our planning and storage solutions by taking advantage of
              basic programming patterns. This initial interest grew into a
              curiosity, so I began studying programming languages in my
              free-time.
            </p>
            <p className='indent'>
              In 2020, I decided to leave my position in order to pursue a
              full-time education in full-stack web development. After
              graduating from Lighthouse Labs in March, I am looking forward to
              contributing and working in the web development ecosystem.
            </p>
          </div>
        </div>
      </ArticleWithPhoto>
    </section>
  );
}
