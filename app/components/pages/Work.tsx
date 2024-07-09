'use client';
import {
  SkillsSection,
  SkillsTextContainer,
  SkillsTitle,
  StyledCenterDiv,
} from './Skills';
import Reveal from '../containers/Reveal';
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
import lepar from '@/public/works/lepar.webp';
import storm from '@/public/works/storm.webp';
import denys2 from '@/public/works/denys2.webp';
import jungle from '@/public/works/jungle.webp';
import optimizer from '@/public/works/optimizer.webp';
import { StyledAboutTitle } from '../contents/about/AboutContent';
import { useTranslation } from 'react-i18next';
import Section from '../containers/Section';

SwiperCore.use([Autoplay]);

const Work = () => {
  const { t } = useTranslation();
  const [swipers, setSwipers] = useState<{
    first: SwiperCore | null;
    sec: SwiperCore | null;
  }>({
    first: null,
    sec: null,
  });

  const pauseSwipers = () => {
    if (!swipers?.first || !swipers?.sec) return;
    swipers?.first?.autoplay?.stop();
    swipers?.sec?.autoplay?.stop();
  };

  const playSwipers = () => {
    if (!swipers?.first || !swipers?.sec) return;
    swipers?.first?.autoplay?.start();
    swipers?.sec?.autoplay?.start();
  };

  const works = [
    {
      name: 'Denys Tips - Blackjack',
      description: t(
        'Freelance \nLanding page for tutorial videos an)d contact presentation.'
      ),
      img: denys2,
      live: '',
      repo: '',
      personal: false,
    },
    {
      name: 'Storm Store',
      description: t('Freelance\nRagnarok Zeny and Items E-commerce.'),
      img: storm,
      live: '',
      repo: '',
      personal: false,
    },
    {
      name: 'Le Parfum',
      description: t(
        `Freelance\nI studied two versions of the Bling API (ERP) as the client aimed to develop a fully customized e-commerce platform, integrating and updating information through the Bling API. However, while already in development, after a certain evaluation of the APIs, the latest version proved to be incompatible with our requirements. On the other hand, the previous version, although meeting our requirements, was scheduled to cease operation in the middle of the year. Faced with this, we opted for the most viable solution, which involved using pre-built templates offered by NumveShop, a Bling partner. From this template, I made some specific adjustments through CSS.`
      ),
      img: lepar,
      live: 'https://www.leparfumdf.com.br/',
      repo: '',
      personal: false,
    },
    {
      name: 'Denys Tips',
      description: t(
        `Freelance\nI developed a landing page with a focus on responsiveness, designing according to client preferences, also creating thumbnails and editing videos.`
      ),
      img: bet,
      live: '',
      repo: '',
      personal: false,
    },
    {
      name: 'Denys Tips - Aprenda a dominar a Jungle',
      description: t('Freelance \nLanding page for e-book sales.'),
      img: jungle,
      live: '',
      repo: '',
      personal: false,
    },
    {
      name: 'wtpsapp - Aplicativos Mobile',
      description: t(
        `Freelance\nDevelopment and customization of features on demand in mobile apps built with React Native, within an ecosystem that includes a translation system, shipping functionality, notifications, sales, barcode scanning and recording, use of a currency conversion API, product registration, services, real estate, and various others. The project utilizes React Native with TypeScript, Styled-Components, and the backend is built with PHP.`
      ),
      img: wtp,
      live: '',
      repo: '',
      personal: false,
    },
    {
      name: 'Arte e Brilho Artesanato',
      description: t(
        `Freelance\nDevelopment and maintenance of an Ecommerce platform for religious articles, including inventory and product management through an internal system that I developed. Key technologies used: NextJS (React), TypeScript (JavaScript), and TailwindCSS.`
      ),
      img: artesanato,
      live: '',
      repo: '',
      personal: false,
    },
    {
      name: 'devgames-app',
      description: t(
        `Freelance\nI worked on the successful migration of two projects to cutting-edge technologies. The first project, originally built with Node.js, JavaScript, jQuery, and HTML, and the second one with Preact, were modernized with TypeScript and Next.js along with Serverless Functions, as per the client's request.`
      ),
      img: devgames,
      live: '',
      repo: 'https://github.com//lawnmower-backup',
      personal: false,
    },
    {
      name: 'Image Optimizer By Vitos',
      description: t(
        `Image Optimizer.\nIt does optimize your images by formating it to .webp and limiting It's max resolution to 1080px. Just paste it inside some folder and execute it, it will optimize all images that aren't .webp from this folder and its subfolders.`
      ),
      img: optimizer,
      live: '',
      repo: 'https://github.com/vitosdeveloper/Image-Optimizer-By-Vitos/releases',
      personal: true,
    },
    {
      name: 'Felino Chan',
      description: t(
        `Imageboard that generates random cat pictures for your posts.`
      ),
      img: felino,
      live: 'https://felinochan.vercel.app/hw/1',
      repo: 'https://github.com/vitosdeveloper/felino-chan-Client',
      personal: true,
    },
    {
      name: 'Fictional Ecommerce',
      description: t(`E-commerce prototype.`),
      img: fictional,
      live: 'https://vitos-e-commerce.netlify.app/',
      repo: 'https://github.com/vitosdeveloper/E-commerce',
      personal: true,
    },
    {
      name: 'CaffeineCraft',
      description: t(
        `Discover the world's finest coffeee beans and brew your perfect cup of coffeee. Ecommerce-like website.`
      ),
      img: coffee,
      live: 'https://caffeine-craft.vercel.app/',
      repo: 'https://github.com/vitosdeveloper/CaffeineCraft',
      personal: true,
    },
    {
      name: 'DáPãoDelivery',
      description: t(`Product and Order Manager for a Bakery.`),
      img: dapao,
      live: 'https://da-pao-delivery.vercel.app/',
      repo: 'https://github.com/vitosdeveloper/DaPaoDelivery-Frontend',
      personal: true,
    },
    {
      name: 'Portal Educador',
      description: t(
        'Grade Manager for Teachers and Principals.\nLogins at: "/api/showLogins", every pass is "asd"'
      ),
      img: educa,
      live: 'https://portal-educador.vercel.app',
      repo: 'https://github.com/vitosdeveloper/portal-educador',
      personal: true,
    },
    {
      name: 'Portfolio',
      description: t(`This website, like, literally.`),
      img: port,
      live: 'https://vitosdeveloper.vercel.app/',
      repo: 'https://github.com/vitosdeveloper/portfolio',
      personal: true,
    },
  ];

  return (
    <Section id='#work'>
      <StyledCenterDiv>
        <SkillsTextContainer>
          <Reveal x={75}>
            <StyledAboutTitle>{t('CHECK OUT MY EXPERIENCE')}</StyledAboutTitle>
            <SkillsTitle>{t('Professional Environment')}</SkillsTitle>
          </Reveal>
        </SkillsTextContainer>
        <div onMouseEnter={pauseSwipers} onMouseLeave={playSwipers}>
          <Reveal x={-75}>
            <WorkSwiper
              name='first'
              setSwipers={setSwipers}
              works={works.filter((w) => !w.personal)}
            />
          </Reveal>
        </div>
        <SkillsTextContainer>
          <Reveal x={-75}>
            <SkillsTitle>{t('Personal Projects')}</SkillsTitle>
          </Reveal>
        </SkillsTextContainer>
        <div onMouseEnter={pauseSwipers} onMouseLeave={playSwipers}>
          <Reveal x={75}>
            <WorkSwiper
              name='sec'
              setSwipers={setSwipers}
              works={works.filter((w) => w.personal)}
              reverse
            />
          </Reveal>
        </div>
      </StyledCenterDiv>
    </Section>
  );
};

export default memo(Work);
