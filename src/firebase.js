import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8p8wlsEoROqxeObuUqKyb82vEEP1rcVM",
  authDomain: "react-facebook-6e2a9.firebaseapp.com",
  projectId: "react-facebook-6e2a9",
  storageBucket: "react-facebook-6e2a9.appspot.com",
  messagingSenderId: "249420077985",
  appId: "1:249420077985:web:57021fc148ae1dc3d709e0"
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage }
