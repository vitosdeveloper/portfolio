import Section from '../containers/Section';
import BackgroundOverlay from '../containers/BackgroundOverlay';
import HomeContent from '../contents/home/HomeContent';
import { memo } from 'react';

const Home = () => {
  return (
    <BackgroundOverlay id='#home'>
      <Section style={{ marginTop: '62.67px' }}>
        <HomeContent />
      </Section>
    </BackgroundOverlay>
  );
};

export default memo(Home);
