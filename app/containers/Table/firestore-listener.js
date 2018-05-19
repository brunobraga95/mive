import { getTable } from 'api/firestore/functions';
import { FETCH_TABLE_INFO } from './constants';

let fetch;

export default function createTableListener(dispatch) {
  fetch = (querySnapshot) => {
    dispatch({
      type: FETCH_TABLE_INFO,
      payload: querySnapshot,
    });
  };
}

export function tableListener() {
  if (fetch) {
    getTable().onSnapshot(fetch);
  }
}
