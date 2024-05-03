// CareerSummary.tsx
import React from 'react';

interface Props {
  summary: string;
}

const CareerSummary: React.FC<Props> = ({ summary }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-2">Career Summary</h2>
      <p>{summary}</p>
    </section>
  );
}

export default CareerSummary;
