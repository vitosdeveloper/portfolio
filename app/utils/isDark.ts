import { pegarCookie } from './cookies';

export const isDark = async () => {
  const cookie = await pegarCookie('theme');
  let isDark = true;
  if (cookie) {
    isDark = cookie == 'dark';
  }
  return isDark;
};
