import { CHANGE_MENU_SECTION, CHANGE_SEARCH_VALUE } from './constants';

export function changeMenuSection(section) {
  return {
    type: CHANGE_MENU_SECTION,
    payload: section,
  };
}

export function changeSearchValue(value) {
  return {
    type: CHANGE_SEARCH_VALUE,
    payload: value,
  };
}
