import React, { Dispatch, SetStateAction } from 'react';
import Section from '../containers/Section';
import { StyledAboutTitle } from './About';
import styled from 'styled-components';
import { ImageContainer, StyledHomeTitle, StyledImage } from './Home';
import { ISection } from '@/app/types/Section';
import CodingIcon from '@/public/coding_icon.png';

type Props = {
  headerHeight: number;
  setSection: Dispatch<SetStateAction<ISection>>;
};

const Services = ({ headerHeight }: Props) => {
  return (
    <Section id='#services' $headerHeight={headerHeight}>
      <FlexYContainer style={{ textAlign: 'center' }}>
        <StyledHomeTitle>Services</StyledHomeTitle>
        <StyledServicesTitle>What services do i offer</StyledServicesTitle>
        <ServicesContainer style={{ marginTop: '3rem' }}>
          <ServicesTextContainer className='service_text_one'>
            <div>
              <ServicesTitle>dgfsdf</ServicesTitle>
              <ServicesText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                varius ex et ligula hendrerit, quis varius odio cursus. Integer
                at interdum elit. Sed sit amet nunc ut leo fermentum cursus.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nullam ac libero vel nulla
                cursus cursus.
              </ServicesText>
            </div>
            <div>
              <ServicesTitle>dgfsdf</ServicesTitle>
              <ServicesText>
                Vestibulum bibendum lorem vel magna tincidunt, a cursus metus
                cursus. Etiam id justo nec odio feugiat fermentum. Praesent
                sagittis risus ac risus suscipit, id vestibulum quam fringilla.
                Vivamus vel dolor quis eros tincidunt rhoncus ut eget massa.
              </ServicesText>
            </div>
          </ServicesTextContainer>
          {/* <div className='service_text_two'></div> */}
          <ImageContainer
            className='service_image'
            style={{ margin: '0 auto' }}
          >
            <StyledImage $left src={CodingIcon} alt='home-picture' />
          </ImageContainer>
          <ServicesTextContainer className='service_text_two'>
            <div>
              <ServicesTitle>dgfsdf</ServicesTitle>
              <ServicesText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                varius ex et ligula hendrerit, quis varius odio cursus. Integer
                at interdum elit. Sed sit amet nunc ut leo fermentum cursus.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nullam ac libero vel nulla
                cursus cursus.
              </ServicesText>
            </div>
            <div>
              <ServicesTitle>dgfsdf</ServicesTitle>
              <ServicesText>
                Vestibulum bibendum lorem vel magna tincidunt, a cursus metus
                cursus. Etiam id justo nec odio feugiat fermentum. Praesent
                sagittis risus ac risus suscipit, id vestibulum quam fringilla.
                Vivamus vel dolor quis eros tincidunt rhoncus ut eget massa.
              </ServicesText>
            </div>
          </ServicesTextContainer>
          {/* <div className='service_text_four'></div> */}
        </ServicesContainer>
      </FlexYContainer>
    </Section>
  );
};

export default Services;

const ServicesContainer = styled.div`
  .service_text_one {
    grid-area: text1;
  }
  .service_text_two {
    grid-area: text2;
  }
  /* .service_text_three {
    grid-area: text3;
  }
  .service_text_four {
    grid-area: text4;
  } */
  .service_image {
    grid-area: img;
  }
  display: grid;
  gap: 1rem;
  text-align: left;
  grid-template-areas:
    'text1 img text2'
    'text1 img text2';
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-areas:
      'img img'
      'text1 text1'
      'text2 text2';
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    /* grid-template:
      '2fr'
      '1fr 1fr'
      '1fr 1fr'; */
  }
`;

const ServicesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (max-width: 1000px) {
    gap: 2rem;
  }
`;

const ServicesTitle = styled(StyledHomeTitle)`
  display: block;
  text-align: center;
`;

const ServicesText = styled(StyledHomeTitle)`
  font-size: 20px;
`;

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
