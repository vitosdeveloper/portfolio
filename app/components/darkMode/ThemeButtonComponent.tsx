'use client';
import { getCookie, setCookie } from 'cookies-next';
import { PiCloudMoonBold, PiCloudSunBold } from 'react-icons/pi';
import ThemeButton from './ThemeButton';
import { memo, useState } from 'react';

const ThemeButtonComponent = () => {
  const cookie = getCookie('theme');
  let isDark = true;
  if (cookie) {
    isDark = cookie == 'dark';
  }
  const [isDarkState, setIsDarkState] = useState<boolean>(!isDark);

  const handleThemeButtonChange = () => {
    const cookie = getCookie('theme');
    let isDark = true;
    if (cookie) {
      isDark = cookie == 'dark';
    }
    setIsDarkState(isDark);
    document.querySelector('html')?.classList.toggle('dark');
    setCookie('theme', isDark ? 'light' : 'dark', { sameSite: 'strict' });
    const image = document.querySelector('.about-image');
    const image2 = document.querySelector('[alt=service-picture]');
    const image3 = document.querySelector('[alt=logo-img]');

    if (
      image instanceof HTMLImageElement &&
      image2 instanceof HTMLImageElement &&
      image3 instanceof HTMLImageElement
    ) {
      image.src = isDark ? 'f1.webp' : 'f2.webp';
      image2.src = isDark ? 'coding_icon.webp' : 'coding_icon_clean.webp';
      image3.src = isDark ? 'coding_icon.webp' : 'coding_icon_clean.webp';
    }
  };

  return (
    <>
      <ThemeButton
        onClick={handleThemeButtonChange}
        className='theme-button'
        type='submit'
      >
        {isDarkState ? (
          <PiCloudSunBold size={33} />
        ) : (
          <PiCloudMoonBold size={33} />
        )}
      </ThemeButton>
    </>
  );
};

export default memo(ThemeButtonComponent);
