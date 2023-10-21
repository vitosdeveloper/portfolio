'use client';
import { useState } from 'react';
import Header from './components/partials/Header/Header';
import { ISection } from './types/Section';
import Home from './components/pages/Home';
import Section from './components/containers/Section';

export default function App() {
  const [section, setSection] = useState<ISection>('#home');
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  return (
    <>
      <Header
        setSection={setSection}
        section={section}
        setHeaderHeight={setHeaderHeight}
      />
      <Home headerHeight={headerHeight} />
      <Section headerHeight={headerHeight}>adgas</Section>
    </>
  );
}
