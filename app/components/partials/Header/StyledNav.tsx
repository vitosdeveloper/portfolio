'use client';
import styled from 'styled-components';

const StyledNav = styled.nav<{ big: boolean; showMenu: boolean }>`
  display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
  border-bottom: ${({ showMenu, big }) =>
    showMenu && !big ? '2px solid #8482ff' : 'none'};
  border-left: ${({ showMenu, big }) =>
    showMenu && !big ? '2px solid #8482ff' : 'none'};
  border-right: ${({ showMenu, big }) =>
    showMenu && !big ? '2px solid #8482ff' : 'none'};
  position: ${({ big }) => (big ? 'initial' : 'absolute')};
  top: ${({ big }) => (big ? 'initial' : '4.5rem')};
  flex-direction: ${({ big }) => (big ? 'row' : 'column')};
  align-items: ${({ big }) => (big ? 'center' : 'end')};
  gap: ${({ big }) => (big ? '2rem' : '.75rem')};
  background: var(--color-background);
  padding: ${({ big }) => (big ? 'initial' : '1rem')};
  border-radius: 5px;
  animation: MoveRightLeft 0.2s linear;
  @keyframes MoveRightLeft {
    0% {
      transform: translatex(235px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default StyledNav;
