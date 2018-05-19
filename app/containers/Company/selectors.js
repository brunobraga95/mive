import { createSelector } from 'reselect';

const selectCompany = (state) => state.get('company').toJS();

const makeSelectCompany = () => createSelector(
  selectCompany,
  (company) => company
);

export {
  makeSelectCompany,
};
