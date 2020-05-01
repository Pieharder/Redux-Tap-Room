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
  
  test('Should successfully set selectedKeg to the keg passed to the reducer', () => {
    action = {
      type: 'CHANGE_SELECTED',
      name: 't-shirt',
      description: '100% hemp',
      quantity: 5,
      id: 1 
    };
    expect(selectedKegReducer(null, action)).toEqual(selectedKeg);
  });
});