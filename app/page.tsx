'use client';
import Skills from './components/pages/Skills';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import ProgressBar from './components/progress-bar/ProgressBar';
import dynamic from 'next/dynamic';
const I18nextProvider = dynamic(
  () => import('react-i18next').then((r) => r.I18nextProvider),
  { ssr: false }
);
import i18n from '@/i18n';
import Langs from './components/partials/Header/Langs';
import ThemeButtonComponent from './components/darkMode/ThemeButtonComponent';
import Header from './components/partials/Header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <ProgressBar />
      <Langs />
      <ThemeButtonComponent />
    </I18nextProvider>
  );
}

export default App;
