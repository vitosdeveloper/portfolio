import { HTMLProps, memo } from 'react';
import Section from '../../containers/Section';
import AboutTextComponent from './AboutTextComponent';
import ImageComponent from './ImageComponent';
import ShadowReflectionWrapper from '../../fx/ShadowReflectionWrapper';

const AboutContent = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <ShadowReflectionWrapper big circular>
        <ImageComponent />
      </ShadowReflectionWrapper>
      <AboutTextComponent />
    </div>
  );
};

export default memo(AboutContent);

export const AboutTextContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className='flex flex-col items-start pb-10 text-start flex-1 gap-4'
      {...props}
    >
      {children}
    </div>
  );
};

export const StyledAboutTitle = ({
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h4
      className='text-color-button-hover text-base tracking-widest font-normal
      leading-5 font-poppins'
      {...props}
    >
      {children}
    </h4>
  );
};

export const StyledAboutSubText = ({
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h4
      className='text-color-info-light text-4xl font-normal leading-10 mb-10px uppercase
      max-w-490px'
      {...props}
    >
      {children}
    </h4>
  );
};
