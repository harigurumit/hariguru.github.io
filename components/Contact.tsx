
import React from 'react';
import Section from './Section';

interface ContactProps {
  email: string;
  socials: {
    github: string;
    linkedin: string;
    googleScholar: string;
  };
}

const Contact: React.FC<ContactProps> = ({ email, socials }) => {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="text-center">
        <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
          I'm always interested in discussing new research, ideas, or potential collaborations. Please feel free to reach out.
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-500 transition-colors text-lg"
        >
          {email}
        </a>
      </div>
    </Section>
  );
};

export default Contact;
