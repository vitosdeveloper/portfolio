import styled from 'styled-components';
import { memo } from 'react';
import Section from '../../containers/Section';
import AboutTextComponent from './AboutTextComponent';
import ImageComponent from './ImageComponent';

const AboutContent = ({ isDark }: { isDark: boolean }) => {
  return (
    <Section id='#about'>
      <div className='flex flex-wrap items-center gap-4'>
        <ImageComponent isDark={isDark} />
        <AboutTextComponent />
      </div>
    </Section>
  );
};

export default memo(AboutContent);

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
