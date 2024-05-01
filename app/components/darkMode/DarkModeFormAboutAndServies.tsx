import { themeAction } from '@/app/server-actions/themeAction';
import { getCookie } from 'cookies-next';
import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Services from '../pages/Services';
import About from '../pages/About';
const PiCloudSunBold = dynamic(
  () => import('react-icons/pi').then((module) => module.PiCloudSunBold),
  { ssr: false }
);

const PiCloudMoonBold = dynamic(
  () => import('react-icons/pi').then((module) => module.PiCloudMoonBold),
  { ssr: false }
);

const DarkModeFormAboutAndServies = () => {
  const cookie = getCookie('theme');
  let isDark = true;
  if (cookie) {
    isDark = cookie == 'dark';
  }

  return (
    <form action={themeAction}>
      <About isDark={isDark} />
      <Services isDark={isDark} />
      <ThemeButton className='theme-button' type='submit'>
        {isDark ? <PiCloudSunBold size={33} /> : <PiCloudMoonBold size={33} />}
      </ThemeButton>
    </form>
  );
};

export default DarkModeFormAboutAndServies;

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
  & {
    color: var(--color-info-light);
  }
  &:hover {
    * {
      color: var(--color-button-hover);
    }
  }
`;
