import type { AppProps } from 'next/app';

import { Inter } from 'next/font/google';

import '../styles/globals.scss';
import '../styles/tailwind.css';
import { useEffect } from 'react';
import { firebaseCloudMessaging } from 'src/firebase';
import { useSetAtom } from 'jotai';
import { notificationAtom } from '@store/notifications/notification';

const InterFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const setNotification = useSetAtom(notificationAtom);

  useEffect(() => {
    initFirebase();
  }, []);

  const initFirebase = async () => {
    const token = await firebaseCloudMessaging.init();

    if (token) {
      firebaseCloudMessaging.onMessage((payload: any) => {
        console.log(
          'TuanDZ ~ file: _app.tsx:26 ~ firebaseCloudMessaging.onMessage ~ payload:',
          payload,
        );

        setNotification((prev) => [
          ...prev,
          {
            title: payload.notification.title,
            body: payload.notification.body,
            id: payload.messageId,
          },
        ]);
      });
    }
  };

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
