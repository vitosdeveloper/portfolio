import { memo } from 'react';
import styled from 'styled-components';
import Reveal from '../../containers/Reveal';
import Image from 'next/image';
import Logo from '@/public/coding_icon_clean.webp';

const LogoH1 = styled.h1`
  background: linear-gradient(
    90deg,
    var(--color-button-hover) 0%,
    var(--color-blue) 50%,
    var(--color-orange) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  @media (max-width: 320px) {
    font-size: 25px;
  }
`;

export const StyledLogo = styled(Image)`
  @media (max-width: 333px) {
    display: none;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
  flex-wrap: wrap;
`;

const HeaderLogo = () => {
  return (
    <StyledContainer style={{ flexWrap: 'nowrap' }}>
      {/* <StyledDiCode size='66px' /> */}
      <StyledLogo
        src={Logo}
        alt='logo'
        style={{ width: 'auto', height: 33.3 }}
      />
      <Reveal x={-75}>
        <LogoH1>Vitos Developer</LogoH1>
      </Reveal>
    </StyledContainer>
  );
};

export default memo(HeaderLogo);
