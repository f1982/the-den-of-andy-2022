import React from 'react';
import Hero from '../components/Heros/Hero';
import ColumnHero from '../components/Heros/ColumnHero';

export default function About() {
  return (
    <div>
      <div className="container px-20 mx-auto"><h1>Hobbies</h1></div>
      <Hero />
      <ColumnHero />
      <Hero />
    </div>
  );
}
