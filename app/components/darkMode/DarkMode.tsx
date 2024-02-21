import { pegarCookie } from '@/app/utils/cookies';
import DarkModeForm from './DarkModeForm';

type Props = {};

export const isDark = (): boolean => {
  const themeCookie = pegarCookie('theme');
  return !themeCookie || themeCookie == 'dark';
};

const DarkMode = (props: Props) => {
  return <DarkModeForm isDark={isDark()} />;
};

export default DarkMode;
