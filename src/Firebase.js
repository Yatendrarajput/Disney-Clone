import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDRZ-75DIoKkl_8d5mjNMMVX3nOoTcT-qA",
  authDomain: "disney-clone-4e2f4.firebaseapp.com",
  projectId: "disney-clone-4e2f4",
  storageBucket: "disney-clone-4e2f4.appspot.com",
  messagingSenderId: "109292335648",
  appId: "1:109292335648:web:ebe9b64668b43847450245",
  measurementId: "G-79XCZW9XDE"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export { db, auth, provider, storage };
