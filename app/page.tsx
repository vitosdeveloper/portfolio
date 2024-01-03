'use client';
import { useState } from 'react';
import Header from './components/partials/Header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import { ISection } from './types/Section';
import useSetMenuActiveSection from './custom-hooks/useSetMenuActiveSection';

export default function App() {
  const [section, setSection] = useState<ISection>('#home');
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  useSetMenuActiveSection(setSection, headerHeight);

  return (
    <>
      <Header
        section={section}
        setSection={setSection}
        headerHeight={headerHeight}
        setHeaderHeight={setHeaderHeight}
      />
      <Home setSection={setSection} headerHeight={headerHeight} />
      <About setSection={setSection} headerHeight={headerHeight} />
      <Services setSection={setSection} headerHeight={headerHeight} />
    </>
  );
}
