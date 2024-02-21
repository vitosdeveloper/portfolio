import DarkModeForm from './DarkModeForm';
import { getCookie } from 'cookies-next';

type Props = {};

export const isDarkClientside = () => {
  const themeCookie = getCookie('theme')?.replaceAll('"', '');
  return !themeCookie || themeCookie == 'dark';
};

const DarkMode = (props: Props) => {
  return (
    typeof window !== 'undefined' && (
      <DarkModeForm isDark={isDarkClientside()} />
    )
  );
};

export default DarkMode;
