import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzHXv5M69GKhXnG1xyyNJBqaCG_vpnbNs",
  authDomain: "tickets-1164d.firebaseapp.com",
  projectId: "tickets-1164d",
  storageBucket: "tickets-1164d.appspot.com",
  messagingSenderId: "199725830199",
  appId: "1:199725830199:web:92c34d69a5bc465915afb2",
  measurementId: "G-GKJRC24B0N",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
