import React, { memo, useCallback } from 'react';
import {
  AboutTextContainer,
  StyledAboutSubText,
  StyledAboutTitle,
  StyledP,
} from './AboutContent';
import Reveal from '../../containers/Reveal';
import AboutForm from '../../form/AboutForm';

type Props = {};

const AboutTextComponent = (props: Props) => {
  const adivinharIdade = useCallback(function (dataNascimento: string) {
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
  }, []);

  return (
    <AboutTextContainer>
      <Reveal x={75}>
        <AboutTextContainer>
          <StyledAboutTitle>ABOUT ME</StyledAboutTitle>
          <StyledAboutSubText>
            Why should you hire me for your next or current project?
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
      </Reveal>
    </AboutTextContainer>
  );
};

export default memo(AboutTextComponent);
