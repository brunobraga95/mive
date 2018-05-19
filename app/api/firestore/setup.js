// it has to be imported for firebase.firestore() to be resolvable
import firebase from 'firebase';
import 'firebase/firestore';

let loaded = false;
let firestore = null;

export const initializeFirestore = () => {
  if (loaded) return firestore;
  firebase.initializeApp({

  });

  firestore = firebase.firestore();

  loaded = true;

  return firestore;
};

export const getInstance = () => !loaded ? initializeFirestore() : firestore;
