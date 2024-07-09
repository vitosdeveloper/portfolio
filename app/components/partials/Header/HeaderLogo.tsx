import { HTMLProps, memo } from 'react';
import Reveal from '../../containers/Reveal';
import Image from 'next/image';
import Logo from '@/public/coding_icon.webp';
import LogoClean from '@/public/coding_icon_clean.webp';

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

const HeaderLogo = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className='flex items-center gap-1 whitespace-nowrap flex-nowrap'>
      <Image
        className='hidden custom-s1:block w-auto h-8'
        src={isDark ? Logo : LogoClean}
        alt='logo'
      />
      <Reveal x={-75}>
        <LogoH1>Vitos Developer</LogoH1>
      </Reveal>
    </div>
  );
};

export default memo(HeaderLogo);
