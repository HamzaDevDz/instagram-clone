import firebase from "firebase"

const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjEwX1N9e35ewScq8GWmyqxQvQpnSl03A",
    authDomain: "instagram-clone-2c956.firebaseapp.com",
    projectId: "instagram-clone-2c956",
    storageBucket: "instagram-clone-2c956.appspot.com",
    messagingSenderId: "126867512692",
    appId: "1:126867512692:web:afadb68a21699518a6a021",
    measurementId: "G-VWCMJG49NZ"
})

export const db = FirebaseApp.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()

