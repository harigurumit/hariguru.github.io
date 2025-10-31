
import React from 'react';
import Section from './Section';

interface ResearchProps {
  interests: string[];
}

const Research: React.FC<ResearchProps> = ({ interests }) => {
  return (
    <Section id="research" title="Research Interests">
      <div className="flex flex-wrap gap-3">
        {interests.map((interest, index) => (
          <span
            key={index}
            className="bg-secondary text-text-secondary text-sm font-medium px-4 py-2 rounded-full"
          >
            {interest}
          </span>
        ))}
      </div>
    </Section>
  );
};

export default Research;
