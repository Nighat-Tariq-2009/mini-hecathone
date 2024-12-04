 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup, } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  import { getFirestore, collection, addDoc , doc, setDoc , getDocs,deleteDoc,updateDoc, serverTimestamp,getDoc,onSnapshot, increment } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyCB67_7LSM3MqCEY103-3gr6pBDyaLBHUA",
    authDomain: "mini-hecathone.firebaseapp.com",
    projectId: "mini-hecathone",
    storageBucket: "mini-hecathone.firebasestorage.app",
    messagingSenderId: "135884487457",
    appId: "1:135884487457:web:7d0c6c296099fdf1ed9c60"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);

  export { auth, createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup, provider ,
    db,
    collection, addDoc , doc, setDoc , getDocs,deleteDoc,updateDoc,
     serverTimestamp,getDoc,onSnapshot, increment

}