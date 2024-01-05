import React, { memo } from 'react';
import styled from 'styled-components';
import Title from '../text/Title';

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

const FooterTitle = styled(Title)`
  text-align: center;
  font-size: 14px;
`;

const StyledFooter = styled.footer`
  background: rgb(20, 4, 43);
  padding: 2rem 2rem;
`;
