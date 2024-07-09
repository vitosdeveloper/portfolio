'use server';
import { adicionarCookie, pegarCookie } from '../utils/cookies';

export const themeAction = async (formData: FormData) => {
  const cookie = await pegarCookie('theme');

  let isDark;
  if (!cookie) {
    adicionarCookie('theme', 'dark');
    isDark = true;
  } else {
    isDark = cookie == 'dark';
  }

  adicionarCookie('theme', isDark ? 'light' : 'dark');
};
