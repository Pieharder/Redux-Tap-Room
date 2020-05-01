import React from 'react';
// import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from '../Shared/ResuableForm';

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event){
      event.preventDefault();
      console.log("reached handle edit item form submission function");
      props.onEditKeg({name: event.target.name.value, 
        description: event.target.description.value, 
        brewery: event.target.brewery.value, 
        price: event.target.price.value, 
        quantity: event.target.quantity.value, 
        id: keg.id});
  }



  return(
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
}

export default EditKegForm;