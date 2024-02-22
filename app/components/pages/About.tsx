import dynamic from 'next/dynamic';
import Section from '../containers/Section';
import { memo } from 'react';
const AboutContent = dynamic(() => import('../contents/about/AboutContent'), {
  ssr: false,
});
const About = () => {
  return (
    <Section id='#about'>
      <AboutContent />
    </Section>
  );
};

export default memo(About);
