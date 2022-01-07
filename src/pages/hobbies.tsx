import React from 'react';
import Hero from '../components/Heros/Hero';
import ColumnHero from '../components/Heros/ColumnHero';
import PageTitle from '../components/PageTitle';
import Container from '../components/Layout/container';

export default function About() {
  return (
    <Container>
      <PageTitle title="Hobbies" />
      <Hero />
      <ColumnHero />
      <Hero />
    </Container>
  );
}
