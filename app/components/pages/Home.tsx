import React from 'react';
import Section from '../containers/Section';
import HomeContainer from '../containers/HomeContainer';

type Props = { headerHeight: number };

const Home = ({ headerHeight }: Props) => {
  return (
    <HomeContainer>
      <Section headerHeight={headerHeight}>
        <h1>asfklas</h1>
      </Section>
    </HomeContainer>
  );
};

export default Home;
