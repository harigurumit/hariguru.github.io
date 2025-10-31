
import React from 'react';
import { Project } from '../types';
import Section from './Section';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-secondary/50 p-6 rounded-lg shadow-lg flex flex-col hover:ring-2 hover:ring-accent/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-text-main mb-2">{project.title}</h3>
            <p className="text-text-secondary flex-grow mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-700 text-xs font-mono px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:underline self-start"
            >
              View on GitHub &rarr;
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
