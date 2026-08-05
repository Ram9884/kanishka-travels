import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyDLs-cD1hOwS-xLyX92prC7vZu7cc9vRpc',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'kanishka-travels-1cd8e.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'kanishka-travels-1cd8e',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'kanishka-travels-1cd8e.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '833460502696',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:833460502696:web:d00d1da4ea0dd7449b029d',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-X6HWB15BBN',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function getRecaptchaVerifier(containerId: string = 'recaptcha-container') {
  if (typeof window === 'undefined') return null;

  const existing = (window as any).recaptchaVerifier;
  if (existing) {
    try {
      existing.clear();
    } catch {
      // ignore
    }
  }

  const verifier = new RecaptchaVerifier(auth, containerId, {
    size: 'invisible',
    callback: () => {
      // Invisible reCAPTCHA solved
    },
    'expired-callback': () => {
      console.warn('reCAPTCHA expired. Please try again.');
    },
  });

  (window as any).recaptchaVerifier = verifier;
  return verifier;
}
