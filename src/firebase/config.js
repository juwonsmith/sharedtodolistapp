import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJXGAU0OPOZ5OV2Ebb1BtlDa1kNFblJ60",
    authDomain: "todolist-e20da.firebaseapp.com",
    projectId: "todolist-e20da",
    storageBucket: "todolist-e20da.appspot.com",
    messagingSenderId: "226246187748",
    appId: "1:226246187748:web:fbedec9037a2cada1b2af1"
  };

//initialize app

firebase.initializeApp(firebaseConfig)

//initialize config

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export {projectAuth, projectFirestore, timestamp}