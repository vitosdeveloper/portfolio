import { HTMLProps, memo } from 'react';
import Reveal from '../../containers/Reveal';
import Image from 'next/image';
import Logo from '@/public/coding_icon.webp';
import LogoClean from '@/public/coding_icon_clean.webp';

const LogoH1 = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1
      {...props}
      style={{
        background:
          'linear-gradient(90deg,var(--color-button-hover) 0%,var(--color-blue) 50%,var(--color-orange) 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        whiteSpace: 'nowrap',
      }}
      className='text-2xl'
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
