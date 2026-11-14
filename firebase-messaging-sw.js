
importScripts(
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAoRGRHb0qZPvCfZUCFK8op0p0DH-UXb6I",
  authDomain: "my-homework-5919f.firebaseapp.com",
  projectId: "my-homework-5919f",
  storageBucket: "my-homework-5919f.firebasestorage.app",
  messagingSenderId: "394792880053",
  appId: "1:394792880053:web:ae5e1416c5313920acfbfc",
  measurementId: "G-N38DG713WM"
});

const messaging = firebase.messaging();
