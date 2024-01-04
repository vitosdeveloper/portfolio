'use client';
import Section from '../containers/Section';
import SkillsSwiper from '../swiper/SkillsSwiper';
import {
  AboutTextContainer,
  StyledAboutSubText,
  StyledAboutTitle,
} from './About';
import styled from 'styled-components';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import Image from 'next/image';
// import Js from '@/public/skills/js.svg';
// import Ts from '@/public/skills/ts.svg';
// import Node from '@/public/skills/node.svg';
// import Php from '@/public/skills/php.svg';
// import Next from '@/public/skills/next.svg';
// import React from '@/public/skills/react.svg';
// import Express from '@/public/skills/express.svg';
// import Mongo from '@/public/skills/mongo.svg';
// import Mysql from '@/public/skills/mysql.svg';
// import Redux from '@/public/skills/redux.svg';
// import Electron from '@/public/skills/electron.svg';
// import bootstrap from '@/public/skills/bootstrap.svg';
// import css from '@/public/skills/css.svg';
// import docker from '@/public/skills/docker.svg';
// import git from '@/public/skills/git.svg';
// import ubuntu from '@/public/skills/ubuntu.svg';
// import postman from '@/public/skills/postman.svg';
// import sass from '@/public/skills/sass.svg';
// import tailwind from '@/public/skills/tailwind.svg';
// import styledI from '@/public/skills/styled.svg';
// import material from '@/public/skills/material.svg';
// import html from '@/public/skills/html.svg';
// import NoSsrWrapper from '../NoSsrWrapper/NoSsrWrapper';

type Props = { headerHeight: number };

const Skills = ({ headerHeight }: Props) => {
  // const skills = [
  //   { name: 'Javascript', img: Js },
  //   { name: 'Typescript', img: Ts },
  //   { name: 'ReactJS', img: React },
  //   { name: 'NextJS', img: Next },
  //   { name: 'PHP', img: Php },
  //   { name: 'NodeJS', img: Node },
  //   { name: 'ExpressJS', img: Express },
  //   { name: 'Mongo DB', img: Mongo },
  //   { name: 'MySQL', img: Mysql },
  //   { name: 'HTML', img: html },
  //   { name: 'CSS', img: css },
  //   { name: 'Git', img: git },
  //   { name: 'Redux', img: Redux },
  //   { name: 'Docker', img: docker },
  //   { name: 'Electron', img: Electron },
  //   { name: 'Bootstrap', img: bootstrap },
  //   { name: 'Ubuntu', img: ubuntu },
  //   { name: 'Postman', img: postman },
  //   { name: 'SASS', img: sass },
  //   { name: 'TailwindCSS', img: tailwind },
  //   { name: 'Styled Comp', img: styledI },
  //   { name: 'Material UI', img: material },
  // ];

  return (
    <SkillsSection id='#skills' $headerHeight={headerHeight}>
      <StyledCenterDiv>
        <SkillsTextContainer>
          <StyledAboutTitle>MY PROGRESS SO FAR</StyledAboutTitle>
          <SkillsTitle>My Skills</SkillsTitle>
        </SkillsTextContainer>
        <SkillsSwiper />
        {/* <StyledSwiper
            autoplay={{
              delay: 800,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            slidesPerView='auto'
            spaceBetween={15}
            loop
            centeredSlides
            className='mySwiper'
          >
            {skills.map(({ name, img }, i) => (
              <StyledSwiperSlide key={i}>
                <IconContainer>
                  <Image
                    width={40}
                    height={40}
                    src={img}
                    alt={`${name} icon`}
                  />
                </IconContainer>
                <h1>{name}</h1>
              </StyledSwiperSlide>
            ))}
          </StyledSwiper> */}
      </StyledCenterDiv>
    </SkillsSection>
  );
};

export const SkillsSection = styled(Section)`
  flex-direction: column;
  position: relative;
`;

export const StyledCenterDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

// export const StyledSwiper = styled(Swiper)`
//   color: var(--color-info-light);
//   margin-top: 2rem;
// `;

// export const StyledSwiperSlide = styled(SwiperSlide)`
//   align-items: center;
//   background: var(--color-card2);
//   border: 1px solid rgba(146, 146, 165, 0.1);
//   border-radius: 10px;
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 2rem 0;
//   max-width: 200px;
//   gap: 1rem;
//   height: 183px;
//   :hover {
//     color: var(--color-button-hover);
//   }
// `;

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

export default Skills;
