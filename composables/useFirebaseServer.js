import admin from 'firebase-admin';
import { config } from '../firebaseServerAuth.js'

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(config),
    });
}

export default admin;