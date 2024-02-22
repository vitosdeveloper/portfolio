import { pegarCookie } from '@/app/utils/cookies';
import DarkModeForm from './DarkModeForm';
import { getCookie } from 'cookies-next';

type Props = {};

// export const isDarkClientside = () => {
//   const themeCookie = getCookie('theme')?.replaceAll('%22', '');
//   console.log(themeCookie);

//   return (!themeCookie || themeCookie) == 'dark';
// };

const DarkMode = (props: Props) => {
  // console.log(isDarkClientside());

  return <DarkModeForm />;
};

export default DarkMode;
