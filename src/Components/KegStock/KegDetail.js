import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingEdit } = props;

  return(
    <React.Fragment>
      <h2>{keg.name}</h2>
      <h3>{keg.description}</h3>
      <h4>{keg.brewery}</h4>
      <h4>{keg.price}</h4>
      <button onClick={ ()=> onClickingEdit(keg.id) }>Update Keg Details</button>
      <hr />      
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  masterKegList: PropTypes.object
}

export default KegDetail;