export const handleSnapshotReceived = (snapshot) => {
  const orders = [];
  console.log('snapshot');
  if (snapshot.size) {
    snapshot.forEach((doc) => {
      orders.push({ ...doc.data(), id: doc.id });
    });
  }
  return orders;
};
