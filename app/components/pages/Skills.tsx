import Section from '../containers/Section';
import SkillsSwiper from '../swiper/SkillsSwiper';
import {
  AboutTextContainer,
  StyledAboutSubText,
  StyledAboutTitle,
} from './About';
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
import { memo, useState } from 'react';
import SwiperCore from 'swiper';
import Reveal from '../containers/Reveal';

type Props = { headerHeight: number };

const Skills = ({ headerHeight }: Props) => {
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
  ];

  return (
    <SkillsSection id='#skills' $headerHeight={headerHeight}>
      <StyledCenterDiv>
        <Reveal x={-75}>
          <SkillsTextContainer>
            <StyledAboutTitle>MY PROGRESS SO FAR</StyledAboutTitle>
            <SkillsTitle>My Skills</SkillsTitle>
          </SkillsTextContainer>
        </Reveal>
        <div onMouseEnter={pauseSwipers} onMouseLeave={playSwipers}>
          <Reveal x={-75}>
            <SkillsSwiper
              setSwipers={setSwipers}
              name='first'
              skills={skills.slice(0, 11)}
            />
          </Reveal>
        </div>
        <div onMouseEnter={pauseSwipers} onMouseLeave={playSwipers}>
          <Reveal x={75}>
            <SkillsSwiper
              setSwipers={setSwipers}
              name='sec'
              reverse
              skills={skills.slice(11)}
            />
          </Reveal>
        </div>
      </StyledCenterDiv>
    </SkillsSection>
  );
};

export default memo(Skills);

export const SkillsSection = styled(Section)`
  flex-direction: column;
  place-content: center;
`;

export const StyledCenterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const IconContainer = styled.div`
  background: rgb(23, 32, 61);
  border-radius: 50%;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SkillsTextContainer = styled(AboutTextContainer)`
  text-align: center;
  flex: 0;
`;

export const SkillsTitle = styled(StyledAboutSubText)`
  margin: 0 auto;
  text-transform: none;
`;
