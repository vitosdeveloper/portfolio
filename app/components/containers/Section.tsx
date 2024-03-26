import { memo } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  /* margin-top: 87px; */
  min-height: calc(100vh - 87px);
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 1200px) {
    padding: 2rem;
  }
  @media (max-width: 500px) {
    padding: 10px 1rem 10px 1rem;
  }
`;

export default memo(Section);
