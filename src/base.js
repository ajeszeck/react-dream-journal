import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHrYmgd6NTP_VQamcxY0agUWY7sWAsYw8",
    authDomain: "dream-journal-d4885.firebaseapp.com",
    databaseURL: "https://dream-journal-d4885.firebaseio.com",
    projectId: "dream-journal-d4885",
    storageBucket: "dream-journal-d4885.appspot.com",
    messagingSenderId: "11966370120"
  });

const base = Rebase.createClass(
  firebaseApp.database()
);

export { firebaseApp };

export default base;
