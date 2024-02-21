import Section from '../containers/Section';
import AboutContent from '../contents/about/AboutContent';

const About = () => {
  return (
    <Section id='#about'>
      <AboutContent renderAgain={typeof window !== 'undefined'} />
    </Section>
  );
};

export default About;
