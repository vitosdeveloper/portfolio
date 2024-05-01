'use client';
import styled from 'styled-components';

const StyledNav = styled.nav<{ $showMenu: boolean }>`
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
  position: absolute;
  top: 4.5rem;
  flex-direction: column;
  align-items: end;
  gap: 0.75rem;
  padding: 1rem;

  display: ${({ $showMenu }) => ($showMenu ? 'flex' : 'none')};
  border-bottom: ${({ $showMenu }) =>
    $showMenu ? '2px solid #8482ff' : 'none'};
  border-left: ${({ $showMenu }) => ($showMenu ? '2px solid #8482ff' : 'none')};
  border-right: ${({ $showMenu }) =>
    $showMenu ? '2px solid #8482ff' : 'none'};

  @media (min-width: 1200px) {
    display: flex;
    border: none;
    position: initial;
    top: initial;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding: initial;
  }
`;

export default StyledNav;
