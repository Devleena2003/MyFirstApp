import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import  'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNTov8AyHr3fR7H4eg1h_dIOjeWD5E_pg",
    authDomain: "gotravel-ac46c.firebaseapp.com",
    projectId: "gotravel-ac46c",
    storageBucket: "gotravel-ac46c.appspot.com",
    messagingSenderId: "144161163736",
    appId: "1:144161163736:web:be4ed4baeee7e026a88aad"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
export {firebase}