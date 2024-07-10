import { HTMLProps, memo } from 'react';
import Reveal from '../../containers/Reveal';
import { getCookie } from 'cookies-next';
import ShadowReflectionWrapper from '../../fx/ShadowReflectionWrapper';

const LogoH1 = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1
      {...props}
      className='text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent 
      from-color-button-hover via-color-blue to-color-orange'
    >
      {children}
    </h1>
  );
};

const HeaderLogo = () => {
  const cookie = getCookie('theme');
  let isDark = true;
  if (cookie) {
    isDark = cookie == 'dark';
  }

  return (
    <div className='flex items-center gap-1 whitespace-nowrap flex-nowrap'>
      <ShadowReflectionWrapper>
        <img
          className='hidden custom-s1:block w-auto h-8'
          src={isDark ? 'coding_icon.webp' : 'coding_icon_clean.webp'}
          alt='logo-img'
        />
      </ShadowReflectionWrapper>
      <ShadowReflectionWrapper>
        <Reveal x={-75}>
          <LogoH1>Vitos Developer</LogoH1>
        </Reveal>
      </ShadowReflectionWrapper>
    </div>
  );
};

export default memo(HeaderLogo);
