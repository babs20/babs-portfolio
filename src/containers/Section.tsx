import React from "react";

type SectionProps = {
  children: React.ReactNode;
  svg: React.ReactNode;
  title: string;
};

export const Section = ({
  children,
  svg,
  title,
}: SectionProps): JSX.Element => {
  return (
    <section className="mt-20 xl:mt-0">
      <header className="flex items-center justify-between space-x-4 sm:justify-start">
        <h2 className="font-bold text-heading">{title}</h2>
        {svg}
      </header>
      {children}
    </section>
  );
};
export default Section;
