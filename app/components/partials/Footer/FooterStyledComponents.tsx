import { HTMLProps } from 'react';

export const FooterTitle = ({
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1 className='text-color-info-light text-center text-sm' {...props}>
      {children}
    </h1>
  );
};

export const StyledFooter = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <footer className='p-8 pb-12 bg-color-footer-background' {...props}>
      {children}
    </footer>
  );
};
