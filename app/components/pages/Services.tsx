import React from 'react';
import Section from '../containers/Section';
import { StyledAboutTitle } from './About';
import styled from 'styled-components';
import ServicesContent from '../contents/services/ServicesContent';

type Props = {
  headerHeight: number;
};

const Services = ({ headerHeight }: Props) => {
  return (
    <Section id='#services' $headerHeight={headerHeight}>
      <ServicesContent />
    </Section>
  );
};

export default Services;

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
