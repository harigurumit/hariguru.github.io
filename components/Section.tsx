
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl mb-8 md:mb-12 border-l-4 border-accent pl-4">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
