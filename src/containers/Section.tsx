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
    <section className="mt-20">
      <header className="flex items-center justify-between">
        <h2 className="font-bold text-heading">{title}</h2>
        {svg}
      </header>
      {children}
    </section>
  );
};
export default Section;
