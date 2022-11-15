/* eslint-disable camelcase */
import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { Inter, Source_Sans_Pro } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
});

const sourceSansPro = Source_Sans_Pro({
  variable: '--font-source-sans-pro',
  weight: ['400'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${sourceSansPro.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
