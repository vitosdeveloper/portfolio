'use server';
import { cookies } from 'next/headers';

export const adicionarCookie = (campo: string, valor: string) => {
  cookies().set(campo, valor, {
    sameSite: 'none',
    secure: true,
  });
};

export const pegarCookie = (campo: string) => {
  const cookie: unknown = cookies().get(campo);
  if (
    !cookie ||
    typeof cookie !== 'object' ||
    !('value' in cookie) ||
    typeof cookie.value !== 'string'
  )
    return null;
  return cookie.value;
};

export const removerCookie = (campo: string) => {
  cookies().delete(campo);
};
