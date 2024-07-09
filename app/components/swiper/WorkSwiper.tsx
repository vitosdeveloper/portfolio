import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import NoSsrWrapper from '../NoSsrWrapper/NoSsrWrapper';
import { Dispatch, HTMLProps, memo, SetStateAction } from 'react';
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
  const size = { ss: 260, sm: 280, md: 280, bg: 300 };

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
        <div>
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
        </div>
      </Swiper>
    </NoSsrWrapper>
  );
};

export default memo(WorkSwiper);

const StyledSlideContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className='p-4 transition-transform transform hover:scale-105'
      {...props}
    >
      {children}
    </div>
  );
};

const WorkSwiperSlide = ({ children, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className='
        flex flex-col items-start justify-start
        bg-color-card2 rounded-lg cursor-pointer
        h-[400px] pb-16
        shadow-lg
      '
      style={{ boxShadow: '-3px 1px 8px var(--color-skill-background)' }}
      {...props}
    >
      {children}
    </div>
  );
};

const WorkImageContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className='
        w-full mb-2
        min-h-[180px] max-h-[180px]
        md:min-h-[180px] md:max-h-[180px]
        sm:min-h-[110px] sm:max-h-[110px] sm:mb-2
      '
      {...props}
    >
      {children}
    </div>
  );
};

const WorkImage = (props: any) => {
  return <Image className='w-full h-full object-cover rounded-lg' {...props} />;
};

const WorkTitle = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2 className='text-color-button-hover px-4' {...props}>
      {children}
    </h2>
  );
};

const WorkDescription = ({
  children,
  ...props
}: HTMLProps<HTMLParagraphElement>) => {
  return (
    <p
      className='
        px-4 text-color-info-light
        leading-relaxed font-normal
        whitespace-pre-wrap overflow-y-auto w-full
        md:px-4
      '
      {...props}
    >
      {children}
    </p>
  );
};

const LinksContainer = ({ children, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className='
        inline-flex items-end justify-between
        absolute bottom-0 left-0 w-full
        p-8
      '
      {...props}
    >
      {children}
    </div>
  );
};

const WorkLinks = ({ children, ...props }: any) => {
  return (
    <Link
      className='
        text-gray-500 text-xs tracking-wide
        flex items-center gap-1
        hover:text-forestgreen
      '
      {...props}
    >
      {children}
    </Link>
  );
};
