import { HTMLProps, memo } from 'react';

const StyledNav = ({
  showMenu,
  children,
  ...props
}: HTMLProps<HTMLDivElement> & { showMenu: boolean }) => {
  return (
    <nav
      {...props}
      className={`flex bg-color-background s4:bg-transparent flex-col s4:flex-row items-end gap-3 p-4 absolute top-16 
        s4:top-1 s4:flex s4:items-center s5:gap-8 s4:border-none
        ${
          showMenu
            ? 'border-x-2 border-b-2 border-solid border-color-custom-purple'
            : 'hidden border-none'
        }`}
    >
      {children}
    </nav>
  );
};

export default memo(StyledNav);
