'use client';
import styled from 'styled-components';

const StyledUl = styled.ul<{ $big: boolean }>`
  display: flex;
  flex-direction: ${({ $big }) => ($big ? 'row' : 'column')};
  align-items: end;
  gap: ${({ $big }) => ($big ? '1.25rem' : '.5rem')};
`;

export default StyledUl;
