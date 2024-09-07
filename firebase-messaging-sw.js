/* eslint-env serviceworker */
/* global firebase */

importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBHjfu5_sM5FyDkVpgqIJ1DJsot3EAIzcg",
  authDomain: "hopfirst-65914.firebaseapp.com",
  databaseURL: "https://hopfirst-65914.firebaseio.com",
  projectId: "hopfirst-65914",
  storageBucket: "hopfirst-65914.appspot.com",
  messagingSenderId: "189210679564",
  appId: "1:189210679564:web:a74c91b1370c1a55981129",
  measurementId: "G-QN9GJ1V0P2"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "firebase  [firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };


  self.registration.showNotification(notificationTitle, notificationOptions);
});