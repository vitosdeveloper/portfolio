'use client';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Header from './components/partials/Header/Header';
import Services from './components/pages/Services';
import Skills from './components/pages/Skills';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import ProgressBar from './components/progress-bar/ProgressBar';
import dynamic from 'next/dynamic';
const DarkModeForm = dynamic(
  () => import('./components/darkMode/DarkModeForm'),
  {
    ssr: false,
  }
);

function App(props: any) {
  return (
    <>
      <Header />
      <Home />
      <DarkModeForm>
        <About />
      </DarkModeForm>
      <Services />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <ProgressBar />
    </>
  );
}

export default App;
