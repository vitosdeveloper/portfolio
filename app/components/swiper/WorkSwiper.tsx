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
  const size = { ss: 260, sm: 350, md: 300, bg: 500 };

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
        spaceBetween={15}
        loop={true}
        className='mySwiper'
        centeredSlides
      >
        <StyledWorkSwiper>
          {works
            .concat(works)
            .map(({ name, description, img, live, repo }, i) => (
              <SwiperSlide
                onClick={() => window.open(live || repo, '_blank')}
                style={{ maxWidth: size[device!] }}
                key={i}
              >
                <WorkSwiperSlide>
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
                </WorkSwiperSlide>
              </SwiperSlide>
            ))}
        </StyledWorkSwiper>
      </Swiper>
    </NoSsrWrapper>
  );
};

export default WorkSwiper;

const StyledWorkSwiper = styled(StyledSwiperContainer)``;

const WorkSwiperSlide = styled.div`
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
  justify-content: start;
  align-items: start;
  height: 500px;
  padding: 2rem;
`;

const WorkImageContainer = styled.div`
  height: 180px;
  width: 100%;
  margin-bottom: 2rem;
`;

const WorkImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const WorkTitle = styled.h2`
  color: var(--color-button-hover);
`;

const WorkDescription = styled.p`
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
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex: 1;
  width: 100%;
`;

const WorkLinks = styled(Link)`
  color: rgb(144, 159, 175);
  font-size: 11px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
