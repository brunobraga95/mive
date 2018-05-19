import 'firebase/firestore';
import firebase from 'firebase';
import { startTable } from './functions';

export const tableLogin = (companyId, tableNumber) => {
  firebase.auth().signInAnonymously().then(() => {
    const onLoginListeners = require('./listeners').onLoginListeners; // eslint-disable-line global-require
    localStorage.setItem('companyId', companyId);
    localStorage.setItem('table', tableNumber);
    onLoginListeners();
    startTable();
  });
};
