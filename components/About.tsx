
import React from 'react';
import Section from './Section';

interface AboutProps {
  bio: string[];
}

const About: React.FC<AboutProps> = ({ bio }) => {
  return (
    <Section id="about" title="About Me">
      <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
        {bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
};

export default About;
