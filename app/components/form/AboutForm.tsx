'use client';
import React from 'react';
import StyledHeaderButton from '../partials/Header/StyledHeaderButton';
import styled from 'styled-components';
import { BsDownload } from 'react-icons/bs';

const AboutForm = () => {
  const downloadCV = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/getCV');
  };

  return (
    <a
      href='/Resume-Vitor-Fernandes-Goncalves-EN.pdf'
      target='_blank'
      rel='noopener noreferrer'
    >
      <StyledAboutButton type='submit'>
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
`;
