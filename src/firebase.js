import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBZU9ctrMFqoLMjvSznmPXKYHqgkWOSsuQ",
    authDomain: "kudoser-manager.firebaseapp.com",
    databaseURL: "https://kudoser-manager.firebaseio.com",
    projectId: "kudoser-manager",
    storageBucket: "kudoser-manager.appspot.com",
    messagingSenderId: "367688733424",
    appId: "1:367688733424:web:3d8408fe169c2c1ad02835"
  };
  
firebase.initializeApp(firebaseConfig)

export default firebase