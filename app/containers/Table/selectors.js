import { createSelector } from 'reselect';

const selectTable = (state) => state.get('table').toJS();

const makeSelectTable = () => createSelector(selectTable, (table) => table);

export { makeSelectTable };
