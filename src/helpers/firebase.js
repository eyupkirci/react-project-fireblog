// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyBFPljrhUYEaq65bQTT5MWwNmWDVQM7Nv8",
    authDomain: "fireblogapp-b50fa.firebaseapp.com",
    projectId: "fireblogapp-b50fa",
    storageBucket: "fireblogapp-b50fa.appspot.com",
    messagingSenderId: "852943685879",
    appId: "1:852943685879:web:1fbfd2e71c3c5d7972abf2"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const createUser = (email, password) => {
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

export const logIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == "auth/user-not-found") {
        alert("Please sign up to continue!");
      }
      if (errorCode == "auth/wrong-password") {
        alert("Invalid password!");
      }
    });
};

export const continueWithGoogle = () => {
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
    })
    .catch((error) => {
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

export const userObserver = (setCurrentUser, setPending) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setCurrentUser(user);
      setPending(false);
    } else {
      // User is signed out
      setCurrentUser(null);
      setPending(false);
      // ...
    }
  });
}; 

export const logOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      alert("Çıkış yapıldı!");
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

// firestore

export const db = getFirestore();

export const addData = async (currentUser, title, content, image) => {
  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      author: currentUser.email,
      title: title,
      content: content,
      comments: {
        commemt_count:0,


      },
      get_like_count: 0,
      image: image,
      published_date: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const readData = async (setData) => {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  setData(querySnapshot.docs);
};

export const updateLike = async (id) => {
  const likeRef = doc(db, "blogs", id);
  await updateDoc(likeRef, {
    get_like_count: increment(1),
  });
};
export const updateComment = async (id) => {
  const likeRef = doc(db, "blogs", id);
  await updateDoc(likeRef, {
    get_like_count: increment(1),
  });
};
