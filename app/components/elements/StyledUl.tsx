import { HTMLProps } from 'react';

const StyledUl = ({ children, ...props }: HTMLProps<HTMLUListElement>) => {
  return (
    <ul
      className='flex flex-col items-end gap-5 s4:flex-row s4:gap-2'
      {...props}
    >
      {children}
    </ul>
  );
};

export default StyledUl;
