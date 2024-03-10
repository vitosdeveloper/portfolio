import { setCookie } from 'cookies-next';
import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {};

const Langs = (props: Props) => {
  const { i18n } = useTranslation();

  return (
    <LanguageSwitcher>
      <LanguageButton
        className={i18n.language === 'br' ? 'active' : ''}
        onClick={() => {
          i18n.changeLanguage('br');
          setCookie('lang', 'br', { sameSite: 'strict' });
        }}
      >
        PT-BR
      </LanguageButton>
      <LanguageButton
        className={i18n.language === 'en' ? 'active' : ''}
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

import styled from 'styled-components';

const LanguageSwitcher = styled.div`
  display: flex;
  position: fixed;
  bottom: 4%;
  right: 1%;
  gap: 0rem;
  z-index: 2;
  gap: 0.25rem;
`;

const LanguageButton = styled.button`
  background-color: var(--color-background);
  color: var(--color-white);
  border: none;
  border-radius: 10px;
  padding: 0.5rem 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 10px;
  background: var(--color-card2);
  border: 1px solid var(--color-white);

  &:hover {
    background: var(--color-button);
  }
`;
