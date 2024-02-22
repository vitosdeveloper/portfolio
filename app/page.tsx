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
import DarkMode from './components/darkMode/DarkMode';
import styled from 'styled-components';

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
      {/* <DarkMode /> */}
    </>
  );
}

export default App;

const StyledStyle = styled.style<{ $dark: boolean }>`
  :root {
    ${({ $dark }) =>
      $dark
        ? `:root {
              --color-background: #0d012c;
              --color-white: #fff;
              --color-dark: #161818;
              --link-hover: #0056b3;
              --color-special-color: #eff30e;
              --color-info-light: #c7cbd8;
              --color-button: linear-gradient(to left, #17c0e9, #c96ddd, #f45162);
              --color-button-hover: #59c378;
              --color-card2: #14143a;
              --color-footer-background: rgb(20, 4, 43);
              --color-skill-background: rgb(23, 32, 61);
            }`
        : `:root {
              --color-background: rgb(232, 215, 255);
                  --color-white: #494a4d;
                  --color-dark: #d2d5df;
                  --link-hover: #b300b3;
                  --color-special-color: #0e79f3;
                  --color-info-light: #434857;
                  --color-button: linear-gradient(to left, #9d51f4, #6d6fdd, #f45182);
                  --color-button-hover: #0f65c985;
                  --color-card2: #0e79f328;
                  --color-footer-background: rgb(191, 159, 236);
                  --color-skill-background: #6d6fdd;
                  `}
  }
`;
