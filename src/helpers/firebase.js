import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhSXMdVgvGGL1ycUKPyz9Z9DVe-3c4ljA",
  authDomain: "fireblog-app-b6b80.firebaseapp.com",
  projectId: "fireblog-app-b6b80",
  storageBucket: "fireblog-app-b6b80.appspot.com",
  messagingSenderId: "549234268477",
  appId: "1:549234268477:web:39a8628c166c9e9c700d54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const createUser=(email,password)=>{

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
};

export const login=(email,password)=>{

const auth = getAuth();

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

};

export const continueWithGoogle=()=>{

const provider = new GoogleAuthProvider();

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

};

export const userObserver=(setCurrentUser)=>{

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user)
    } else {
        // User is signed out
        // ...
    }
    });

};

export const logOut =()=>{

    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });

};