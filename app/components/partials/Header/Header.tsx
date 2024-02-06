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

type Props = {
  headerHeight: number;
  setHeaderHeight: Dispatch<SetStateAction<number>>;
};

export const links: { href: ISection; content: string }[] = [
  { href: '#home', content: 'HOME' },
  { href: '#about', content: 'ABOUT' },
  { href: '#services', content: 'SERVICES' },
  { href: '#skills', content: 'SKILLS' },
  { href: '#work', content: 'MY WORK' },
  { href: '#contact', content: 'CONTACT' },
];

const Header = ({ headerHeight, setHeaderHeight }: Props) => {
  const [big, setBig] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [fire, setFiire] = useState<boolean>(false);
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const windowSize = window.innerWidth;
      setBig(!(windowSize <= 999));
      setShowMenu(!(windowSize <= 999));
      setHeaderHeight(
        document.querySelector('#header')?.getBoundingClientRect().height || 0
      );
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setHeaderHeight]);

  useEffect(() => {
    if (
      fire &&
      heartRef.current &&
      heartRef.current instanceof HTMLDivElement
    ) {
      heartRef.current.style.opacity = '1';
      heartRef.current.style.bottom = '18';
    }
  }, [fire]);

  return (
    <StyledHeader id='header' $big={big}>
      <HeaderLogo big={big} />
      <div
        style={{
          marginTop: '.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          gap: '.5rem',
        }}
      >
        {!big && (
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
        )}
        <StyledNav $big={big} $showMenu={showMenu}>
          <StyledUl $big={big}>
            {links.map(({ href, content }) => {
              return (
                <StyledHeaderLi key={href}>
                  <Link
                    smooth={true}
                    duration={300}
                    to={href}
                    offset={-headerHeight}
                    spy={true}
                    style={{
                      fontSize: big ? 'initial' : '22px',
                      padding: '0 .5rem',
                    }}
                    activeStyle={{
                      color: 'var(--color-button-hover)',
                      fontWeight: '700 !important',
                    }}
                    onSetActive={(e) => {
                      if (e !== '#contact') return;
                      setFiire(true);
                    }}
                    onSetInactive={(e) => {
                      if (e !== '#contact') return;
                      setFiire(false);
                    }}
                  >
                    {content}
                  </Link>
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
