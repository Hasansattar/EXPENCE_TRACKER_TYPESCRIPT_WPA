import firebase from 'firebase'

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

export function GetToken() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === "granted") {
            messaging.getToken().then((token) => {
                console.log("TOKEN: ", token)
            }).catch((err) => {
                console.log(err)
            })
        }
    })
}