import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import EuImage from '@/public/eu.webp';
import styled from 'styled-components';
import Link from 'next/link';
import { ImageContainer, StyledHomeTitle, StyledImage } from '../../pages/Home';
import { memo } from 'react';
import Reveal from '../../containers/Reveal';
import { StyledP } from '../about/AboutContent';
import { useTranslation } from 'react-i18next';
import AboutForm from '../../form/AboutForm';

type Props = {};

const HomeContent = (props: Props) => {
  const { t } = useTranslation();

  return (
    <StyledHomeContainer>
      <ContentContainer>
        <Reveal x={-75}>
          <ContentContainer style={{ marginTop: '.5rem' }}>
            <StyledHomeRole>{t('FULL-STACK DEVELOPER')}</StyledHomeRole>
            <StyledHomeTitle>{t('Hey! I am')}</StyledHomeTitle>
            <StyledHomeTitle $gradientprop>
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
              <Link href='https://github.com/vitosnatios' target='_blank'>
                <BsGithub />
              </Link>
              <Link
                href='https://www.linkedin.com/in/vitosnatios/'
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
          <StyledImage src={EuImage} alt='home-picture' />
        </Reveal>
      </ImageContainer>
    </StyledHomeContainer>
  );
};

export default memo(HomeContent);

const StyledLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0 1rem 0;
`;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.2;
  /* max-width: 40%; */
  flex: 1;
  @media (max-width: 1200px) {
    max-width: 744px;
    /* align-items: center; */
  }
`;

const StyledHomeRole = styled.h3`
  opacity: 1;
  -webkit-text-fill-color: transparent;
  background: var(--color-special-color);
  -webkit-background-clip: text;
  background-clip: text;
  color: var(--white);
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const StyledButtonLink = styled(Link)`
  display: contents;
`;

const StyledHireMeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  justify-content: center;
  border-radius: 7px;
  height: 50px;
  letter-spacing: 1px;
  border: none;
  transition: all 0.1s ease;
  width: 190px;
  background: var(--color-button);
  cursor: pointer;
  color: var(--color-clear-background);
  font-weight: 600;
  &:hover {
    background: var(--color-button-hover);
  }
`;

const StyledSocialContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  svg {
    width: 25px;
    height: 25px;
  }
  svg:hover {
    fill: var(--color-button-hover);
  }
`;
