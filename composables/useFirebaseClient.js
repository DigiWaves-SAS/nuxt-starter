import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { config } from '~/firebaseConfig'

/**
 * Init firebase
 */
const app = initializeApp(config)

export default function useFirebaseClient() {
    const provider = new GoogleAuthProvider(app);
    const auth = getAuth(app)
    return {
        app,
        auth,
        provider
    }
}