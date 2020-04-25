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
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h2>{props.name}</h2>
        <h4>{props.description}</h4>
        <div>
          {quantity}
        </div>
      </div>
      <button onClick={()=> props.whenPourPintClicked(props)}>Pour A Pint</button>
      <button onClick={() => props.whenKegEmpty(props.id)}>Remove Keg</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenKegEmpty: PropTypes.func,
};

export default Keg;