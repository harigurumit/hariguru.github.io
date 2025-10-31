
import React from 'react';

interface HeroProps {
  name: string;
  title: string;
  organization: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, organization }) => {
  return (
    <section id="hero" className="flex items-center min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <img
            src="https://picsum.photos/seed/researcher/200/200"
            alt="Professional headshot"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-4 ring-secondary"
          />
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl lg:text-6xl">
              {name}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-accent font-semibold">
              {title}
            </p>
            <p className="mt-2 text-lg text-text-secondary">
              {organization}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
