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
// import 'swiper/css';
import 'swiper/swiper-bundle.css';

import StyledComponentsRegistry from './lib/registry';

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
  description: "Vitor's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${inter.variable} ${shareTechMono.variable} ${poppins.variable} 
        ${firaCode.variable} ${jost.variable} ${rubik.variable}`}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
