import Section from '../containers/Section';
import { memo } from 'react';
import AboutContent from '../contents/about/AboutContent';

const About = () => {
  return (
    <Section id='#about'>
      <AboutContent />
    </Section>
  );
};

export default memo(About);
