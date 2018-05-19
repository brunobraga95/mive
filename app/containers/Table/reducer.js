import { fromJS } from 'immutable';

import {
  FETCH_TABLE_INFO,
  CHANGE_TABLE_CONTEXT,
  NAVIGATION_INDEX_MAP,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  context: NAVIGATION_INDEX_MAP.MENU,
});

function tableReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TABLE_INFO:
      return state.merge(fromJS(action.payload.data()));
    case CHANGE_TABLE_CONTEXT:
      return state.set('context', action.payload);
    default:
      return state;
  }
}

export default tableReducer;
