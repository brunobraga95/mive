import { tableListener } from 'containers/Table/firestore-listener';
import { ordersListener } from 'containers/Orders/firestore-listener';

export function onLoginListeners() {
  tableListener();
  ordersListener();
}
