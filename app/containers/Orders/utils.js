export const handleSnapshotReceived = (snapshot) => {
  const orders = [];
  if (snapshot.size) {
    snapshot.forEach((doc) => {
      orders.push({ ...doc.data(), id: doc.id });
    });
  }
  return orders;
};
