export const AboutMe = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="font-bold text-heading">BRADY BLAIR</h1>
        <p className="dark:text-lightGray text-medGray">
          Hello! I am <strong>full stack developer</strong> with a passion for
          front end design. I love <strong>creatively</strong> solving problems
          and creating <strong>enjoyable</strong> user experiences!
        </p>
      </div>
      <div className="relative mt-6">
        <img
          src="/img/brady.png"
          alt="Brady Blair"
          className="absolute left-[38px] w-[156px] h-[156px]"
        />
        <svg
          width="237"
          height="156"
          viewBox="0 0 237 156"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          className="text-black dark:text-white"
        >
          <circle cx="78.5" cy="78" r="77.5" />
          <circle cx="158.5" cy="78" r="77.5" />
        </svg>
      </div>
    </div>
  );
};

export default AboutMe;
