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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkClass = (await isDark()) ? '' : 'dark';
  return (
    <html lang='pt-BR' className={darkClass}>
      <body
        className={` ${shareTechMono.variable} ${poppins.variable} ${jost.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
