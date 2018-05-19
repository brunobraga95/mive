import 'firebase/firestore';
import firebase from 'firebase';
import { keys } from './pure_functions';
import { TABLE_STATUS } from './constants';
import { getInstance } from './setup';

export const startTable = () => {
  const { companyId, tableNumber } = keys();
  return getInstance().collection('companies').doc(companyId).collection('tables').doc(tableNumber.toString()).update({
    status: TABLE_STATUS.OPEN,
  });
};

export const getCompany = () => {
  const { companyId } = keys();
  return getInstance().collection('companies').doc(companyId).get();
};

export const getTable = () => {
  const { companyId, tableNumber } = keys();
  return getInstance().collection('companies').doc(companyId).collection('tables').doc(tableNumber.toString());
};

export const updateTableValue = (value) => {
  const { companyId, tableNumber } = keys();
  return getInstance().collection('companies').doc(companyId).collection('tables').doc(tableNumber.toString()).update(value);
};

export const addOrder = (order) => { // sort this on selector
  const { companyId, tableNumber } = keys();

  getInstance().collection('companies')
  .doc(companyId).collection('tables').doc(tableNumber.toString())
  .collection('orders')
  .add({ order, addedAt: firebase.firestore.FieldValue.serverTimestamp() });
};

export const getOrders = () => { // sort this on selector
  const { companyId, tableNumber } = keys();

  return getInstance().collection('companies')
  .doc(companyId).collection('tables').doc(tableNumber.toString()).collection('orders');
};

// PUBSUB call goes here
// export const callWaiter = () => {
//   const { companyId, tableNumber } = keys();

// }
