'use client';
import Header from './components/partials/Header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Skills from './components/pages/Skills';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import ProgressBar from './components/progress-bar/ProgressBar';

function App(props: any) {
  return (
    <>
      <Header />
      <Home />
      <About />
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
