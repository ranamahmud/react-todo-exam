import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqNdiyZAJsHaQku_bxtqSOFTaQqIQ_n7Q",
  authDomain: "todolist-755a9.firebaseapp.com",
  databaseURL: "https://todolist-755a9.firebaseio.com",
  projectId: "todolist-755a9",
  storageBucket: "todolist-755a9.appspot.com",
  messagingSenderId: "225178634603",
  appId: "1:225178634603:web:6f3113806b6319f72ee42e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
