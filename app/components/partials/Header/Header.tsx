'use client';
import StyledHeader from './StyledHeader';
import StyledNav from './StyledNav';
import HeaderLogo from './HeaderLogo';
import { useState, memo } from 'react';
import Hamburger from 'hamburger-react';
import GhubIco from '../../contents/header/GhubIco';
import HeaderUl from './HeaderUl';
import StyledMobileMenuButton from './StyledMobileMenuButton';

const Header = ({ isDark }: { isDark: boolean }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <StyledHeader id='header'>
      <HeaderLogo isDark={isDark} />
      <div className='flex flex-col items-end gap-2'>
        <StyledMobileMenuButton>
          <Hamburger
            color='var(--color-white)'
            toggled={showMenu}
            toggle={setShowMenu}
            size={20}
          />
        </StyledMobileMenuButton>
        <StyledNav showMenu={showMenu}>
          <HeaderUl />
          <GhubIco />
        </StyledNav>
      </div>
    </StyledHeader>
  );
};

export default memo(Header);
