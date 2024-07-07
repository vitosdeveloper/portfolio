import { themeAction } from '@/app/server-actions/themeAction';
import { getCookie } from 'cookies-next';
import Services from '../pages/Services';
import About from '../pages/About';
import Home from '../pages/Home';
import Header from '../partials/Header/Header';
import { PiCloudMoonBold, PiCloudSunBold } from 'react-icons/pi';
import ThemeButton from './ThemeButton';

const HeaderHomeDarkModeFormAboutAndServies = () => {
  const cookie = getCookie('theme');
  let isDark = true;
  if (cookie) {
    isDark = cookie == 'dark';
  }

  return (
    <>
      <Header isDark={isDark} />
      <form action={themeAction}>
        <Home />
        <About isDark={isDark} />
        <Services isDark={isDark} />
        <ThemeButton className='theme-button' type='submit'>
          {isDark ? (
            <PiCloudSunBold size={33} />
          ) : (
            <PiCloudMoonBold size={33} />
          )}
        </ThemeButton>
      </form>
    </>
  );
};

export default HeaderHomeDarkModeFormAboutAndServies;
