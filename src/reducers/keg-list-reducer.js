export default (state = {}, action) => {
  const { name, description, brewery, price, quantity, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        description: description,
        brewery: brewery,
        price: price,
        quantity: quantity,
        id: id
      }
    });
    case 'SELL_KEG':
      const updatedQuantity = state[id].Quantity - 1;
      const updatedKegList = { ...state, [id]: { ...state[id], kegQuantity: updatedQuantity }};
      return updatedKegList;
  case 'DELETE_KEG':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};