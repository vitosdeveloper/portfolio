'use client';
import { useState } from 'react';
import Header from './components/partials/Header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Skills from './components/pages/Skills';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import ProgressBar from './components/progress-bar/ProgressBar';

function App() {
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  return (
    <>
      <Header headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} />
      <Home headerHeight={headerHeight} />
      <About headerHeight={headerHeight} />
      <Services headerHeight={headerHeight} />
      <Skills headerHeight={headerHeight} />
      <Work headerHeight={headerHeight} />
      <Contact headerHeight={headerHeight} />
      <Footer />
      <ProgressBar />
    </>
  );
}

export default App;
