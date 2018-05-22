import { createSelector } from 'reselect';

const getOrders = (state) => state.get('orders').toJS();

const makeGetOrders = () => createSelector(getOrders, (orders) => orders);

const makeGetAmount = () =>
  createSelector(getOrders, (orders) => handleAmount(orders.items));

const handleAmount = (items, cover = 0) =>
  items.reduce((finalPrice, { price, quantity }) => {
    const itemTotalPrice = price * quantity;
    return finalPrice + itemTotalPrice;
  }, cover);
// TODO
// Implementation to set a "cover" tax  per people

export { makeGetOrders, makeGetAmount };
