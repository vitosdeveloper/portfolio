import { HTMLProps } from 'react';

const StyledHeader = ({ children, ...props }: HTMLProps<HTMLHeadElement>) => {
  return (
    <header
      className='h-16 flex px-2.5 justify-between items-center top-0 fixed w-full z-20 bg-color-background
      s5:px-8'
      {...props}
    >
      {children}
    </header>
  );
};

export default StyledHeader;
