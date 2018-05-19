import { getOrders } from 'api/firestore/functions';
import { FETCH_ORDERS } from './constants';

let fetch;

export default function createTableListener(dispatch) {
  fetch = (querySnapshot) => {
    dispatch({
      type: FETCH_ORDERS,
      payload: querySnapshot,
    });
  };
}

export function ordersListener() {
  if (fetch) {
    getOrders().onSnapshot(fetch);
  }
}
