import { memo } from 'react';

const ThemeButton = ({ children, ...props }: any) => {
  return (
    <button
      // className='fixed p-2 bg-color-background z-20 bottom-0 left-0'
      style={{
        position: 'fixed',
        bottom: '4%',
        left: '3%',
        borderRadius: '50%',
        zIndex: 2,
        padding: '0.5rem',
        background: 'var(--color-background)',
        border: '1px solid var(--color-info-light)',
        cursor: 'pointer',
        color: 'var(--color-info-light)',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(ThemeButton);
