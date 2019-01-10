const getListOfOrders = (orders, food) => {
  return orders.map(order => {
    return order[food];
  }).join(',');
};
const combineOrders = (orders, address, phonenumber) => {
  const foodList =  getListOfOrders(orders, 'food');
  const priceList =  getListOfOrders(orders, 'price');
  const quantityList =  getListOfOrders(orders, 'quantity');
  return {
    food: foodList,
    price: priceList,
    quantity: quantityList,
    address,
    phonenumber
  };
};

export default combineOrders;
