import { HTMLProps, memo } from 'react';

const StyledNav = ({
  showMenu,
  children,
  ...props
}: HTMLProps<HTMLDivElement> & { showMenu: boolean }) => {
  return (
    <nav
      {...props}
      className={`flex bg-color-background flex-col s4:flex-row items-end gap-3 p-4 border-r-4 animate absolute top-16 animate-MoveRightLeft
        s4:top-1 s4:flex s4:items-center s5:gap-8 s4:border-none
        ${
          showMenu
            ? 'border-x-2 border-b-2 border-solid border-custom-purple'
            : 'hidden border-none'
        }`}
    >
      {children}
    </nav>
  );
};

export default memo(StyledNav);
