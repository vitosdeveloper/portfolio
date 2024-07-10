import React, { HTMLProps, memo } from 'react';
import { SkillsTextContainer, SkillsTitle, StyledCenterDiv } from './Skills';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';
import Reveal from '../containers/Reveal';
import { StyledAboutTitle } from '../contents/about/AboutContent';
import { useTranslation } from 'react-i18next';
import Section from '../containers/Section';
import ShadowReflectionWrapper from '../fx/ShadowReflectionWrapper';

const Contact = () => {
  const { t } = useTranslation();
  const socials = [
    {
      name: t('Call Me:'),
      value: '+55 61 98338-2294',
      Icon: FaWhatsapp,
      color: 'var(--color-button-hover)',
      background: 'rgb(221, 214, 250)',
      link: 'https://api.whatsapp.com/send?phone=+5561983382294&text=Ol%C3%A1,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20contrat%C3%A1-lo.',
    },
    {
      name: t('Email Me:'),
      value: 'vitosdeveloper@gmail.com',
      Icon: IoMdMail,
      color: '',
      background: 'rgb(240, 106, 106)',
      link: 'mailto:vitosdeveloper@gmail.com',
    },
    {
      name: t('Location'),
      value: 'Águas Claras, Distrito Federal',
      Icon: CiLocationOn,
      color: 'rgb(139, 113, 233)',
      background: 'rgb(221, 245, 230)',
      link: '',
    },
  ];

  return (
    <Section id='#contact'>
      <StyledCenterDiv style={{ padding: '0 1rem' }}>
        <Reveal x={75}>
          <SkillsTextContainer>
            <StyledAboutTitle>{t('I want to hear from you')}</StyledAboutTitle>
            <SkillsTitle>{t('Contact Me')}</SkillsTitle>
          </SkillsTextContainer>
        </Reveal>
        <Reveal x={-75}>
          <IconsContainer>
            {socials.map(({ name, value, Icon, color, link, background }) => (
              <IconContainer
                href={link ? link : ''}
                onClick={(e: any) => {
                  !link && e.preventDefault();
                }}
                key={name}
                target='_blank'
              >
                <IconBg style={{ background }}>
                  <Icon style={{ color }} size='55px' color='white' />
                </IconBg>
                <IconTextContainer>
                  <IconTitle>{name}</IconTitle>
                  <IconValue>{value}</IconValue>
                </IconTextContainer>
              </IconContainer>
            ))}
          </IconsContainer>
        </Reveal>
      </StyledCenterDiv>
    </Section>
  );
};

export default memo(Contact);

const IconsContainer = ({ children, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className='
        flex flex-col flex-wrap justify-center gap-8 mt-8
        s3:flex-row
      '
      {...props}
    >
      {children}
    </div>
  );
};

const IconContainer = ({ children, ...props }: any) => {
  return (
    <Link
      className='
        flex flex-col gap-6 items-center w-90
        md:w-70 sm:w-52 sm:text-center sm:m-auto sm:flex-col
        '
      {...props}
    >
      <ShadowReflectionWrapper
        big
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {children}
      </ShadowReflectionWrapper>
    </Link>
  );
};

const IconBg = ({ children, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className='
        w-20 h-20 flex items-center justify-center
        rounded-full
      '
      {...props}
    >
      {children}
    </div>
  );
};

const IconTextContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className='flex flex-col ' {...props}>
      {children}
    </div>
  );
};

const IconTitle = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2 className='text-xl m-0' {...props}>
      {children}
    </h2>
  );
};

const IconValue = ({ children, ...props }: HTMLProps<HTMLParagraphElement>) => {
  return (
    <p
      className='
        text-sm text-color-info-light
        hover:text-color-button-hover]
        w-auto
        sm:max-w-[140px]
      '
      {...props}
    >
      {children}
    </p>
  );
};
