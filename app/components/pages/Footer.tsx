import React, { memo } from 'react';
import {
  FooterTitle,
  StyledFooter,
} from '../partials/Footer/FooterStyledComponents';
import { useTranslation } from 'react-i18next';

type Props = {};

const Footer = (props: Props) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter style={{ color: 'white' }}>
      <FooterTitle>
        @ {currentYear}{' '}
        {t('All rights reserved | Made with ❤ by Vitor Fernandes')}
      </FooterTitle>
    </StyledFooter>
  );
};

export default memo(Footer);
