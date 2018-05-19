import tableReducer from 'containers/Table/reducer';
import ordersReducer from 'containers/Orders/reducer';


export function injectListenersReducers(injectReducer) {
  injectReducer('table', tableReducer);
  injectReducer('orders', ordersReducer);
}

export function injectListeners(injectFirestoreListener) {
  const importModules = Promise.all([
    import(/* webpackChunkName: "firestore" */ 'containers/Table/firestore-listener'),
    import(/* webpackChunkName: "firestore" */ 'containers/Orders/firestore-listener'),
  ]);

  return importModules
    .then(([createTableListener, createOrdersListener]) => {
      injectFirestoreListener('table', createTableListener.default);
      injectFirestoreListener('orders', createOrdersListener.default);
    });
}
