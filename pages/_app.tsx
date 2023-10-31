import type { AppProps } from 'next/app';

import { Inter } from 'next/font/google';

import '../styles/globals.scss';
import '../styles/tailwind.css';

const InterFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --fontInter: ${InterFont.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
