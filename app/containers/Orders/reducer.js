import { fromJS } from 'immutable';
import { handleSnapshotReceived } from './utils';
import { FETCH_ORDERS } from './constants';

const initialState = fromJS({
  isLoading: false,
  items: [
    { name: 'Cerveja Itaipava', quantity: 3, price: 3.49 },
    { name: 'Torresmo', quantity: 1, price: 8.0 },
    { name: 'Caipirinha de Limão', quantity: 2, price: 11.0 },
    { name: 'Frango a passarinho', quantity: 1, price: 18.0 },
    { name: 'Cerveja Brahma', quantity: 12, price: 5.99 },
    { name: 'Chocolate Laka', quantity: 1, price: 5.0 },
    { name: 'Paçoca', quantity: 1, price: 1.99 },
    { name: 'Batata Frita', quantity: 1, price: 19.99 },
  ],
});

function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDERS:
      return fromJS(handleSnapshotReceived(action.payload));
    default:
      return state;
  }
}

export default ordersReducer;
