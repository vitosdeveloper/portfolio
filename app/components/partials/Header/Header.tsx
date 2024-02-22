'use client';
import StyledHeader from './StyledHeader';
import StyledNav from './StyledNav';
import StyledUl from '../../elements/StyledUl';
import StyledHeaderLi from './StyledHeaderLi';
import HeaderLogo from './HeaderLogo';
import { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react';
import Hamburger from 'hamburger-react';
import { ISection } from '@/app/types/Section';
import { Link } from 'react-scroll';
import GhubIco from '../../contents/header/GhubIco';
import { motion } from 'framer-motion';
import Image from 'next/image';
import heart from '@/public/heart.gif';
import styled from 'styled-components';

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
  const heartRef = useRef<HTMLDivElement>(null);
  const headerHeight = 87;

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
          <StyledUl>
            {links.map(({ href, content }) => {
              return (
                <StyledHeaderLi key={href}>
                  <StyledHeaderLink
                    smooth={true}
                    duration={300}
                    to={href}
                    offset={-headerHeight}
                    spy={true}
                    activeStyle={{
                      color: 'var(--color-button-hover)',
                    }}
                    onSetActive={(e) => {
                      if (e !== '#contact') return;
                      if (
                        heartRef &&
                        heartRef.current instanceof HTMLDivElement
                      ) {
                        heartRef.current.style.opacity = '1';
                        heartRef.current.style.bottom = '18';
                      }
                    }}
                  >
                    {content}
                  </StyledHeaderLink>
                </StyledHeaderLi>
              );
            })}
          </StyledUl>

          <GhubIco />
        </StyledNav>
      </div>
      <div
        ref={heartRef}
        style={{
          opacity: 0,
          position: 'fixed',
          transition: '.5s all',
          bottom: 0,
          right: 15,
          color: 'white',
          cursor: 'pointer',
        }}
      >
        <motion.div
          drag
          dragConstraints={{
            top: -300,
            left: -230,
            right: 30,
            bottom: 30,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            style={{ userSelect: 'none', pointerEvents: 'none' }}
            src={heart}
            alt='heart-gif'
            width={70}
          />
        </motion.div>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledMobileMenuButton = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
`;

const StyledBigViewMenuButton = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
`;

const StyledHeaderLink = styled(Link)`
  font-size: initial;
  padding: 0 0.5rem;
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: 22px;
  }
`;
