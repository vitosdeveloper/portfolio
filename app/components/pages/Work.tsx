'use client';
import {
  SkillsSection,
  SkillsTextContainer,
  SkillsTitle,
  StyledCenterDiv,
} from './Skills';
import { StyledAboutTitle } from './About';
import { memo, useState } from 'react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import WorkSwiper from '../swiper/WorkSwiper';
import felino from '@/public/works/felino.webp';
import fictional from '@/public/works/fictional.webp';
import coffee from '@/public/works/coffee.webp';
import dapao from '@/public/works/dapao.webp';
import educa from '@/public/works/educa.webp';
import devgames from '@/public/works/devgames.webp';
import bet from '@/public/works/bet.webp';
import wtp from '@/public/works/wtp.webp';
import artesanato from '@/public/works/artesanato.webp';
import port from '@/public/works/port.webp';
import Reveal from '../containers/Reveal';

SwiperCore.use([Autoplay]);

type Props = { headerHeight: number };

const Work = ({ headerHeight }: Props) => {
  const [swipers, setSwipers] = useState<{
    first: SwiperCore | null;
    sec: SwiperCore | null;
  }>({
    first: null,
    sec: null,
  });

  const pauseSwipers = () => {
    if (!swipers.first || !swipers.sec) return;
    swipers.first.autoplay.stop();
    swipers.sec.autoplay.stop();
  };

  const playSwipers = () => {
    if (!swipers.first || !swipers.sec) return;
    swipers.first.autoplay.start();
    swipers.sec.autoplay.start();
  };

  const works = [
    {
      name: 'devganes-app',
      description: `Freelance
I worked on the successful migration of two projects to cutting-edge technologies. The first project, originally built with Node.js, JavaScript, jQuery, and HTML, and the second one with Preact, were modernized with TypeScript and Next.js along with Serverless Functions, as per the client's request.`,
      img: devgames,
      live: '',
      repo: 'https://github.com/vitosnatios/lawnmower-backup',
    },
    {
      name: 'Denys Tips',
      description: `Freelance
I developed a landing page with a focus on responsiveness, designing according to client preferences, also creating thumbnails and editing videos.`,
      img: bet,
      live: '',
      repo: '',
    },
    {
      name: 'wtpsapp - Aplicativos Mobile',
      description: `Freelance
Development and customization of features on demand in mobile apps built with React Native, within an ecosystem that includes a translation system, shipping functionality, notifications, sales, barcode scanning and recording, use of a currency conversion API, product registration, services, real estate, and various others. The project utilizes React Native with TypeScript, Styled-Components, and the backend is built with PHP.`,
      img: wtp,
      live: '',
      repo: '',
    },
    {
      name: 'Arte e Brilho Artesanato',
      description: `Freelance
Development and maintenance of an Ecommerce platform for religious articles, including inventory and product management through an internal system that I developed. Key technologies used: NextJS (React), TypeScript (JavaScript), and TailwindCSS.`,
      img: artesanato,
      live: '',
      repo: '',
    },
    {
      name: 'Felino Chan',
      description: `Personal Project
Imageboard that generates random cat pictures for your posts.`,
      img: felino,
      live: 'https://felinochan.vercel.app/hw/1',
      repo: 'https://github.com/vitosnatios/felino-chan-Client',
    },
    {
      name: 'Fictional Ecommerce',
      description: `Personal Project
E-commerce prototype.`,
      img: fictional,
      live: 'https://vitos-e-commerce.netlify.app/',
      repo: 'https://github.com/vitosnatios/E-commerce',
    },
    {
      name: 'CaffeineCraft',
      description: `Personal Project
Discover the world's finest coffeee beans and brew your perfect cup of coffeee. Ecommerce-like website.`,
      img: coffee,
      live: 'https://caffeine-craft.vercel.app/',
      repo: 'https://github.com/vitosnatios/CaffeineCraft',
    },
    {
      name: 'DáPãoDelivery',
      description: `Personal Project
Product and Order Manager for a Bakery.`,
      img: dapao,
      live: 'https://da-pao-delivery.vercel.app/',
      repo: 'https://github.com/vitosnatios/DaPaoDelivery-Frontend',
    },
    {
      name: 'Portal Educador',
      description: `Personal Project
Grade Manager for Teachers and Principals.
Logins at: "/api/showLogins", every pass is "asd"`,
      img: educa,
      live: 'https://portal-educador.vercel.app',
      repo: 'https://github.com/vitosnatios/portal-educador',
    },
    {
      name: 'Portfolio',
      description: `Personal Project
Grade Manager for Teachers and Principals.
Logins at: "/api/showLogins", every pass is "asd"`,
      img: port,
      live: 'https://vitosdeveloper.vercel.app/',
      repo: 'https://github.com/vitosnatios/portfolio',
    },
  ];

  return (
    <SkillsSection id='#work' $headerHeight={headerHeight}>
      <StyledCenterDiv>
        <SkillsTextContainer>
          <Reveal y={-75}>
            <StyledAboutTitle>CHECK OUT MY EXPERIENCE</StyledAboutTitle>
            <SkillsTitle>Professional Environment</SkillsTitle>
          </Reveal>
        </SkillsTextContainer>
        <div onMouseEnter={pauseSwipers} onMouseLeave={playSwipers}>
          <Reveal x={-75}>
            <WorkSwiper
              name='first'
              setSwipers={setSwipers}
              works={works.filter((w) => w.description.includes('Freelance'))}
            />
          </Reveal>
        </div>
        <SkillsTextContainer>
          <Reveal y={-75}>
            <SkillsTitle>Personal Projects</SkillsTitle>
          </Reveal>
        </SkillsTextContainer>
        <div onMouseEnter={pauseSwipers} onMouseLeave={playSwipers}>
          <Reveal x={75}>
            <WorkSwiper
              name='sec'
              setSwipers={setSwipers}
              works={works.filter((w) =>
                w.description.includes('Personal Project')
              )}
              reverse
            />
          </Reveal>
        </div>
      </StyledCenterDiv>
    </SkillsSection>
  );
};

export default memo(Work);
