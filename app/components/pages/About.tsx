import Section from '../containers/Section';
import styled from 'styled-components';

import AboutContent from '../contents/about/AboutContent';

type Props = {
  headerHeight: number;
};

const About = ({ headerHeight }: Props) => {
  return (
    <Section id='#about' $headerHeight={headerHeight}>
      <AboutContent />
    </Section>
  );
};

export default About;

export const AboutTextContainer = styled.div`
  text-align: start;
  flex: 1;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledAboutTitle = styled.h4`
  color: var(--color-button-hover);
  font-size: 15px;
  letter-spacing: 3px;
  font-weight: 500;
  line-height: 1.2;
  font-family: var(--font-poppins), sans-serif;
`;

export const StyledAboutSubText = styled.h4`
  color: var(--color-info-light);
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 10px;
  text-transform: uppercase;
  max-width: 490px;
`;

export const StyledP = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.9rem;
  color: var(--color-info-light);
  font-family: var(--font-poppins), sans-serif;
  line-height: 2;
`;
