'use client';
import { DiCode } from 'react-icons/di';
import styled from 'styled-components';

const LogoH1 = styled.h1`
  background: linear-gradient(
    90deg,
    rgba(89, 195, 120, 1) 0%,
    rgba(28, 171, 217, 1) 50%,
    rgba(221, 76, 99, 1) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  @media (max-width: 320px) {
    font-size: 25px;
  }
`;

const StyledDiCode = styled(DiCode)`
  color: rgba(89, 195, 120, 1);
  @media (max-width: 500px) {
    display: none;
  }
`;

const HeaderLogo = ({ big }: { big: boolean }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        alignSelf: big ? 'start' : 'inital',
        gap: '.25rem',
        whiteSpace: 'nowrap',
      }}
    >
      <StyledDiCode size='66px' />
      <LogoH1>Vitos Developer</LogoH1>;
    </div>
  );
};

export default HeaderLogo;
