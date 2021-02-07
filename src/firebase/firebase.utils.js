import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config = 
{
    apiKey: "AIzaSyAVewC9LZ0ovmeSD5P6tpuaDncB3wPrCMQ",
    authDomain: "crwn-db-c3a3e.firebaseapp.com",
    projectId: "crwn-db-c3a3e",
    storageBucket: "crwn-db-c3a3e.appspot.com",
    messagingSenderId: "7793601556",
    appId: "1:7793601556:web:ceb0f859b8412edec54b01",
    measurementId: "G-CNKEXTYEFC"
  };

  firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;