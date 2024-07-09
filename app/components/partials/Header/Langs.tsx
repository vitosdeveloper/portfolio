import { setCookie } from 'cookies-next';
import React, { ButtonHTMLAttributes, HTMLProps } from 'react';
import { useTranslation } from 'react-i18next';

const Langs = () => {
  const { i18n } = useTranslation();

  return (
    <LanguageSwitcher>
      <LanguageButton
        langConditionalClass={i18n.language === 'br' ? 'active' : ''}
        onClick={() => {
          i18n.changeLanguage('br');
          setCookie('lang', 'br', { sameSite: 'strict' });
        }}
      >
        PT-BR
      </LanguageButton>
      <LanguageButton
        langConditionalClass={i18n.language === 'en' ? 'active' : ''}
        onClick={() => {
          i18n.changeLanguage('en');
          setCookie('lang', 'en', { sameSite: 'strict' });
        }}
      >
        ENG
      </LanguageButton>
    </LanguageSwitcher>
  );
};

export default Langs;

const LanguageSwitcher = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className='
        flex fixed bottom-[4%] right-[1%] z-10
        gap-1
      '
      {...props}
    >
      {children}
    </div>
  );
};

const LanguageButton = ({
  children,
  langConditionalClass,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  langConditionalClass: string;
}) => {
  return (
    <button
      className={`
        bg-color-card2 text-color-white
        border-none rounded-md
        p-2 font-bold cursor-pointer
        transition duration-300 ease-in-out
        text-xs hover:bg-color-button
        ${langConditionalClass}
        `}
      {...props}
    >
      {children}
    </button>
  );
};
