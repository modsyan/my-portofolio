// Projects.tsx
import React from 'react';
import { ProjectData } from '../types';

interface Props {
  data: ProjectData[];
}

const Projects: React.FC<Props> = ({ data }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-2">Projects</h2>
      <ul>
        {data.map((project, index) => (
          <li key={index} className="mb-4">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies.join(', ')}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
