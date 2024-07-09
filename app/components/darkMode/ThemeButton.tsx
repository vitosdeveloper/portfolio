import { memo } from 'react';

const ThemeButton = ({ children, ...props }: any) => {
  return (
    <button
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
