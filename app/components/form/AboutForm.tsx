import React from 'react';
import StyledHeaderButton from '../partials/Header/StyledHeaderButton';
import styled from 'styled-components';
import { BsDownload } from 'react-icons/bs';
import { motion } from 'framer-motion';

const AboutForm = () => {
  return (
    <a
      href='/Resume-Vitor-Fernandes-Goncalves-EN.pdf'
      target='_blank'
      rel='noopener noreferrer'
      style={{ display: 'contents' }}
    >
      <StyledAboutButton type='button'>
        DOWNLOAD CV <BsDownload />
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
