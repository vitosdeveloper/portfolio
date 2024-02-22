import type { Metadata } from 'next';
import {
  Inter,
  Share_Tech_Mono,
  Poppins,
  Fira_Code,
  Jost,
  Rubik,
} from 'next/font/google';
import './globals.css';
import 'swiper/css';
import StyledComponentsRegistry from './lib/registry';
// import { getCookie } from 'cookies-next';
// import { isDarkClientside } from './components/darkMode/DarkMode';
import { adicionarCookie, pegarCookie } from './utils/cookies';
import styled from 'styled-components';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
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
const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
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
    'vitosnatios',
    'vitos',
    'portfolio',
    'vitos portfolio',
    'vitosnatios portfolio',
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
  // const cookie = pegarCookie('theme');
  // let isDark;
  // if (!cookie) {
  //   adicionarCookie('theme', 'dark');
  //   isDark = true;
  // } else {
  //   isDark = cookie == 'dark';
  // }
  const isDark = true;

  return (
    <html lang='pt-BR'>
      <head>
        <style>
          {isDark
            ? `:root {
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
            }`
            : `:root {
              --color-background: rgb(232, 215, 255);
                  --color-white: #494a4d;
                  --color-dark: #d2d5df;
                  --link-hover: #b300b3;
                  --color-special-color: #0e79f3;
                  --color-info-light: #434857;
                  --color-button: linear-gradient(to left, #9d51f4, #6d6fdd, #f45182);
                  --color-button-hover: #0f65c985;
                  --color-card2: #0e79f328;
                  --color-footer-background: rgb(191, 159, 236);
                  --color-skill-background: #6d6fdd;
                  `}
        </style>
      </head>
      <body
        className={`${inter.variable} ${shareTechMono.variable} ${poppins.variable} 
        ${firaCode.variable} ${jost.variable} ${rubik.variable}`}
      >
        <>{children}</>
      </body>
    </html>
  );
}

// export const dynamic = 'force-static';
