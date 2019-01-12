import combineOrders from '../../helpers/orderHelpers';

describe('### Order Helpers', () => {
  it('should join objects',() => {
    const orders =  [
      {id: 4, food: 'Pawn and Egg', price: '1000'},
      {id: 5, food: 'Fruit Salad', price: '2000'}
    ];
    expect(combineOrders(orders)).toEqual(
      {'address': undefined,
      'food': 'Pawn and Egg,Fruit Salad',
      'phonenumber': undefined,
      'price': '1000,2000',
      'quantity': ','}
    );
  });
});
