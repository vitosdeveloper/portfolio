import React, { memo, useRef } from 'react';
import StyledUl from '../../elements/StyledUl';
import StyledHeaderLi from './StyledHeaderLi';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { ISection } from '@/app/types/Section';
import { useTranslation } from 'react-i18next';

type Props = {};

const HeaderUl = (props: Props) => {
  const heartRef = useRef<HTMLDivElement>(null);
  const headerHeight = 62.67;
  const { t } = useTranslation();

  const links: { href: ISection; content: string }[] = [
    { href: '#home', content: t('HOME') },
    { href: '#about', content: t('ABOUT') },
    { href: '#services', content: t('SERVICES') },
    { href: '#skills', content: t('SKILLS') },
    { href: '#work', content: t('MY WORK') },
    { href: '#contact', content: t('CONTACT') },
  ];

  return (
    <>
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
                  if (heartRef && heartRef.current instanceof HTMLDivElement) {
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
      {/* <Heart heartRef={heartRef} /> */}
    </>
  );
};

export default memo(HeaderUl);

const StyledHeaderLink = styled(Link)`
  font-size: initial;
  padding: 0 0.5rem;
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: 22px;
  }
`;
