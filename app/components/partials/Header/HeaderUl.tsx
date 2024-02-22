import React, { memo, useRef } from 'react';
import StyledUl from '../../elements/StyledUl';
import { links } from './Header';
import StyledHeaderLi from './StyledHeaderLi';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Heart from './Heart';

type Props = {};

const HeaderUl = (props: Props) => {
  const heartRef = useRef<HTMLDivElement>(null);
  const headerHeight = 87;

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
      <Heart heartRef={heartRef} />
    </>
  );
};

export default memo(HeaderUl);

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
