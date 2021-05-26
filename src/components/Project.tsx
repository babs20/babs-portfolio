interface Props {
  projectName: string;
  projectType: string;
  role: string;
  description: string;
  image: string;
  repo: string;
  children: React.ReactNode;
}

export const Project = ({
  projectName,
  projectType,
  description,
  role,
  image,
  repo,
  children,
}: Props): JSX.Element => {
  return (
    <article className='flex flex-col items-start justify-center py-8 sm:space-x-8 sm:flex-row text-primary'>
      <img
        src={image}
        alt={`A preview of ${projectName}.`}
        className='object-cover rounded-xl h-48 sm:h-[175px] w-full sm:w-[175px] mb-4 object-top'
      />
      <div>
        <div className='flex flex-col items-start mb-2 xs:flex-row xs:space-x-4 sm:items-center'>
          <a
            href={`https://github.com/babs20/${repo}`}
            target='_blank'
            rel='noreferrer'
          >
            <h1 className='text-3xl font-bold hover:underline'>
              {projectName}
            </h1>
          </a>
          <div className='flex space-x-4'>{children}</div>
        </div>
        <div className='mb-2 space-x-4 font-medium'>
          <span>{projectType}</span>
          <span>{role}</span>
        </div>
        <p className='prose text-primary'>{description}</p>
      </div>
    </article>
  );
};

export default Project;
