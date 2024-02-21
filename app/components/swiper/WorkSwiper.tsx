'use client';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSwiperContainer } from './SkillsSwiper';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import NoSsrWrapper from '../NoSsrWrapper/NoSsrWrapper';
import { Dispatch, SetStateAction } from 'react';
import SwiperCore from 'swiper';

type Props = {
  works: {
    name: string;
    description: string;
    img: any;
    live: string;
    repo: string;
  }[];
  reverse?: boolean;
  name: 'first' | 'sec';
  setSwipers: Dispatch<
    SetStateAction<{
      first: SwiperCore | null;
      sec: SwiperCore | null;
    }>
  >;
};

const WorkSwiper = ({ works, reverse, setSwipers, name }: Props) => {
  const { device, orientation } = useMediaQuery({
    breakpoints: { ss: 0, sm: 400, md: 768, bg: 1024 },
    debounceDelay: 300,
  });
  const size = { ss: 260, sm: 300, md: 300, bg: 350 };

  return (
    <NoSsrWrapper>
      <Swiper
        onSwiper={(swiperInstance) =>
          setSwipers((prev) => ({ ...prev, [name]: swiperInstance }))
        }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: reverse,
          // pauseOnMouseEnter: true,
        }}
        // modules={[Autoplay]}
        slidesPerView='auto'
        spaceBetween={0}
        loop={true}
        className='mySwiper'
        // centeredSlides
      >
        <StyledWorkSwiper>
          {works
            .concat(works)
            .map(({ name, description, img, live, repo }, i) => (
              <SwiperSlide key={i} style={{ maxWidth: size[device!] }}>
                <StyledSlideContainer>
                  <WorkSwiperSlide
                    onClick={() =>
                      (live || repo) && window.open(live || repo, '_blank')
                    }
                  >
                    <WorkImageContainer>
                      <WorkImage
                        loading='eager'
                        width={300}
                        height={300}
                        src={img}
                        alt={name}
                        priority
                      />
                    </WorkImageContainer>
                    <WorkTitle>{name}</WorkTitle>
                    <WorkDescription>{description}</WorkDescription>
                  </WorkSwiperSlide>
                  <LinksContainer>
                    <div>
                      {live && (
                        <WorkLinks target='_blank' href={live}>
                          <FaExternalLinkAlt />
                          <span>LIVE DEMO</span>
                        </WorkLinks>
                      )}
                    </div>
                    <div>
                      {repo && (
                        <WorkLinks target='_blank' href={repo}>
                          <FaGithub />
                          <span>SOURCE CODE</span>
                        </WorkLinks>
                      )}
                    </div>
                  </LinksContainer>
                </StyledSlideContainer>
              </SwiperSlide>
            ))}
        </StyledWorkSwiper>
      </Swiper>
    </NoSsrWrapper>
  );
};

export default WorkSwiper;

const StyledSlideContainer = styled.div`
  padding: 15px;
  &:hover {
    transition: 0s ease-in-out;
    scale: 1.02;
  }
`;

const StyledWorkSwiper = styled(StyledSwiperContainer)``;

const WorkSwiperSlide = styled.div`
  align-items: center;
  background: var(--color-card2);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: start;
  align-items: start;
  height: 450px;
  padding-bottom: 4rem;
  box-shadow: -3px 1px 8px var(--color-skill-background);
`;

const WorkImageContainer = styled.div`
  min-height: 180px;
  max-height: 180px;
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 1000px) {
    height: 110px;
    margin-bottom: 0.5rem;
  }
`;

const WorkImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const WorkTitle = styled.h2`
  color: var(--color-button-hover);
  padding: 0rem 1rem 0.5rem;
  @media (max-width: 1000px) {
    padding: 1rem 1rem 0.5rem;
  }
`;

const WorkDescription = styled.p`
  padding: 0 1rem;
  color: var(--color-info-light);
  line-height: 1.5;
  font-weight: 300;
  white-space: break-spaces;
  overflow-y: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-info-light);
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--color-card2);
  }
  @media (max-width: 1000px) {
    padding: 0rem 1rem;
  }
`;

const LinksContainer = styled.div`
  display: inline-flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem 2rem;
`;

const WorkLinks = styled(Link)`
  color: rgb(144, 159, 175);
  font-size: 11px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  &:hover {
    color: forestgreen;
  }
`;
