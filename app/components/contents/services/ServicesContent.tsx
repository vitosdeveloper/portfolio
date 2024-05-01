import React, { memo } from 'react';
import CodingIcon from '@/public/coding_icon.webp';
import CodingIconClean from '@/public/coding_icon_clean.webp';
import styled from 'styled-components';
import { ImageContainer, StyledHomeTitle, StyledImage } from '../../pages/Home';
import { FlexYContainer, StyledServicesTitle } from '../../pages/Services';
import Reveal from '../../containers/Reveal';
import { useTranslation } from 'react-i18next';

const ServicesContent = ({ isDark }: { isDark: boolean }) => {
  const { t } = useTranslation();
  return (
    <FlexYContainer style={{ textAlign: 'center' }}>
      <Reveal y={-75}>
        <StyledHomeTitle>{t('Services')}</StyledHomeTitle>
        <StyledServicesTitle>
          {t('What services do i offer')}
        </StyledServicesTitle>
      </Reveal>

      <ServicesContainer style={{ marginTop: '3rem' }}>
        <ServicesTextContainer className='service_text_one'>
          <Reveal x={-75}>
            <ServiceTextContainer>
              <ServicesTitle>{t('Web Development')}</ServicesTitle>
              <ServicesText>
                {t(
                  "I can build your new system, e-commerce, landing page, or whatever you need. Whether it's solving bugs, creating new solutions, or contributing to existing projects, I'm here to help."
                )}
              </ServicesText>
            </ServiceTextContainer>
            <ServiceTextContainer>
              <ServicesTitle>{t('Creative Solutions')}</ServicesTitle>
              <ServicesText>
                {t(
                  "Recognized potential in my dedication and need something out of the box? I'm always open to new business possibilities involving technology. Let's have a conversation!"
                )}
              </ServicesText>
            </ServiceTextContainer>
          </Reveal>
        </ServicesTextContainer>
        <ServicesImageContainer
          className='service_image'
          style={{ margin: '0 auto' }}
        >
          <Reveal y={175}>
            <StyledImage
              $left
              src={isDark ? CodingIcon : CodingIconClean}
              alt='home-picture'
            />
          </Reveal>
        </ServicesImageContainer>
        <ServicesTextContainer className='service_text_two'>
          <Reveal x={75}>
            <ServiceTextContainer>
              <ServicesTitle>{t('Revitalization')}</ServicesTitle>
              <ServicesText>
                {t(
                  "If you have any legacy code and are interested in modernizing it for improved performance, a better user experience, and potentially cost savings through optimizations, I'm willing to learn any language or framework to solve your problem."
                )}
              </ServicesText>
            </ServiceTextContainer>
            <ServiceTextContainer>
              <ServicesTitle>Legacy</ServicesTitle>
              <ServicesText>
                {t(
                  "Satisfied with your legacy project as it is but need a professional for general modifications? Invest in my time and expertise, and I'll gradually turn your ideas into reality."
                )}
              </ServicesText>
            </ServiceTextContainer>
          </Reveal>
        </ServicesTextContainer>
      </ServicesContainer>
    </FlexYContainer>
  );
};

export default memo(ServicesContent);

const ServicesContainer = styled.div`
  .service_text_one {
    grid-area: text1;
  }
  .service_text_two {
    grid-area: text2;
  }
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
  }
`;

const ServiceTextContainer = styled.div`
  @media (min-width: 1001px) {
    height: 343px;
  }
  @media (min-width: 1300px) {
    height: 300px;
  }
  @media (min-width: 1400px) {
    height: 250px;
  }
  @media (min-width: 1600px) {
    height: 200px;
  }
  @media (min-width: 2000px) {
    max-height: 180px;
  }
`;

const ServicesImageContainer = styled(ImageContainer)`
  align-self: center;
`;

const ServicesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-self: center;
  @media (max-width: 1000px) {
    gap: 2rem;
  }
`;

const ServicesTitle = styled(StyledHomeTitle)`
  display: block;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 24px;
  }
`;

const ServicesText = styled(StyledHomeTitle)`
  font-size: 20px;
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;
