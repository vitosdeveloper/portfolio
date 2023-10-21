import styled from 'styled-components';

const Section = styled.section<{ headerHeight: number }>`
  height: calc(100vh - ${({ headerHeight }) => headerHeight}px);
`;

export default Section;
