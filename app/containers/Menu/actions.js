import {
  CHANGE_MENU_SECTION,
} from './constants';

export function changeMenuSection(section) {
  return {
    type: CHANGE_MENU_SECTION,
    payload: section,
  };
}
