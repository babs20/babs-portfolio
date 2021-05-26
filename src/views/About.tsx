import ArticleWithPhoto from '../components/ArticleWithPhoto';

export default function About(): JSX.Element {
  return (
    <section className='min-h-full px-8 py-8'>
      <ArticleWithPhoto photoSide='left'>
        <div className='lg:w-[40rem] mx-auto lg:m-0'>
          <h1 className='mb-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500'>
            About Me
          </h1>
          <div className='text-[#6B7385] rounded-3xl leading-6 prose'>
            <p className='prose text-[#6B7385]'>
              Hard-working and committed to making things work. No matter the
              challenge, I have a passion to break it down to its roots and
              solve it head-on. I have been involved in live broadcast
              environments since I was a teenager, working in video, audio, and
              lighting. I love to use technology to create an immersive and
              engaging environment.
            </p>
            <p className='prose text-[#6B7385]'>
              From 2018-2020, I was involved in a startup for LED Displays and
              became the Lead Engineer and Technician for programming and
              solving any technical issues related to the displays. I had my
              hand in almost every aspect of the company and lead the technology
              directory for the future.
            </p>
            <p className='prose text-[#6B7385]'>
              As the company grew and became larger, I found myself invested in
              solving our planning and storage solutions by taking advantage of
              basic programming patterns. This initial interest grew into a
              curiosity, so I began studying programming languages in my
              free-time.
            </p>
            <p className='prose text-[#6B7385]'>
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
