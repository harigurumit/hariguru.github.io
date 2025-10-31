
import React from 'react';
import { PROFILE_DATA } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero 
          name={PROFILE_DATA.name} 
          title={PROFILE_DATA.title}
          organization={PROFILE_DATA.organization}
        />
        <About bio={PROFILE_DATA.bio} />
        <Research interests={PROFILE_DATA.researchInterests} />
        <Publications publications={PROFILE_DATA.publications} />
        <Projects projects={PROFILE_DATA.projects} />
        <Contact 
          email={PROFILE_DATA.contact.email} 
          socials={PROFILE_DATA.socials}
        />
      </main>
      <Footer name={PROFILE_DATA.name} socials={PROFILE_DATA.socials} />
    </div>
  );
};

export default App;
