import dynamic from 'next/dynamic';
import Section from '../containers/Section';
import { memo } from 'react';
const AboutContent = dynamic(() => import('../contents/about/AboutContent'), {
  ssr: false,
});
const About = ({ isDark }: { isDark: boolean }) => {
  return (
    <Section>
      <AboutContent isDark={isDark} />
    </Section>
  );
};

export default memo(About);
