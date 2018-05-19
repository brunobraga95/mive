import { fromJS } from 'immutable';
import { handleSnapshotReceived } from './utils';
import {
  FETCH_ORDERS,
} from './constants';

const initialState = fromJS({
  isLoading: false,
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
