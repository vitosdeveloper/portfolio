import { pegarCookie } from './cookies';

export const isDark = () => {
  const cookie = pegarCookie('theme');
  let isDark = true;
  if (cookie) {
    isDark = cookie == 'dark';
  }
  return isDark;
};
