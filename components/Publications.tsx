
import React from 'react';
import { Publication } from '../types';
import Section from './Section';

interface PublicationsProps {
  publications: Publication[];
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <Section id="publications" title="Publications">
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <div key={index} className="bg-secondary/50 p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-text-main mb-1">{pub.title}</h3>
            <p className="text-text-secondary italic text-sm mb-2">{pub.authors.join(', ')}</p>
            <p className="text-text-secondary mb-3">
              <span className="font-medium">{pub.venue}</span>, {pub.year}
            </p>
            <div className="flex items-center space-x-4">
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
                [PDF]
              </a>
              {pub.doi && (
                 <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
                   [DOI]
                 </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
