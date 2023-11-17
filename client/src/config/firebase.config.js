import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseKey = import.meta.env;
const firebaseConfig = {
  apiKey: firebaseKey.VITE_apiKey,
  authDomain: firebaseKey.VITE_authDomain,
  projectId: firebaseKey.VITE_projectId,
  storageBucket: firebaseKey.VITE_storageBucket,
  messagingSenderId: firebaseKey.VITE_messagingSenderId,
  appId: firebaseKey.VITE_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
