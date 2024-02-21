'use client';
import { themeAction } from '@/app/server-actions/themeAction';
import { PiCloudSunBold } from 'react-icons/pi';
import { PiCloudMoonBold } from 'react-icons/pi';
import styled from 'styled-components';

type Props = { isDark: boolean };

const DarkModeForm = ({ isDark }: Props) => {
  return (
    <form action={() => themeAction(isDark)}>
      <ThemeButton className='theme-button' type='submit'>
        {isDark ? (
          <PiCloudSunBold size={50} color='var(--color-info-light)' />
        ) : (
          <PiCloudMoonBold size={50} color='var(--color-info-light)' />
        )}
      </ThemeButton>
    </form>
  );
};

export default DarkModeForm;

const ThemeButton = styled.button`
  position: fixed;
  bottom: 4%;
  left: 3%;
  border-radius: 50%;
  z-index: 2;
  padding: 0.5rem;
  background: var(--color-background);
  border: 1px solid var(--color-info-light);
  cursor: pointer;
  &:hover {
    * {
      color: var(--color-button-hover);
    }
  }
`;
