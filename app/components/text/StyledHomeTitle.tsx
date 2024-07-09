import { HTMLProps, memo } from 'react';

const StyledHomeTitle = ({
  gradientprop,
  children,
  ...props
}: HTMLProps<HTMLHeadingElement> & { gradientprop?: boolean }) => {
  return (
    <h3
      className={`font-jost text-5xl bg-gradient-to-l bg-clip-text text-transparent
      font-bold
       ${
         gradientprop
           ? ' from-color-blue via-color-pink to-color-orange '
           : ' bg-color-info-light '
       }`}
      {...props}
    >
      {children}
    </h3>
  );
};
export default memo(StyledHomeTitle);
