'use client';
import {
  SkillsSection,
  SkillsTextContainer,
  SkillsTitle,
  StyledCenterDiv,
} from './Skills';
import { StyledAboutTitle } from './About';
import WorkSwiper from '../swiper/WorkSwiper';

type Props = { headerHeight: number };

const Work = ({ headerHeight }: Props) => {
  return (
    <SkillsSection id='#work' $headerHeight={headerHeight}>
      <StyledCenterDiv>
        <SkillsTextContainer>
          <StyledAboutTitle>CHECK OUT MY WORKS</StyledAboutTitle>
          <SkillsTitle>MY WORK</SkillsTitle>
        </SkillsTextContainer>
        <WorkSwiper />
      </StyledCenterDiv>
    </SkillsSection>
  );
};

export default Work;
