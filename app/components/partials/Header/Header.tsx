'use client';
import StyledHeader from './StyledHeader';
import StyledNav from './StyledNav';
import StyledUl from '../../elements/StyledUl';
import StyledHeaderLi from './StyledHeaderLi';
import HeaderLogo from './HeaderLogo';
import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useRef,
  memo,
} from 'react';
import Hamburger from 'hamburger-react';
import { ISection } from '@/app/types/Section';
import GhubIco from '../../contents/header/GhubIco';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import Heart from './Heart';
import HeaderUl from './HeaderUl';

export const links: { href: ISection; content: string }[] = [
  { href: '#home', content: 'HOME' },
  { href: '#about', content: 'ABOUT' },
  { href: '#services', content: 'SERVICES' },
  { href: '#skills', content: 'SKILLS' },
  { href: '#work', content: 'MY WORK' },
  { href: '#contact', content: 'CONTACT' },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <StyledHeader id='header'>
      <HeaderLogo />
      <div
        style={{
          marginTop: '.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          gap: '.5rem',
        }}
      >
        <StyledMobileMenuButton>
          <motion.div
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
          </motion.div>
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

const StyledMobileMenuButton = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
`;
