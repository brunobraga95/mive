import { createSelector } from 'reselect';

const selectBusiness = (state) => state.get('business');

const makeSelectBusinessInfo = () => createSelector(
  selectBusiness,
  (business) => business.get('info')
);

const makeSelectBusinessMenu = () => createSelector(
  selectBusiness,
  (business) => business.get('menu')
);

export {
  makeSelectBusinessInfo,
  makeSelectBusinessMenu,
};
