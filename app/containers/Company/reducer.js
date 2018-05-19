import { fromJS } from 'immutable';
import { handle } from 'redux-pack';

import {
  FETCH_COMPANY_INFO,
} from './constants';

const initialState = fromJS({
  isLoading: false,
});

function companyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANY_INFO:
      return handle(state, action, {
        start: () => (fromJS({ isLoading: true })),
        finish: () => (fromJS({ ...action.payload.data(), isLoading: false })), // TODO Use success lifecycle from redux-pack
      });
    default:
      return state;
  }
}

export default companyReducer;
