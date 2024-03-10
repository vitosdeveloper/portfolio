import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import ptBR from '@/public/locales/pt-BR.json';
import enUS from '@/public/locales/en-US.json';
import { getCookie } from 'cookies-next';

const lng = String(getCookie('lang'));

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enUS },
      br: { translation: ptBR },
    },
    lng,
    fallbackLng: 'br',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
