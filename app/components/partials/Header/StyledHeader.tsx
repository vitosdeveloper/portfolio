'use client';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-background);
  border-bottom: 0.1px solid var(--color-background);
  box-shadow: 0 0 10px -10px #000a18;
  /* transition: all 0.5s ease !important; */
  position: fixed;
  top: 0;
  /* width: 100%; */
  width: inherit;
  z-index: 2;
  @media (min-width: 1200px) {
    padding: 10px 4rem 10px 3rem;
  }
  @media (max-width: 700px) {
    padding: 10px 2rem 10px 1rem;
  }
  @media (max-width: 500px) {
    padding: 10px 1rem 10px 1rem;
  }
  padding: 10px 1rem 10px 1rem;
  @media (max-width: 1000px) {
    padding: 10px 0.5rem 10px 1rem;
  }
  @media (max-width: 1200px) {
    height: 87px;
  }
`;

export default StyledHeader;
