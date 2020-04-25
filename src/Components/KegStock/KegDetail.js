import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props;

  return(
    <React.Fragment>
      <h2>{keg.name}</h2>
      <h3>{keg.description}</h3>
      <h4>{keg.brewery}</h4>
      <h4>{keg.price}</h4>
      <hr />      
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default KegDetail;