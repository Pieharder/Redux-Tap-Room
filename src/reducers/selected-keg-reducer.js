export default (state = null, action) => {
  const { name, description, brewery, price, quantity, id } = action;
  switch (action.type) {
    case 'CHANGE_SELECTED':
      const newState = {
        name: name,
        description: description,
        brewery: brewery,
        price: price,
        quantity: quantity,
        id: id
      };
      return newState;
    case 'CHANGE_TO_NULL':
      const nullState = null;
      return nullState;
  default:
    return state;
  }
}