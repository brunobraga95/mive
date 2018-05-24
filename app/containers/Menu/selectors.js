import { createSelector } from 'reselect';

const selectMenu = (state) => state.get('menu').toJS();

const makeSelectMenu = () => createSelector(
  selectMenu,
  (menu) => menu.menu
);

const makeSelectIsLoading = () => createSelector(
    selectMenu,
    (menu) => menu.isLoading
  );

const makeSelectCurrentSection = () => createSelector(
    selectMenu,
    (menu) => menu.section
  );

export {
  makeSelectMenu,
  makeSelectCurrentSection,
  makeSelectIsLoading,
};
