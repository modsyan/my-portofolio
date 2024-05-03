// Extracurriculars.tsx
import React from 'react';
import { ExtracurricularData } from '../types';

interface Props {
  data: ExtracurricularData[];
}

const Extracurriculars: React.FC<Props> = ({ data }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-2">Extracurriculars</h2>
      {data.map((activity, index) => (
        <div key={index} className="mb-4">
          <h3>{activity.activity}</h3>
          <p>{activity.role}</p>
          <p>{activity.startDate} - {activity.endDate}</p>
          <p>{activity.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Extracurriculars;
