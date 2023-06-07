// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  getAuth,
  signInWithPopup
} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const twitterProvider = new TwitterAuthProvider()

export const googleFirebaseLogin = async () => {
  return signInWithPopup(auth, googleProvider)
}

export const facebookFirebaseLogin = async () => {
  return signInWithPopup(auth, facebookProvider)
}

export const twitterFirebaseLogin = async () => {
  return signInWithPopup(auth, twitterProvider)
}
