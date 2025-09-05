// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6lvIUQ36aLbjomZnUqsIkkDgv017tcqI",
  authDomain: "webnet2.firebaseapp.com",
  projectId: "webnet2",
  storageBucket: "webnet2.firebasestorage.app",
  messagingSenderId: "323870835138",
  appId: "1:323870835138:web:bca571d5620b766651565b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.searchUsers = async function () {
  const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<p>Searching...</p>";

  try {
    const usersRef = collection(db, "users");
    const usernameQuery = query(usersRef, where("username", "==", searchInput));
    const realNameQuery = query(usersRef, where("realName", "==", searchInput));

    const [usernameSnap, realNameSnap] = await Promise.all([
      getDocs(usernameQuery),
      getDocs(realNameQuery)
    ]);

    resultsDiv.innerHTML = "";

    if (usernameSnap.empty && realNameSnap.empty) {
      resultsDiv.innerHTML = "<p>No users found 😞</p>";
      return;
    }

    const allResults = [...usernameSnap.docs, ...realNameSnap.docs];

    allResults.forEach(doc => {
      const data = doc.data();
      const userDiv = document.createElement("div");
      userDiv.className = "user-card";
      userDiv.innerHTML = `
        <p><strong>Username:</strong> ${data.username}</p>
        <p><strong>Real Name:</strong> ${data.realName}</p>
      `;
      resultsDiv.appendChild(userDiv);
    });
  } catch (err) {
    console.error("Error searching users:", err);
    resultsDiv.innerHTML = "<p>Error while searching. Try again later.</p>";
  }
};