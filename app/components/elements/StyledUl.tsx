'use client';
import styled from 'styled-components';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 1.25rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default StyledUl;
