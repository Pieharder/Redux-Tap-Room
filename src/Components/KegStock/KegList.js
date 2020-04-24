import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg'

function KegList(props) {

  return(
    <React.Fragment>
      {props.kegList.map((keg) =>
      <Keg
      whenPourPintClicked={props.onClickingPourPint} 
      whenKegEmpty={props.onClickingDelete}
      name={keg.name}
      description={keg.description}
      quantity={keg.quantity}
      id={keg.id}
      key={keg.id} />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegList;