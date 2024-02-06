'use client';
import React from 'react';
import StyledHeaderButton from '../partials/Header/StyledHeaderButton';
import styled from 'styled-components';
import { BsDownload } from 'react-icons/bs';
import { motion } from 'framer-motion';

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
      style={{ display: 'contents' }}
    >
      <StyledAboutButton type='submit'>
        <motion.div
          whileHover={{ scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 160,
          }}
          whileTap={{
            scale: 1,
          }}
        >
          DOWNLOAD CV <BsDownload />
        </motion.div>
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
