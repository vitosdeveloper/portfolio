import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { HTMLProps, memo } from 'react';
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
        <div>
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
                <h1 className='text-color-info-light'>{name}</h1>
              </StyledSwiperSlideContainer>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </NoSsrWrapper>
  );
};

export default memo(SkillsSwiper);

const StyledSwiperSlideContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className='
        flex flex-col items-center justify-center bg-color-card2 
        rounded-lg cursor-pointer h-44 mb-1.5
        shadow-lg transition-transform transform hover:scale-105
      '
      style={{ boxShadow: '-3px 3px 8px var(--color-skill-background)' }}
      {...props}
    >
      {children}
    </div>
  );
};

const IconContainer = ({ children, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className='flex items-center justify-center bg-color-skill-background rounded-full
        h-16 w-16
      '
      {...props}
    >
      {children}
    </div>
  );
};
