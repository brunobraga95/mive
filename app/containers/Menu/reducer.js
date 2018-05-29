import { fromJS } from 'immutable';
import { handle } from 'redux-pack';

import { FETCH_COMPANY_INFO } from 'containers/Company/constants';
import { CHANGE_MENU_SECTION, CHANGE_SEARCH_VALUE } from './constants';

const initialState = fromJS({
  section: 'porcoes', // TODO change this to featured
  isLoading: true,
  menu: {},
  search: '',
});

function companyReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MENU_SECTION:
      return state.set('section', action.payload);
    case CHANGE_SEARCH_VALUE:
      return state.set('search', action.payload);
    case FETCH_COMPANY_INFO:
      return handle(state, action, {
        start: () => state.merge({ isLoading: true }),
        finish: () => {
          const data = action.payload.data();
          return state.merge({
            menu: data.menu,
            isLoading: false,
          });
        },
      });
    default:
      return state;
  }
}

export default companyReducer;
