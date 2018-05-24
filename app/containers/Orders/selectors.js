import { createSelector } from 'reselect';

const selectOrders = (state) => state.get('orders').toJS();

const makeSelectOrders = () => createSelector(selectOrders, (orders) => orders);

const makeSelectAmount = () =>
  createSelector(selectOrders, (orders) => handleAmount(orders.items));

const handleAmount = (items, cover = 0) =>
  items.reduce((finalPrice, { price, quantity }) => {
    const itemTotalPrice = price * quantity;
    return finalPrice + itemTotalPrice;
  }, cover);
// TODO
// Implementation to set a "cover" tax  per people

export { makeSelectOrders, makeSelectAmount };
