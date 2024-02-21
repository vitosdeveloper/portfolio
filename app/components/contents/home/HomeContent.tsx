import { BsFillPlayFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import EuImage from '@/public/eu.webp';
import styled from 'styled-components';
import Link from 'next/link';
import { ImageContainer, StyledHomeTitle, StyledImage } from '../../pages/Home';
import { memo } from 'react';
import Reveal from '../../containers/Reveal';
import { StyledP } from '../about/AboutContent';

type Props = {};

const HomeContent = (props: Props) => {
  return (
    <StyledHomeContainer>
      <ContentContainer>
        <Reveal x={-75}>
          <ContentContainer>
            <StyledHomeRole>FULL-STACK DEVELOPER</StyledHomeRole>
            <StyledHomeTitle>Hey! I am</StyledHomeTitle>
            <StyledHomeTitle $gradientprop>Vitor Fernandes</StyledHomeTitle>
            <StyledP>
              I am a Developer, currently focused on the Web, completely
              dedicated to the studies and work I do.
            </StyledP>
            <StyledButtonLink href='mailto:vitosdeveloper@gmail.com'>
              <StyledHireMeButton>
                HIRE ME
                <BsFillPlayFill />
              </StyledHireMeButton>
            </StyledButtonLink>
            <StyledSocialContainer>
              <StyledP>Follow Me:</StyledP>
              <Link href='https://github.com/vitosnatios' target='_blank'>
                <BsGithub />
              </Link>
              <Link
                href='https://www.linkedin.com/in/vitosnatios/'
                target='_blank'
              >
                <BsLinkedin />
              </Link>
            </StyledSocialContainer>
          </ContentContainer>
        </Reveal>
      </ContentContainer>
      <ImageContainer>
        <Reveal once x={75}>
          <StyledImage src={EuImage} alt='home-picture' />
        </Reveal>
      </ImageContainer>
    </StyledHomeContainer>
  );
};

export default memo(HomeContent);

const StyledHomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.2;
  /* max-width: 40%; */
  flex: 1;
  @media (max-width: 1200px) {
    max-width: 744px;
    /* align-items: center; */
  }
`;

const StyledHomeRole = styled.h3`
  opacity: 1;
  -webkit-text-fill-color: transparent;
  background: var(--color-special-color);
  -webkit-background-clip: text;
  background-clip: text;
  color: var(--white);
  font-family: var(--font-fira-code), Roboto Mono, monospace;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const StyledButtonLink = styled(Link)`
  display: contents;
`;

const StyledHireMeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  justify-content: center;
  border-radius: 47px;
  height: 60px;
  letter-spacing: 3px;
  border: none;
  color: var(--color-white);
  font-weight: 500;
  transition: all 0.1s ease;
  width: 180px;
  background: var(--color-button);
  margin: 0.5rem 0 2rem 0;
  cursor: pointer;
  &:hover {
    background: var(--color-button-hover);
  }
`;

const StyledSocialContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  svg {
    width: 25px;
    height: 25px;
  }
  svg:hover {
    fill: var(--color-button-hover);
  }
`;
