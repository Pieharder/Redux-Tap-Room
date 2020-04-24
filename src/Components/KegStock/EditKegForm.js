import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditKegForm(props) {



  return(
    <React.Fragment>
      <div style={styles}>
        <ReusableForm 
          buttonText="Update Keg" />
      </div>
    </React.Fragment>
  );
}

export default EditKegForm;