'use client';
import { themeAction } from '@/app/server-actions/themeAction';
// import { pegarCookie } from '@/app/utils/cookies';
import { getCookie } from 'cookies-next';
import dynamic from 'next/dynamic';
// import { PiCloudSunBold } from 'react-icons/pi';
// import { PiCloudMoonBold } from 'react-icons/pi';
import styled from 'styled-components';
const PiCloudSunBold = dynamic(
  () => import('react-icons/pi').then((module) => module.PiCloudSunBold),
  {
    ssr: false,
  }
);

const PiCloudMoonBold = dynamic(
  () => import('react-icons/pi').then((module) => module.PiCloudMoonBold),
  {
    ssr: false,
  }
);

const DarkModeForm = () => {
  const isDark = getCookie('theme') == 'dark';

  return (
    <form action={themeAction}>
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
