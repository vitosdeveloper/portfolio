import { HTMLProps } from 'react';

const BackgroundOverlay = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className='top-0 left-0 right-0 bottom-0 bg-image1 bg-cover'
      {...props}
    >
      {children}
    </div>
  );
};

export default BackgroundOverlay;
