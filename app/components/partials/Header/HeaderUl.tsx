import React, { memo, useRef } from 'react';
import StyledUl from '../../elements/StyledUl';
import StyledHeaderLi from './StyledHeaderLi';
import { Link } from 'react-scroll';
import { ISection } from '@/app/types/Section';
import { useTranslation } from 'react-i18next';
import ShadowReflectionWrapper from '../../fx/ShadowReflectionWrapper';

type Props = {};

const HeaderUl = (props: Props) => {
  const heartRef = useRef<HTMLDivElement>(null);
  const headerHeight = 64;
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
    <StyledUl>
      {links.map(({ href, content }) => {
        return (
          <StyledHeaderLi key={href}>
            <ShadowReflectionWrapper>
              <Link
                className='py-2 cursor-pointer s4:text-base text-2xl header-links'
                smooth={true}
                duration={300}
                to={href}
                offset={-headerHeight}
                spy={true}
                activeStyle={{
                  color: 'var(--color-button-hover)',
                }}
                onSetActive={(e: any) => {
                  if (e !== '#contact') return;
                  if (heartRef && heartRef.current instanceof HTMLDivElement) {
                    heartRef.current.style.opacity = '1';
                    heartRef.current.style.bottom = '18';
                  }
                }}
              >
                {content}
              </Link>
            </ShadowReflectionWrapper>
          </StyledHeaderLi>
        );
      })}
    </StyledUl>
  );
};

export default memo(HeaderUl);
