import React, { memo, useCallback } from 'react';
import {
  AboutTextContainer,
  StyledAboutSubText,
  StyledAboutTitle,
} from './AboutContent';
import Reveal from '../../containers/Reveal';
import AboutForm from '../../form/AboutForm';
import { useTranslation } from 'react-i18next';
import StyledP from './StyledP';

const AboutTextComponent = () => {
  const { t } = useTranslation();
  const adivinharIdade = useCallback(function (dataNascimento: string): string {
    const hoje = new Date();
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const idade = hoje.getFullYear() - anoNascimento;
    if (
      hoje.getMonth() < new Date(dataNascimento).getMonth() ||
      (hoje.getMonth() === new Date(dataNascimento).getMonth() &&
        hoje.getDate() < new Date(dataNascimento).getDate())
    ) {
      return String(idade - 1);
    }
    return String(idade);
  }, []);

  return (
    <AboutTextContainer>
      <Reveal x={75}>
        <AboutTextContainer>
          <StyledAboutTitle>{t('ABOUT ME')}</StyledAboutTitle>
          <StyledAboutSubText>
            {t('Why should you hire me for your next or current project?')}
          </StyledAboutSubText>
          <StyledP>
            {t("I'm a ") +
              adivinharIdade('1994-08-11') +
              t(
                '-year-old developer, with a strong focus on web development. I am fully dedicated to continuous learning, and I specialize in building, maintaining, and enhancing interfaces and systems to meet the unique needs of your business. My passion for technology drives me to stay open to new challenges and constantly pursue knowledge and growth.'
              )}
          </StyledP>
          <AboutForm />
        </AboutTextContainer>
      </Reveal>
    </AboutTextContainer>
  );
};

export default memo(AboutTextComponent);
