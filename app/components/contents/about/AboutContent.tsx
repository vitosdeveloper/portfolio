import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImageContainer, StyledImage } from '../../pages/Home';
import AboutForm from '../../form/AboutForm';
import Reveal from '../../containers/Reveal';
import { StaticImageData } from 'next/image';
import { getCookie } from 'cookies-next';
import ImageF1 from '@/public/f1.webp';
import ImageF2 from '@/public/f2.webp';

const AboutContent = () => {
  const [image, setImage] = useState<StaticImageData | null>(null);

  function adivinharIdade(dataNascimento: string) {
    const hoje = new Date();
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const idade = hoje.getFullYear() - anoNascimento;
    if (
      hoje.getMonth() < new Date(dataNascimento).getMonth() ||
      (hoje.getMonth() === new Date(dataNascimento).getMonth() &&
        hoje.getDate() < new Date(dataNascimento).getDate())
    ) {
      return idade - 1;
    }
    return idade;
  }

  const cookieTheme = getCookie('theme')?.replaceAll('"', '');

  const isDark = useCallback(() => {
    if (cookieTheme) {
      setImage(cookieTheme === 'dark' ? ImageF1 : ImageF2);
      return cookieTheme;
    }
  }, [cookieTheme]);

  useEffect(() => {
    console.log(isDark());
  }, [cookieTheme, isDark]);

  return (
    <AboutMeContainer>
      <ImageContainer>
        {image ? (
          <Reveal once x={-75}>
            <StyledImage $left src={image} alt='home-picture' />
          </Reveal>
        ) : (
          <Reveal once x={-75}>
            {/* <StyledImage $left src={image} alt='home-picture' /> */}
          </Reveal>
        )}
      </ImageContainer>
      <AboutTextContainer>
        <Reveal x={75}>
          <AboutTextContainer>
            <StyledAboutTitle>ABOUT ME</StyledAboutTitle>
            <StyledAboutSubText>
              Why should you hire me for your next or current project?
            </StyledAboutSubText>
            <StyledP>
              I&apos;m a {adivinharIdade('1994-08-11')}-year-old developer, with
              a strong focus on web development. I am fully dedicated to
              continuous learning, and I specialize in building, maintaining,
              and enhancing interfaces and systems to meet the unique needs of
              your business. My passion for technology drives me to stay open to
              new challenges and constantly pursue knowledge and growth.
            </StyledP>
            <AboutForm />
          </AboutTextContainer>
        </Reveal>
      </AboutTextContainer>
    </AboutMeContainer>
  );
};

export default AboutContent;

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
