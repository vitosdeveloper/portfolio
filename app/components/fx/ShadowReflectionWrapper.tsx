// import { HTMLProps, memo } from 'react';

// const ShadowReflectionWrapper = ({
//   children,
//   big,
//   circular,
//   ...props
// }: HTMLProps<HTMLDivElement> & {
//   big?: boolean;
//   circular?: boolean;
// }) => {
//   return (
//     <div>
//       <div className={`relative group`}>
//         <div
//           className={`absolute ${
//             big && 'mx-9'
//           } transitiona-all duration-500 opacity-15 -inset-px bg-gradient-to-r
//         dark:from-[#44BCFF] dark:via-[#FF44EC] dark:to-[#FF675E]
//         from-[#FF675E] via-[#FF44EC] to-[#FF675E]
//         group-hover:opacity-25 group-hover:-inset-1 group-hover:duration-0 animate-none
//         ${
//           circular
//             ? 'rounded-full blur-2xl opacity-15 group-hover:opacity-20'
//             : 'rounded-xl blur-xl'
//         }`}
//         ></div>
//         <div className='relative'>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default memo(ShadowReflectionWrapper);

import { HTMLProps, memo } from 'react';

type ShadowReflectionProps = {
  children: React.ReactNode;
  big?: boolean;
  circular?: boolean;
} & HTMLProps<HTMLDivElement>;

const ShadowReflectionWrapper: React.FC<ShadowReflectionProps> = ({
  children,
  big = false,
  circular = false,
  ...props
}) => {
  return (
    <div
      className={`shadow-reflection-wrapper ${big && 'big'} ${
        circular && 'circular'
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default memo(ShadowReflectionWrapper);
