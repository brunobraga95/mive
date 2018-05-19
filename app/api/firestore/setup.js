// it has to be imported for firebase.firestore() to be resolvable
import firebase from 'firebase';
import 'firebase/firestore';

let loaded = false;
let firestore = null;

export const initializeFirestore = () => {
  if (loaded) return firestore;
  const { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID } = process.env;

  firebase.initializeApp({
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
  });

  firestore = firebase.firestore();

  loaded = true;

  return firestore;
};

export const getInstance = () => !loaded ? initializeFirestore() : firestore;
