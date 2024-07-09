'use client';

import React, { memo } from 'react';
import { SkillsTextContainer, SkillsTitle, StyledCenterDiv } from './Skills';
import styled from 'styled-components';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';
import Reveal from '../containers/Reveal';
import { StyledAboutTitle } from '../contents/about/AboutContent';
import { useTranslation } from 'react-i18next';
import Section from '../containers/Section';

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
                onClick={(e) => {
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

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
  @media (max-width: 1277px) {
    flex-direction: column;
    align-items: center;
  }
`;

const IconContainer = styled(Link)`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: 360px;
  @media (max-width: 400px) {
    width: 280px;
  }
  @media (max-width: 350px) {
    text-align: center;
    margin: 0 auto;
    width: 210px;
    flex-direction: column;
  }
`;

const IconBg = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const IconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconTitle = styled(SkillsTitle)`
  font-size: 22px;
  margin: 0;
`;

const IconValue = styled.p`
  font-size: 14px;
  color: var(--color-info-light);
  &:hover {
    color: var(--color-button-hover);
  }
  @media (max-width: 400px) {
    line-break: anywhere;
    max-width: 160px;
  }
  @media (max-width: 320px) {
    max-width: 140px;
  }
`;
