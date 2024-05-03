import React from 'react';
import { SkillData } from '../types';

interface Props {
  data: SkillData;
}

const Skills: React.FC<Props> = ({ data }) => {
  const { technical, frameworks, databases, ci_cd, other, soft } = data;

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-2">Skills</h2>
      <div className="mb-4">
        <h3 className="font-bold mb-1">Technical Skills</h3>
        <ul>
          {technical.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-1">Frameworks & Libraries</h3>
        <ul>
          {frameworks.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-1">Databases</h3>
        <ul>
          {databases.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-1">CI/CD</h3>
        <ul>
          {ci_cd.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-1">Other</h3>
        <ul>
          {other.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-1">Soft Skills</h3>
        <ul>
          {soft.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;