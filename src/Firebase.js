import { computeHeadingLevel } from '@testing-library/dom';
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'



const firebaseConfig = {
  apiKey: "AIzaSyDKnfwiTV8tGUVl-kpvnx0LBW7MxygrRWY",
  authDomain: "contact-project-ebea5.firebaseapp.com",
  databaseURL: "https://contact-project-ebea5-default-rtdb.firebaseio.com",
  projectId: "contact-project-ebea5",
  storageBucket: "contact-project-ebea5.appspot.com",
  messagingSenderId: "335612350729",
  appId: "1:335612350729:web:893d2638a2b567217803d8"
};

//  const firebaseDb = firebase.initializeApp(firebaseConfig)

//  const auth = firebase.auth()
//  const db = firebase.firestore()

//  export { auth, db, firebaseDb} 
export default function AllfireBase() {
   if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig)
       // Check that `window` is in scope for the analytics module!
       if (typeof window !== 'undefined') {
        // Enable analytics. https://firebase.google.com/docs/analytics/get-started
        if ('measurementId' in firebaseConfig) {
            firebase.analytics()
            firebase.performance()
        }
    }
    console.log('firebase successfully')

   }
 }
  // export default firebaseDb.database()
// export default firebase;