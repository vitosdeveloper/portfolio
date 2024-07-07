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

// const StyledNav = styled.nav<{ $showMenu: boolean }>`
//   @media (min-width: 1200px) {
//     display: flex;
//     border: none;
//     position: initial;
//     top: initial;
//     flex-direction: row;
//     align-items: center;
//     gap: 2rem;
//     padding: initial;
//   }
//   border-radius: 5px;
//   animation: MoveRightLeft 0.2s linear;
//   @keyframes MoveRightLeft {
//     0% {
//       transform: translatex(235px);
//     }
//     100% {
//       transform: translateY(0px);
//     }
//   }
//   position: absolute;
//   top: 4.5rem;
//   flex-direction: column;
//   align-items: end;
//   gap: 0.75rem;
//   padding: 1rem;

//   display: ${({ $showMenu }) => ($showMenu ? 'flex' : 'none')};
//   border-bottom: ${({ $showMenu }) =>
//     $showMenu ? '2px solid #8482ff' : 'none'};
//   border-left: ${({ $showMenu }) => ($showMenu ? '2px solid #8482ff' : 'none')};
//   border-right: ${({ $showMenu }) =>
//     $showMenu ? '2px solid #8482ff' : 'none'};

// `;

export default memo(StyledNav);
