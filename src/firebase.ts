// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getMessaging, getToken, isSupported, onMessage } from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqljV_ZETT2nhdNBL2U4BYZZ_XLSl8tXg',
  authDomain: 'fir-notifications-5bffb.firebaseapp.com',
  projectId: 'fir-notifications-5bffb',
  storageBucket: 'fir-notifications-5bffb.appspot.com',
  messagingSenderId: '210112823327',
  appId: '1:210112823327:web:9309a0045001995f03552a',
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const firebaseCloudMessaging = {
  onMessage: async (onCallback: any) => {
    try {
      const messaging = getMessaging();
      onMessage(messaging, onCallback);
    } catch {}
  },

  init: async function () {
    try {
      // const analytics = getAnalytics(app);

      const isSupport = await isSupported();

      if (!isSupport) {
        console.log('ABCD', 'fcm token');
        return isSupport;
      }

      const messaging = getMessaging(app);

      await Notification.requestPermission().then((res) => {
        console.log('TuanDZ', res);
      });

      const fcmToken = await getToken(messaging, {
        vapidKey:
          'BABJI3PvuAxsImhIjZDnDfJ5i8SRSm5UdsqyK1mm3bOrRRKxNHDQ5VXJHbEz_7KjSivb5_GQrrojonoxmS26CPE',
      });

      if (fcmToken) {
        // Send the token to your server and update the UI if necessary
        // save the token in your database
        console.log('ABCD', 'fcm_token_client', fcmToken);

        return fcmToken;
      } else {
        // Show permission request UI
        console.error(
          'NOTIFICACION, No registration token available. Request permission to generate one.',
        );
      }
    } catch (error) {
      console.error(error);
    }
  },
};

export { firebaseCloudMessaging };
