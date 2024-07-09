import { HTMLProps, memo } from 'react';

const Section = ({ children, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <section
      className='flex items-center w-full min-h-section-height
      mt-87px px-8 py-16 s5:p-8 s2:py-10px s2:px-4'
      {...props}
    >
      {children}
    </section>
  );
};

export default memo(Section);
