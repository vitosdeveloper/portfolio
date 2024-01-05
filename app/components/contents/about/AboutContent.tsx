import React, { memo } from 'react';
import styled from 'styled-components';
import { ImageContainer, StyledImage } from '../../pages/Home';
import {
  AboutTextContainer,
  StyledAboutSubText,
  StyledAboutTitle,
  StyledP,
} from '../../pages/About';
import AboutForm from '../../form/AboutForm';
import F11Image from '@/public/f1.webp';

type Props = {};

const AboutContent = (props: Props) => {
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
  return (
    <AboutMeContainer>
      <ImageContainer>
        <StyledImage $left src={F11Image} alt='home-picture' />
      </ImageContainer>
      <AboutTextContainer>
        <StyledAboutTitle>ABOUT ME</StyledAboutTitle>
        <StyledAboutSubText>
          Why should you hive me for your next or current project?
        </StyledAboutSubText>
        <StyledP>
          I&apos;m a {adivinharIdade('1994-08-11')}-year-old developer, with a
          strong focus on web development. I am fully dedicated to continuous
          learning, and I specialize in building, maintaining, and enhancing
          interfaces and systems to meet the unique needs of your business. My
          passion for technology drives me to stay open to new challenges and
          constantly pursue knowledge and growth.
        </StyledP>
        <AboutForm />
      </AboutTextContainer>
    </AboutMeContainer>
  );
};

export default memo(AboutContent);

const AboutMeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;
