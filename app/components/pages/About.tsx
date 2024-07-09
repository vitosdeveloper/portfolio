import dynamic from 'next/dynamic';
import Section from '../containers/Section';
import { memo } from 'react';
import AboutContent from '../contents/about/AboutContent';
// const AboutContent = dynamic(() => import('../contents/about/AboutContent'), {
//   ssr: false,
// });

const About = () => {
  return (
    <Section>
      <AboutContent />
    </Section>
  );
};

export default memo(About);
