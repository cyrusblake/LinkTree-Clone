// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtjviGV0w8XPCeVKJIHKA9n4simcrS4rc",
  authDomain: "ltc-project-cy.firebaseapp.com",
  projectId: "ltc-project-cy",
  storageBucket: "ltc-project-cy.firebasestorage.app",
  messagingSenderId: "927269902874",
  appId: "1:927269902874:web:678665e9c5a2e205c64fa3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    window.alert(`Signed in with ${user.email}`);
    window.location.reload();
  } catch (e) {
    window.alert(e.message);
  }
};

export const signOutFromGoogle = async () => {
  try {
    await auth.signOut();
    window.alert("Signed out!");
    window.location.reload();
  } catch (e) {
    window.alert(e.message);
  }
};

// export const getUserID = () => {
//   return auth.currentUser ? auth.currentUser.email : null;
// }