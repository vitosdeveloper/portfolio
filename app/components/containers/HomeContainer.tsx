import styled from 'styled-components';

const HomeContainer = styled.div<{ headerHeight: number }>`
  padding-top: ${({ headerHeight }) => headerHeight + 'px'};
`;

export default HomeContainer;
