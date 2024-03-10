'use client';
import StyledHeader from './StyledHeader';
import StyledNav from './StyledNav';
import HeaderLogo from './HeaderLogo';
import { useState, memo } from 'react';
import Hamburger from 'hamburger-react';
import GhubIco from '../../contents/header/GhubIco';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import HeaderUl from './HeaderUl';
import Heart from './Heart';
import Langs from './Langs';
import { FlexXContainer } from '../../pages/Services';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <StyledHeader id='header'>
      <HeaderLogo />
      <div
        style={{
          // marginTop: '.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          gap: '.5rem',
        }}
      >
        <StyledMobileMenuButton
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{
            scale: 0.8,
            rotate: -180,
            borderRadius: '100%',
          }}
        >
          <Hamburger
            color='var(--color-white)'
            toggled={showMenu}
            toggle={setShowMenu}
            size={20}
          />
        </StyledMobileMenuButton>
        <StyledNav $showMenu={showMenu}>
          <HeaderUl />
          <GhubIco />
        </StyledNav>
      </div>
    </StyledHeader>
  );
};

export default memo(Header);

const StyledMobileMenuButton = styled(motion.div)`
  @media (min-width: 1200px) {
    display: none;
  }
`;
