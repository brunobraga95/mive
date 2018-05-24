import { fromJS } from 'immutable';
import { handleSnapshotReceived } from './utils';
import { FETCH_ORDERS } from './constants';

const initialState = fromJS({
  isLoading: false,
  items: [
    { name: 'couve', price: 5.0, quantity: 8 },
    { name: 'skol', price: 8.0, quantity: 8 },
    { name: 'vafdsagem', price: 4.0, quantity: 8 },
    { name: 'cousve', price: 3.0, quantity: 8 },
    { name: 'skosl', price: 7.0, quantity: 8 },
    { name: 'vagcem', price: 5.0, quantity: 8 },
    { name: 'coudve', price: 6.0, quantity: 8 },
    { name: 'skofl', price: 2.0, quantity: 8 },
    { name: 'vagefdaem', price: 12.0, quantity: 8 },
    { name: 'couvce', price: 11.0, quantity: 8 },
    { name: 'skodl', price: 21.0, quantity: 8 },
    { name: 'vagefdsaem', price: 22.0, quantity: 8 },
    { name: 'couave', price: 23.0, quantity: 8 },
    { name: 'skocl', price: 12.0, quantity: 8 },
    { name: 'vageafsadm', price: 21.0, quantity: 8 },
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
