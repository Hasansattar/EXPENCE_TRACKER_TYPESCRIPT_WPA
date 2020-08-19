importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js')
const firebaseConfig = {
  apiKey: "AIzaSyCxjQbcOComGi5OR8dftMYQATNBQfmh9h8",
  authDomain: "expencetrackerapp.firebaseapp.com",
  databaseURL: "https://expencetrackerapp.firebaseio.com",
  projectId: "expencetrackerapp",
  storageBucket: "expencetrackerapp.appspot.com",
  messagingSenderId: "908521551886",
  appId: "1:908521551886:web:b7cba4fff31047b58de45f"
  };

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

self.addEventListener('push', function(e) {
  var options = {
    body: 'This notification was generated from a push!'
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});