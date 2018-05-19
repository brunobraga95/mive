import { fromJS } from 'immutable';

import {
  FETCH_TABLE_INFO,
} from './constants';

const initialState = fromJS({
  isLoading: false,
});

function tableReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TABLE_INFO:
      return fromJS(action.payload.data());
    default:
      return state;
  }
}

export default tableReducer;
