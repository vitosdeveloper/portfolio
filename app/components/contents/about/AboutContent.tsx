import styled from 'styled-components';
import { ImageContainer } from '../../pages/Home';
import AboutForm from '../../form/AboutForm';
import Reveal from '../../containers/Reveal';
import ImageF1 from '@/public/f1.webp';
import ImageF2 from '@/public/f2.webp';
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { useFormStatus } from 'react-dom';
import Section from '../../containers/Section';
import AboutTextComponent from './AboutTextComponent';
import ImageComponent from './ImageComponent';

const AboutContent = () => {
  const { pending } = useFormStatus();
  const cookie = getCookie('theme');
  let isDark = true;
  if (cookie) {
    isDark = cookie == 'dark';
  }
  const [dark, setIsDark] = useState<boolean>(isDark);

  useEffect(() => {
    if (pending) setIsDark((p) => !p);
  }, [pending]);

  return (
    <Section id='#about'>
      <AboutMeContainer>
        <ImageComponent />
        <AboutTextComponent />
      </AboutMeContainer>
    </Section>
  );
};

export default memo(AboutContent);

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
  font-weight: 400;
  line-height: 1.2;
  font-family: var(--font-poppins), sans-serif;
`;

export const StyledAboutSubText = styled.h4`
  color: var(--color-info-light);
  font-size: 2rem;
  font-weight: 400;
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
