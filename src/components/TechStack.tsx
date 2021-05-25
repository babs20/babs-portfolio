import LogoScroll from './LogoScroll';
export const TechStack = (): JSX.Element => {
  return (
    <article className=''>
      <h1 className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500'>
        Languages, Frameworks, and Other Tech
      </h1>
      <h2 className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500'>
        I Have Used in Projects
      </h2>
      <div className='flex flex-col'>
        <LogoScroll />
        <span className='self-center mt-8'>
          Always Learning and Exploring More...
        </span>
      </div>
    </article>
  );
};

export default TechStack;
