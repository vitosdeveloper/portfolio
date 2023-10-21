import type { Metadata } from 'next';
import { Inter, Share_Tech_Mono, Poppins } from 'next/font/google';
import './globals.css';
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
        className={`${inter.variable} ${shareTechMono.variable} ${poppins.variable}`}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
