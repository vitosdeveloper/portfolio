'use client';
import Section from '../containers/Section';
import SkillsSwiper from '../swiper/SkillsSwiper';
import { HTMLProps, memo, useState } from 'react';
import SwiperCore from 'swiper';
import Reveal from '../containers/Reveal';
import styled from 'styled-components';
import Js from '@/public/skills/js.svg';
import Ts from '@/public/skills/ts.svg';
import Node from '@/public/skills/node.svg';
import Php from '@/public/skills/php.svg';
import Next from '@/public/skills/next.svg';
import React from '@/public/skills/react.svg';
import Express from '@/public/skills/express.svg';
import Mongo from '@/public/skills/mongo.svg';
import Mysql from '@/public/skills/mysql.svg';
import Redux from '@/public/skills/redux.svg';
import Electron from '@/public/skills/electron.svg';
import bootstrap from '@/public/skills/bootstrap.svg';
import css from '@/public/skills/css.svg';
import docker from '@/public/skills/docker.svg';
import git from '@/public/skills/git.svg';
import ubuntu from '@/public/skills/ubuntu.svg';
import postman from '@/public/skills/postman.svg';
import sass from '@/public/skills/sass.svg';
import tailwind from '@/public/skills/tailwind.svg';
import styledI from '@/public/skills/styled.svg';
import material from '@/public/skills/material.svg';
import html from '@/public/skills/html.svg';
import cs from '@/public/skills/cs.svg';
import vite from '@/public/skills/vite.svg';
import vitest from '@/public/skills/vitest.svg';
import jest from '@/public/skills/jest.svg';
import { StyledAboutTitle } from '../contents/about/AboutContent';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const [swipers, setSwipers] = useState<{
    first: SwiperCore | null;
    sec: SwiperCore | null;
  }>({
    first: null,
    sec: null,
  });

  const pauseSwipers = () => {
    if (!swipers?.first || !swipers?.sec) return;
    swipers?.first?.autoplay?.stop();
    swipers?.sec?.autoplay?.stop();
  };

  const playSwipers = () => {
    if (!swipers?.first || !swipers?.sec) return;
    swipers?.first?.autoplay?.start();
    swipers?.sec?.autoplay?.start();
  };
  const skills = [
    { name: 'Javascript', img: Js },
    { name: 'Typescript', img: Ts },
    { name: 'ReactJS', img: React },
    { name: 'NextJS', img: Next },
    { name: 'PHP', img: Php },
    { name: 'C#', img: cs },
    { name: 'NodeJS', img: Node },
    { name: 'ExpressJS', img: Express },
    { name: 'Mongo DB', img: Mongo },
    { name: 'MySQL', img: Mysql },
    { name: 'HTML', img: html },
    { name: 'CSS', img: css },
    { name: 'Git', img: git },
    { name: 'Redux', img: Redux },
    { name: 'Docker', img: docker },
    { name: 'Electron', img: Electron },
    { name: 'Bootstrap', img: bootstrap },
    { name: 'Ubuntu', img: ubuntu },
    { name: 'Postman', img: postman },
    { name: 'SASS', img: sass },
    { name: 'TailwindCSS', img: tailwind },
    { name: 'Styled Comp', img: styledI },
    { name: 'Material UI', img: material },
    { name: 'VITE', img: vite },
    { name: 'VITEST', img: vitest },
    { name: 'JEST', img: jest },
  ];

  const half = Math.floor(skills.length / 2);

  return (
    <Section id='#skills'>
      <StyledCenterDiv>
        <Reveal x={-75}>
          <SkillsTextContainer>
            <StyledAboutTitle>{t('MY PROGRESS SO FAR')}</StyledAboutTitle>
            <SkillsTitle>{t('My Skills')}</SkillsTitle>
          </SkillsTextContainer>
        </Reveal>
        <div onMouseEnter={pauseSwipers} onMouseLeave={playSwipers}>
          <Reveal x={-75}>
            <SkillsSwiper
              setSwipers={setSwipers}
              name='first'
              skills={skills.slice(0, half)}
            />
          </Reveal>
        </div>
        <div onMouseEnter={pauseSwipers} onMouseLeave={playSwipers}>
          <Reveal x={75}>
            <SkillsSwiper
              setSwipers={setSwipers}
              name='sec'
              reverse
              skills={skills.slice(half)}
            />
          </Reveal>
        </div>
      </StyledCenterDiv>
    </Section>
  );
};

export default memo(Skills);

export const SkillsSection = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <section
      className='flex flex-col content-center items-center w-full min-h-section-height
      mt-87px px-8 py-16 s5:p-8 s2:py-10px s2:px-4'
      {...props}
    >
      {children}
    </section>
  );
};

export const StyledCenterDiv = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className='flex flex-col gap-8 w-full' {...props}>
      {children}
    </div>
  );
};

export const SkillsTextContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className='flex flex-col flex-none text-center gap-4' {...props}>
      {children}
    </div>
  );
};

export const SkillsTitle = ({
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h4
      className='text-color-info-light text-4xl m-auto my-0 font-normal leading-10 mb-10px uppercase
      max-w-490px'
      style={{ textTransform: 'none' }}
      {...props}
    >
      {children}
    </h4>
  );
};
