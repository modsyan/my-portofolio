// WorkHistory.tsx
import React from 'react';
import { WorkHistoryData } from '../types';

interface Props {
  data: WorkHistoryData[];
}

const WorkHistory: React.FC<Props> = ({ data }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-2">Work History</h2>
      {data.map((work, index) => (
        <div key={index} className="mb-4">
          <p>{work.company}, {work.location}</p>
          <p>{work.position}</p>
          <p>{work.startDate} - {work.endDate}</p>
          <ul>
            {work.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default WorkHistory;
