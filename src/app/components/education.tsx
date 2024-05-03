// Education.tsx
import React from 'react';
import { EducationData } from '../types';

interface Props {
  data: EducationData[];
}

const Education: React.FC<Props> = ({ data }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-2">Education</h2>
      {data.map((education, index) => (
        <div key={index} className="mb-4">
          <p>{education.institution}, {education.location}</p>
          <p>{education.degree}, Major in {education.major}</p>
          <p>{education.startDate} - {education.endDate}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
