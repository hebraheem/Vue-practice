import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFZjUA6eHkHwRCBz3ODIzGrs5JGyDDQiU",
  authDomain: "vue-practice-11a64.firebaseapp.com",
  projectId: "vue-practice-11a64",
  storageBucket: "vue-practice-11a64.appspot.com",
  messagingSenderId: "207103208941",
  appId: "1:207103208941:web:e8f802f7e208414f39cbe4",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
