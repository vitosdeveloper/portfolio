'use server';
import { adicionarCookie } from '../utils/cookies';

export const themeAction = (isDark: boolean) => {
  adicionarCookie('theme', isDark ? 'light' : 'dark');
};
