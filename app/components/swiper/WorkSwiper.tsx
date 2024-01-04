'use client';
import styled from 'styled-components';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StyledSwiperContainer,
  StyledSwiperSlideContainer,
} from './SkillsSwiper';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';

type Props = {};

const WorkSwiper = (props: Props) => {
  const { device, orientation } = useMediaQuery({
    breakpoints: { ss: 0, sm: 400, md: 768, bg: 1024 },
    debounceDelay: 300,
  });

  const size = { ss: 260, sm: 350, md: 300, bg: 600 };

  const a = [
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
    'EOQ',
  ];
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView='auto'
        spaceBetween={15}
        loop
        className='mySwiper'
        centeredSlides
      >
        <StyledWorkSwiper>
          {a.map((a, i) => (
            <SwiperSlide style={{ maxWidth: size[device!] }} key={i}>
              <WorkSwiperSlide>
                <h1>{a}</h1>
              </WorkSwiperSlide>
            </SwiperSlide>
          ))}
        </StyledWorkSwiper>
      </Swiper>
    </>
  );
};

export default WorkSwiper;

const StyledWorkSwiper = styled(StyledSwiperContainer)``;

const WorkSwiperSlide = styled(StyledSwiperSlideContainer)``;
