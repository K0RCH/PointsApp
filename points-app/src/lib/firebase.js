import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

//  import seed file
//  import { seedDatabase } from '../seed'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore

//  Call seed file (only ONCE!)
//  seedDatabase(firebase)

const storageRef = firebase.storage().ref()

export { firebase, FieldValue, storageRef }