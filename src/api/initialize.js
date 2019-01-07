import Firebase from 'firebase/app'
import 'firebase/database'

export function initializeFirebase(params) {
    Firebase.initializeApp(params.config)
    return Firebase.database().ref(params.version)
}