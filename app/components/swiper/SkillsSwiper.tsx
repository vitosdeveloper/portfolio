'use client';
import Image from 'next/image';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { memo } from 'react';
import NoSsrWrapper from '../NoSsrWrapper/NoSsrWrapper';
import { Dispatch, SetStateAction } from 'react';
import SwiperCore from 'swiper';
import 'swiper/css/effect-coverflow';

type Props = {
  skills: { name: string; img: any }[];
  reverse?: boolean;
  name: 'first' | 'sec';
  setSwipers: Dispatch<
    SetStateAction<{
      first: SwiperCore | null;
      sec: SwiperCore | null;
    }>
  >;
};

const SkillsSwiper = ({ skills, reverse = false, setSwipers, name }: Props) => {
  return (
    <NoSsrWrapper>
      <Swiper
        onSwiper={(swiperInstance) =>
          setSwipers((prev) => ({ ...prev, [name]: swiperInstance }))
        }
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
          reverseDirection: reverse,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        slidesPerView='auto'
        spaceBetween={15}
        loop
      >
        <StyledSwiperContainer>
          {skills.concat(skills).map(({ name, img }, i) => (
            <SwiperSlide style={{ maxWidth: '200px' }} key={i}>
              <StyledSwiperSlideContainer key={i}>
                <IconContainer>
                  <Image
                    width={40}
                    height={40}
                    src={img}
                    alt={`${name} icon`}
                    loading='eager'
                    priority
                  />
                </IconContainer>
                <SkillName>{name}</SkillName>
              </StyledSwiperSlideContainer>
            </SwiperSlide>
          ))}
        </StyledSwiperContainer>
      </Swiper>
    </NoSsrWrapper>
  );
};

export default memo(SkillsSwiper);

const SkillName = styled.h1`
  color: var(--color-info-light);
`;

export const StyledSwiperContainer = styled.div``;

export const StyledSwiperSlideContainer = styled.div`
  align-items: center;
  background: var(--color-card2);
  border: 1px solid rgba(146, 146, 165, 0.1);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  height: 183px;
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
