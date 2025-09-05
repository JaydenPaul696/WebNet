// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6lvIUQ36aLbjomZnUqsIkkDgv017tcqI",
  authDomain: "webnet2.firebaseapp.com",
  projectId: "webnet2",
  storageBucket: "webnet2.firebasestorage.app",
  messagingSenderId: "323870835138",
  appId: "1:323870835138:web:bca571d5620b766651565b",
  databaseURL: "https://webnet2-default-rtdb.firebaseio.com"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };