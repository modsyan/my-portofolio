// Header.tsx
import React from 'react';
import { HeaderData } from '../types';

interface Props {
  data: HeaderData;
}

const Header: React.FC<Props> = ({ data }) => {
  const { name, title, email, phone, linkedin, github, location } = data;

  return (
    <header className="text-center my-8">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-lg">{title}</p>
      <p className="mt-2"><a href={`mailto:${email}`} className="text-blue-500">{email}</a> | <a href={`tel:${phone}`} className="text-blue-500">{phone}</a></p>
      <p className="mt-2"><a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a> | <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a></p>
      <p className="mt-2">{location}</p>
    </header>
  );
}

export default Header;
