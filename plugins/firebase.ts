import {
    signInWithEmailAndPassword
} from 'firebase/auth'

// Firebase client
import useFirebaseClient from '~/composables/useFirebaseClient'

// MongoDB
import User from '~/models/Users';

export default defineNuxtPlugin((nuxtApp) => {

    const generateRandomString = nuxtApp.$generateRandomString;
    const applyBlur = nuxtApp.$applyBlur;
    const convertToWebP = nuxtApp.$convertToWebP;

    console.log(convertToWebP)

    /*
    |--------------------------------------------------------------------------
    | CONFIG
    |--------------------------------------------------------------------------
    */

    /**
     * Get firebase auth
     */
    const {app, auth, provider} = useFirebaseClient()

    /**
     * Get firebase storage
     * @type {FirebaseStorage}
     */
    const storage = getStorage(app);

    /*
    |--------------------------------------------------------------------------
    | METHODS
    |--------------------------------------------------------------------------
    */

    /**
     * Log user
     * @returns {Promise<{userData: (*|null), user: User}>}
     * @param email
     * @param pwd
     */
    const userLoginAuthentication = async (email, pwd) => {

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, pwd);
            const accessToken = userCredential.user.accessToken;
            const uid = userCredential.user.uid;

            return {
                accessToken: accessToken,
                uid: uid
            }
        } catch (error) {
            console.error(error.message);
            throw error;
        }

    }

    return {
        provide: {
            provider,
            auth,
            userLoginAuthentication
        }
    }

})