'use client';
import styled from 'styled-components';

const StyledHeader = styled.header<{ big: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-background);
  border-bottom: 0.1px solid var(--color-background);
  box-shadow: 0 0 10px -10px #000a18;
  padding: ${({ big }) =>
    big ? '10px 2rem 10px 1rem' : '10px 1rem 10px 1rem'};
  transition: all 0.5s ease !important;
`;

export default StyledHeader;
