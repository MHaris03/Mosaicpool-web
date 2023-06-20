// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
// );

// const firebaseConfig = {
//     apiKey: "AIzaSyB50fQNecb07UD6AB7g7xFVH8E_Zg_Frh4",
//   authDomain: "vip-mosaic-pool.firebaseapp.com",
//   databaseURL: "https://vip-mosaic-pool-default-rtdb.firebaseio.com",
//   projectId: "vip-mosaic-pool",
//   storageBucket: "vip-mosaic-pool.appspot.com",
//   messagingSenderId: "384931088496",
//   appId: "1:384931088496:web:8b5a9370b17e3970060cb5",
//   measurementId: "G-LK9D8FYLQ7"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
