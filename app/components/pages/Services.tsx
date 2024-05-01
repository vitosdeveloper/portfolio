import Section from '../containers/Section';
import styled from 'styled-components';
import ServicesContent from '../contents/services/ServicesContent';
import { StyledAboutTitle } from '../contents/about/AboutContent';
import { memo } from 'react';

const Services = ({ isDark }: { isDark: boolean }) => {
  return (
    <Section id='#services'>
      <ServicesContent isDark={isDark} />
    </Section>
  );
};

export default memo(Services);

export const FlexYContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const FlexXContainer = styled(FlexYContainer)`
  flex-direction: row;
`;

export const StyledServicesTitle = styled(StyledAboutTitle)`
  font-size: 1.5rem;
`;
