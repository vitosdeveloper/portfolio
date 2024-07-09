import { HTMLProps } from 'react';

const Title = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1 className='text-color-info-light' {...props}>
      {children}
    </h1>
  );
};

export default Title;
