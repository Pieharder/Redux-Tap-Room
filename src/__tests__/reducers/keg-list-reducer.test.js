import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;

  const kegData = {
    name: 'Dr Xenon Bloom Stout',
    description: 'A bold and rich stout',
    brewery: 'Mini Morty Brewing',
    price: '$120',
    quantity: '124',
    id: 1
  };

  const currentState = {
    1: {name: 'Dr Xenon Bloom Stout',
      description: 'A bold and rich stout',
      brewery: 'Mini Morty Brewing',
      price: '$120',
      quantity: '124',
      id: 1 },
    2: {name: 'Bird Person Pils',
      description: 'A light and crisp Spring Pils',
      brewery: 'Citadel of Ricks BrewHaus',
      price: '$141',
      quantity: '124',
      id: 2 }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, description, brewery, price, quantity, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      description: description,
      brewery: brewery,
      price: price,
      quantity: quantity,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        brewery: brewery,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  });
  
  test('Should successfully remove a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: 'Bird Person Pils',
      description: 'A light and crisp Spring Pils',
      brewery: 'Citadel of Ricks BrewHaus',
      price: '$141',
      quantity: '124',
      id: 2 }
    });
  });

});