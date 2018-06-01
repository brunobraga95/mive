import { createSelector } from 'reselect';
import slugify from '../../utils/slugify';

const selectMenu = (state) => state.get('menu').toJS();

const makeSelectSearch = () =>
  createSelector(selectMenu, (menu) => menu.search);

const makeSelectMenu = () => createSelector(selectMenu, (menu) => menu.menu);

const makeSelectKeys = () =>
  createSelector(makeSelectMenu(), (menu) => Object.keys(menu));

const makeSelectAllItems = () =>
  createSelector(makeSelectMenu(), makeSelectKeys(), (menu, keys) => {
    let allItems = [];
    keys.forEach(
      (section) => (allItems = [...allItems, ...menu[section].dishes])
    );
    return allItems;
  });

const makeFilteredMenu = () =>
  createSelector(makeSelectAllItems(), makeSelectSearch(), (allItems, search) =>
    allItems.filter((item) => slugify(item.name).includes(slugify(search)))
  );

const makeSelectIsLoading = () =>
  createSelector(selectMenu, (menu) => menu.isLoading);

const makeSelectCurrentSection = () =>
  createSelector(selectMenu, (menu) => menu.section);

const makeSelectSectionItems = () =>
  createSelector(
    makeSelectMenu(),
    makeSelectCurrentSection(),
    (menu, section) => menu[section]
  );

export {
  makeSelectCurrentSection,
  makeSelectIsLoading,
  makeSelectSearch,
  makeFilteredMenu,
  makeSelectSectionItems,
  makeSelectKeys,
  makeSelectAllItems,
};
