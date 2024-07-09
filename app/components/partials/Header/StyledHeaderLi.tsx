import { HTMLProps } from 'react';

const StyledHeaderLi = ({
  children,
  ...props
}: HTMLProps<HTMLUListElement>) => {
  return (
    <ul
      className='list-none whitespace-nowrap font-share-tech-mono text-sm
      hover:text-link-hover hover:cursor-pointer'
      {...props}
    >
      {children}
    </ul>
  );
};

export default StyledHeaderLi;
