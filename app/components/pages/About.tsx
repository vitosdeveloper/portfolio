import React from 'react';
import Title from '../text/Title';
import Section from '../containers/Section';

type Props = { headerHeight: number };

const About = ({ headerHeight }: Props) => {
  return (
    <Section $headerHeight={headerHeight}>
      <Title>About</Title>
    </Section>
  );
};

export default About;
