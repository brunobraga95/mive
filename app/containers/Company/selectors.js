import { createSelector } from 'reselect';

const selectCompany = (state) => state.get('company').toJS();

const makeSelectCompany = () =>
  createSelector(selectCompany, (company) => company);

const makeSelectCompanyName = () =>
  createSelector(selectCompany, (company) => company.name);

export { makeSelectCompany, makeSelectCompanyName };
