import React, { HTMLProps } from 'react';

const StyledP = ({ children, ...props }: HTMLProps<HTMLParagraphElement>) => {
  return (
    <p
      className='text-base leading-loose text-color-info-light font-poppins'
      {...props}
    >
      {children}
    </p>
  );
};

export default StyledP;
