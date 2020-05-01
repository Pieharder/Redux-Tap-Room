import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  let action;
  const selectedKeg = {
      name: 't-shirt',
      description: '100% hemp',
      quantity: 5,
      id: 1 
    };

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });
});