import React, { memo } from 'react';
import {
  FooterTitle,
  StyledFooter,
} from '../partials/Footer/FooterStyledComponents';

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter style={{ color: 'white' }}>
      <FooterTitle>
        @ {currentYear} All rights reserved | Made with ❤ by Vitor Fernandes
      </FooterTitle>
    </StyledFooter>
  );
};

export default memo(Footer);
