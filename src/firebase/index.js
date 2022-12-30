import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY_VARIABLE,
  authDomain: process.env.VUE_APP_API_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_API_PROJECT_ID,
  storageBucket: process.env.VUE_APP_API_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_API_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_API_APP_ID,
};

/*eslint-disable */
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
