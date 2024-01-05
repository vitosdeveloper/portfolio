import Image from 'next/image';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { memo } from 'react';

type Props = { skills: { name: string; img: any }[]; reverse?: boolean };

const SkillsSwiper = ({ skills, reverse = false }: Props) => {
  return (
    <Swiper
      autoplay={{
        delay: 800,
        disableOnInteraction: false,
        reverseDirection: reverse,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
      slidesPerView='auto'
      spaceBetween={15}
      loop
      centeredSlides
      className='mySwiper'
    >
      <StyledSwiperContainer>
        {skills
          .concat(skills)
          .concat(skills)
          .map(({ name, img }, i) => (
            <SwiperSlide style={{ maxWidth: '200px' }} key={i}>
              <StyledSwiperSlideContainer key={i}>
                <IconContainer>
                  <Image
                    width={40}
                    height={40}
                    src={img}
                    alt={`${name} icon`}
                    loading='eager'
                  />
                </IconContainer>
                <h1>{name}</h1>
              </StyledSwiperSlideContainer>
            </SwiperSlide>
          ))}
      </StyledSwiperContainer>
    </Swiper>
  );
};

export default memo(SkillsSwiper);

export const StyledSwiperContainer = styled.div`
  color: var(--color-info-light);
`;

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
  margin-top: 2rem;
  height: 183px;
  :hover {
    color: var(--color-button-hover);
  }
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
