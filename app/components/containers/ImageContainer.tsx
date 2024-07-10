import { HTMLProps, memo } from 'react';

const ImageContainer = ({ children, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div className='max-h-744px flex-1 flex justify-end min-w-240px' {...props}>
      {children}
    </div>
  );
};

export default memo(ImageContainer);
