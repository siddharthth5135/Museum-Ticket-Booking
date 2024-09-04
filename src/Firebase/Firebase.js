import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcGwZsKYp0RGjoINRpt9KVyx5R3cM9COg",
  authDomain: "onlinebot-for-ticket-booking.firebaseapp.com",
  projectId: "onlinebot-for-ticket-booking",
  storageBucket: "onlinebot-for-ticket-booking.appspot.com",
  messagingSenderId: "792665385522",
  appId: "1:792665385522:web:ce7388824a121e886daa2b",
  measurementId: "G-SLTC9PCEY8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

export {app, analytics, auth, db}