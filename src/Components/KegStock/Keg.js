import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  let quantity = '';
  if (props.quantity > 0) {
    quantity = <h3>Pints Available: {props.quantity}</h3>;
  } else {
    quantity = <h4>Keg is kicked</h4>;
  }
  return(
    <React.Fragment>
      <h2>{props.name}</h2>
      <h4>{props.description}</h4>
      <div>{quantity}</div>
      <button onClick={()=> props.whenPintSold(props)}>-1 Pint</button>
      <button onClick={() => props.whenKegEmpty(props.id)}>Remove Keg</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenMerchClicked: PropTypes.func,
  // whenRestockClicked: PropTypes.func
};

export default Keg;