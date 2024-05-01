import Section from '../containers/Section';
import HomeContainer from '../containers/HomeContainer';
import styled from 'styled-components';
import BackgroundOverlay from '../containers/BackgroundOverlay';
import Image, { StaticImageData } from 'next/image';
import HomeContent from '../contents/home/HomeContent';

const Home = () => {
  return (
    <BackgroundOverlay id='#home'>
      <Section style={{ marginTop: '62.67px' }}>
        <HomeContent />
      </Section>
    </BackgroundOverlay>
  );
};

export default Home;

export const ImageContainer = styled.div`
  max-height: 744px;
  flex: 1;
  min-width: 240px;
`;

export const StyledImage = ({
  $left = false,
  src,
  alt,
}: {
  $left?: boolean;
  src: StaticImageData;
  alt: string;
}) => {
  return (
    <Image
      style={{
        borderRadius: '8px',
        maxWidth: '744px',
        width: '100%',
        height: 'auto',
        flex: 1,
        float: $left ? 'inline-start' : 'inline-end',
      }}
      src={src}
      alt={alt}
      loading='eager'
      priority
    />
  );
};

export const StyledHomeTitle = styled.h3<{ $gradientprop?: boolean }>`
  font-family: var(--font-jost);
  font-size: 3rem;
  -webkit-text-fill-color: transparent;
  background: ${({ $gradientprop }) =>
    $gradientprop ? 'var(--color-button)' : 'var(--color-info-light)'};
  -webkit-background-clip: text;
  background-clip: text;
  display: inline;
`;
