import type { Metadata } from 'next';
import { Share_Tech_Mono, Poppins, Jost } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import { isDark } from './utils/isDark';

const shareTechMono = Share_Tech_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-share_tech_mono',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: 'Vitos Developer',
  description: 'Vitos Developer Portfolio',
  icons: [{ rel: 'icon', url: 'favicon.ico', type: 'image/x-icon' }],
  keywords: [
    'Vitos Developer',
    'vitos developer',
    'VitosDeveloper',
    'vitosdeveloper',
    'vitos',
    'portfolio',
    'vitos portfolio',
    'vitos developer portfolio',
    'Vitor Fernandes',
    'Vitor Fernandes Gonçalves',
    'Vitor Águas Claras',
    'Vitor Fernandes Águas Claras',
    'Vitor Fernandes Gonçalves Águas Claras',
    'Vitor Fernandes Gonçalves DF',
    'develooper',
    'web development',
    'Distrito Federal',
    'programador DF',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <head>
        <style>
          {isDark()
            ? `:root {
                --color-clear-background: #0d012c;
                --color-background: #0d012c;
                --color-white: #fff;
                --color-dark: #161818;
                --link-hover: #0056b3;
                --color-special-color: #eff30e;
                --color-info-light: #c7cbd8;
                --color-button: linear-gradient(to left, #17c0e9, #c96ddd, #f45162);
                --color-button-hover: #59c378;
                --color-card2: #14143a;
                --color-footer-background: rgb(20, 4, 43);
                --color-skill-background: rgb(23, 32, 61);
                --color-blue: #17c0e9;
                --color-orange: #f45162;
            }`
            : `:root {
                --color-clear-background: #a1b3fc;
                --color-background: #a1b3fc;
                --color-white: #494a4d;
                --color-dark: #d2d5df;
                --link-hover: #b300b3;
                --color-special-color: #0e79f3;
                --color-info-light: #434857;
                --color-button: linear-gradient(to left, #42179962, #7868f0, #765eff);
                --color-button-hover: #2b0fc985;
                --color-card2: #1a50ff28;
                --color-footer-background: rgb(191, 159, 236);
                --color-skill-background: #6d6fdd;
                --color-blue: #765eff;
                --color-orange: #765eff;
            `}
        </style>
      </head>
      <body
        className={` ${shareTechMono.variable} ${poppins.variable} ${jost.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

// export const dynamic = 'force-static';
