import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChGSIFvOYlSIShLdJLhvM4_OBEM9GB92U",
  authDomain: "exam-cf33e.firebaseapp.com",
  databaseURL: "https://exam-cf33e.firebaseio.com",
  projectId: "exam-cf33e",
  storageBucket: "exam-cf33e.appspot.com",
  messagingSenderId: "812676132958",
  appId: "1:812676132958:web:deaacf6d9779e778d244cf",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
