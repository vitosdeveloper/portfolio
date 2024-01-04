import React, { Dispatch, SetStateAction } from 'react';
import Section from '../containers/Section';
import { ImageContainer, StyledImage } from './Home';
import styled from 'styled-components';
import StyledHeaderButton from '../partials/Header/StyledHeaderButton';
import { BsDownload } from 'react-icons/bs';
import { ISection } from '@/app/types/Section';
import F11Image from '@/public/f11.webp';

type Props = {
  headerHeight: number;
};

const About = ({ headerHeight }: Props) => {
  return (
    <Section id='#about' $headerHeight={headerHeight}>
      <AboutMeContainer>
        <ImageContainer>
          <StyledImage $left src={F11Image} alt='home-picture' />
        </ImageContainer>
        <AboutTextContainer>
          <StyledAboutTitle>ABOUT ME</StyledAboutTitle>
          <StyledAboutSubText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit?
          </StyledAboutSubText>
          <StyledP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            minus perferendis quasi soluta, explicabo deserunt deleniti quis
            nisi ipsam ut culpa vitae ipsum exercitationem necessitatibus
            accusamus animi iure amet iste?
          </StyledP>
          <StyledAboutButton>
            DOWNLOAD CV <BsDownload />
          </StyledAboutButton>
        </AboutTextContainer>
      </AboutMeContainer>
    </Section>
  );
};

export default About;

const AboutMeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

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

const StyledAboutButton = styled(StyledHeaderButton)`
  color: var(--color-background);
  font-weight: 600;
  width: 190px;
`;
