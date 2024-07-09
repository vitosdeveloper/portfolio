import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import EuImage from '@/public/eu.webp';
import Link from 'next/link';
import { ButtonHTMLAttributes, HTMLProps, memo } from 'react';
import Reveal from '../../containers/Reveal';
import { useTranslation } from 'react-i18next';
import AboutForm from '../../form/AboutForm';
import ImageContainer from '../../containers/ImageContainer';
import StyledHomeTitle from '../../text/StyledHomeTitle';
import StyledP from '../about/StyledP';
import StyledImage from './StyledImage';

const HomeContent = () => {
  const { t } = useTranslation();

  return (
    <StyledHomeContainer>
      <ContentContainer>
        <Reveal x={-75}>
          <ContentContainer style={{ marginTop: '.5rem' }}>
            <StyledHomeRole>{t('FULL-STACK DEVELOPER')}</StyledHomeRole>
            <StyledHomeTitle>{t('Hey! I am')}</StyledHomeTitle>
            <StyledHomeTitle gradientprop>
              {t('Vitor Fernandes')}
            </StyledHomeTitle>
            <StyledP>
              {t(
                'I am a Developer, currently focused on the Web, completely dedicated to the studies and work I do.'
              )}
            </StyledP>
            <StyledLinksContainer>
              <StyledButtonLink href='mailto:vitosdeveloper@gmail.com'>
                <StyledHireMeButton>
                  {t('HIRE ME')}
                  <MdOutlineMarkEmailRead
                    size={18}
                    style={{ position: 'relative', bottom: 0.51, right: 3 }}
                  />
                </StyledHireMeButton>
              </StyledButtonLink>
              <AboutForm />
            </StyledLinksContainer>

            <StyledSocialContainer>
              <StyledP>{t('Follow Me:')}</StyledP>
              <Link href='https://github.com/vitosdeveloper' target='_blank'>
                <BsGithub />
              </Link>
              <Link
                href='https://www.linkedin.com/in/vitosdeveloper/'
                target='_blank'
              >
                <BsLinkedin />
              </Link>
            </StyledSocialContainer>
          </ContentContainer>
        </Reveal>
      </ContentContainer>
      <ImageContainer>
        <Reveal once x={75}>
          <StyledImage src={'eu.webp'} alt='home-picture' />
        </Reveal>
      </ImageContainer>
    </StyledHomeContainer>
  );
};

export default memo(HomeContent);

const StyledLinksContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className='flex flex-wrap items-center gap-4 mx-0 mt-2 mb-4'
    >
      {children}
    </div>
  );
};

const StyledHomeContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className='flex flex-col s3:flex-row flex-warp items-center content-between w-full gap-8
    s5:content-center'
    >
      {children}
    </div>
  );
};

const ContentContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className='flex flex-col gap-4 leading-tight flex-1 s4:max-w-744px'
    >
      {children}
    </div>
  );
};

const StyledHomeRole = ({
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h3
      {...props}
      className='bg-gradient-to-l bg-clip-text text-transparent
    bg-color-special-color font-extrabold'
    >
      {children}
    </h3>
  );
};

const StyledButtonLink = ({ children, ...props }: any) => {
  return (
    <Link {...props} className='contents'>
      {children}
    </Link>
  );
};

const StyledHireMeButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className='flex items-center gap-2 justify-center rounded-lg h-12 tracking-widest border-none
     ease-linear w-48 bg-color-button font-semibold
    bg-gradient-to-l from-color-blue via-color-pink to-color-orange text-color-background
    contact-btn'
    >
      {children}
    </button>
  );
};

const StyledSocialContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props} className='flex gap-3 items-center'>
      {children}
    </div>
  );
};
