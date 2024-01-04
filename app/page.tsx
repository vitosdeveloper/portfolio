'use client';
import { useState } from 'react';
import Header from './components/partials/Header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import { ISection } from './types/Section';
import useSetMenuActiveSection from './custom-hooks/useSetMenuActiveSection';
import Skills from './components/pages/Skills';
import Work from './components/pages/Work';

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
      <Home headerHeight={headerHeight} />
      <About headerHeight={headerHeight} />
      <Services headerHeight={headerHeight} />
      <Skills headerHeight={headerHeight} />
      <Work headerHeight={headerHeight} />
    </>
  );
}
