import { themeAction } from '@/app/server-actions/themeAction';
import { getCookie } from 'cookies-next';
import dynamic from 'next/dynamic';
import { PropsWithChildren, memo } from 'react';
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

const DarkModeForm = async ({ children }: PropsWithChildren) => {
  const cookie = getCookie('theme');
  let isDark = true;
  if (cookie) {
    isDark = cookie == 'dark';
  }

  return (
    <form action={themeAction}>
      {children}
      <ThemeButton className='theme-button' type='submit'>
        {isDark ? <PiCloudSunBold size={50} /> : <PiCloudMoonBold size={50} />}
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
  & {
    color: var(--color-info-light);
  }
  &:hover {
    * {
      color: var(--color-button-hover);
    }
  }
`;
