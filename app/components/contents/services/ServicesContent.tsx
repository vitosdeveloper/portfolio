import React, { HTMLProps, memo } from 'react';
import { FlexYContainer, StyledServicesTitle } from '../../pages/Services';
import Reveal from '../../containers/Reveal';
import { useTranslation } from 'react-i18next';
import StyledHomeTitle from '../../text/StyledHomeTitle';
import StyledImage from '../home/StyledImage';
import { getCookie } from 'cookies-next';

const ServicesContent = () => {
  const { t } = useTranslation();

  const cookie = getCookie('theme');
  let isDark = true;
  if (cookie) {
    isDark = cookie == 'dark';
  }

  return (
    <FlexYContainer style={{ textAlign: 'center' }}>
      <Reveal y={-75}>
        <StyledHomeTitle style={{ marginBottom: '1rem' }}>
          {t('Services')}
        </StyledHomeTitle>
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
              src={isDark ? 'coding_icon_clean.webp' : 'coding_icon.webp'}
              alt='service-picture'
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

const ServicesContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className='services-container' {...props}>
      {children}
    </div>
  );
};

const ServiceTextContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className='s4:h-343px 1300px:h-300px 1400px:h-250px' {...props}>
      {children}
    </div>
  );
};

const ServicesImageContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className='max-h-744px flex-1 min-w-240px self-center' {...props}>
      {children}
    </div>
  );
};

const ServicesTextContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className='flex flex-col gap-12 s4:gap-8 self-center' {...props}>
      {children}
    </div>
  );
};

const ServicesTitle = ({
  gradientprop,
  children,
  ...props
}: HTMLProps<HTMLHeadingElement> & { gradientprop?: boolean }) => {
  return (
    <h3
      className={`font-jost 400px:text-5xl text-2xl bg-gradient-to-l bg-clip-text text-transparent
      font-bold block text-center mb-4
       ${
         gradientprop
           ? ' from-color-blue via-color-pink to-color-orange '
           : ' bg-color-info-light '
       }`}
      {...props}
    >
      {children}
    </h3>
  );
};

const ServicesText = ({
  gradientprop,
  children,
  ...props
}: HTMLProps<HTMLHeadingElement> & { gradientprop?: boolean }) => {
  return (
    <h3
      className={`font-jost 400px:text-xl text-base bg-gradient-to-l bg-clip-text text-transparent
      font-bold 
       ${
         gradientprop
           ? ' from-color-blue via-color-pink to-color-orange '
           : ' bg-color-info-light '
       }`}
      {...props}
    >
      {children}
    </h3>
  );
};
