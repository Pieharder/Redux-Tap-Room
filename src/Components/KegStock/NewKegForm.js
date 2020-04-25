import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from '../Shared/ResuableForm';

function NewKegForm(props) {
   
    function handleNewKegFormSubmission(event) {
      event.preventDefault();
      props.onNewKegCreation({
        name: event.target.name.value, 
        description: event.target.description.value,
        brewery: event.target.brewery.value,
        price: event.target.price.value,
        quantity: parseInt(event.target.quantity.value), id: v4()});
    }
  
  return (
    <React.Fragment>

      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add New Keg" />
        
    </ React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;