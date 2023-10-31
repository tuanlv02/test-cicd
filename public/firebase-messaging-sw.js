// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the // generated config
var firebaseConfig = {
  apiKey: 'AIzaSyBqljV_ZETT2nhdNBL2U4BYZZ_XLSl8tXg',
  authDomain: 'fir-notifications-5bffb.firebaseapp.com',
  projectId: 'fir-notifications-5bffb',
  storageBucket: 'fir-notifications-5bffb.appspot.com',
  messagingSenderId: '210112823327',
  appId: '1:210112823327:web:9309a0045001995f03552a',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.onnotificationclick = (event) => {
  console.log('On notification click: ', event.notification);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: 'window',
      })
      .then((clientList) => {
        // for (const client of clientList) {
        //   if (client.url === '/' && 'focus' in client) return client.focus();
        // }
        if (clients.openWindow) return clients.openWindow('/hehe');
      }),
  );
};
