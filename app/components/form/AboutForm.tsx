import React from 'react';
import StyledHeaderButton from '../partials/Header/StyledHeaderButton';
import styled from 'styled-components';
import { BsDownload } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const AboutForm = () => {
  const { t, i18n } = useTranslation();

  return (
    <a
      href={i18n.language == 'br' ? '/resume-br.pdf' : 'resume-eng.pdf'}
      target='_blank'
      rel='noopener noreferrer'
      style={{ display: 'contents' }}
    >
      <StyledAboutButton type='button'>
        {t('DOWNLOAD CV')} <BsDownload />
      </StyledAboutButton>
    </a>
  );
};

export default AboutForm;

const StyledAboutButton = styled(StyledHeaderButton)`
  color: var(--color-background);
  font-weight: 600;
  width: 190px;
  &:hover {
    background: var(--color-button);
  }
`;
