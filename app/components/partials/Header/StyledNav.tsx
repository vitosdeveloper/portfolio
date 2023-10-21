'use client';
import styled from 'styled-components';

const StyledNav = styled.nav<{ big: boolean; showMenu: boolean }>`
  display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
  position: ${({ big }) => (big ? 'initial' : 'absolute')};
  top: ${({ big }) => (big ? 'initial' : '4.5rem')};
  flex-direction: ${({ big }) => (big ? 'row' : 'column')};
  align-items: ${({ big }) => (big ? 'center' : 'end')};
  gap: ${({ big }) => (big ? '2rem' : '.75rem')};
  margin-right: 1rem;
`;

export default StyledNav;
