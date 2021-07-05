type TechStackListProps = {
  stackName: string;
  technologies: string[];
};

export const TechStackList = ({
  stackName,
  technologies,
}: TechStackListProps): JSX.Element => {
  return (
    <li>
      <h3 className="text-2xl font-bold">{stackName}</h3>
      <ul>
        {technologies.map((techName, index) => (
          <li key={index} className="text-medGray dark:text-lightGray">
            {techName}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default TechStackList;
