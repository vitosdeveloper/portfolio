/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-clear-background': 'var(--color-clear-background)',
        'color-background': 'var(--color-background)',
        'color-white': 'var(--color-white)',
        'color-dark': 'var(--color-dark)',
        'link-hover': 'var(--link-hover)',
        'color-special-color': 'var(--color-special-color)',
        'color-info-light': 'var(--color-info-light)',
        'color-blue': 'var(--color-blue)',
        'color-orange': 'var(--color-orange)',
        'color-button': 'var(--color-button)',
        'color-button-hover': 'var(--color-button-hover)',
        'color-card2': 'var(--color-card2)',
        'color-footer-background': 'var(--color-footer-background)',
        'color-skill-background': 'var(--color-skill-background)',
        'color-pink': 'var(--color-pink)',
      },
      backgroundImage: {
        image1: "url('/background.webp')",
      },
      fontFamily: {
        poppins: 'var(--font-poppins), sans-serif',
        jost: 'var(--font-jost)',
      },
      spacing: {
        'section-height': 'calc(100vh - 62.67px)',
        '10px': '10px',
        '72px': '72px',
        '87px': '87px',
        '240px': '240px',
        '490px': '490px',
        '744px': '744px',
        initial: 'initial',
      },
      animation: {
        MoveRightLeft: 'MoveRightLeft 0.2s linear',
      },
      screens: {
        s2: '501px',
        s3: '701px',
        s4: '1001px',
        s5: '1201px',
        'custom-s1': '333px',
      },
    },
  },
  plugins: [],
};
