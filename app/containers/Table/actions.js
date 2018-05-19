import {
  CHANGE_TABLE_CONTEXT,
} from './constants';

export function changeTableContext(context) {
  return {
    type: CHANGE_TABLE_CONTEXT,
    payload: context,
  };
}
