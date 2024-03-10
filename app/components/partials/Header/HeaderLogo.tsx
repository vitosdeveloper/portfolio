import { memo } from 'react';
import { DiCode } from 'react-icons/di';
import styled from 'styled-components';
import Reveal from '../../containers/Reveal';

const LogoH1 = styled.h1`
  background: linear-gradient(
    90deg,
    rgba(89, 195, 120, 1) 0%,
    rgba(28, 171, 217, 1) 50%,
    rgba(221, 76, 99, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  @media (max-width: 320px) {
    font-size: 25px;
  }
`;

export const StyledDiCode = styled(DiCode)`
  color: rgba(89, 195, 120, 1);
  @media (max-width: 1200px) {
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
      <StyledDiCode size='66px' />
      <Reveal x={-75}>
        <LogoH1>Vitos Developer</LogoH1>
      </Reveal>
    </StyledContainer>
  );
};

export default memo(HeaderLogo);
