import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  
  return (
    <React.Fragment>
      <div style={styles}>
        <form onSubmit={props.formSubmissionHandler}>
          <input
            required
            type='text'
            name='name'
            placeholder='Name of Beer' /><br />
          <input
            required
            type='text'
            name='description'
            placeholder='Description' /><br />
          <input
            required
            type='text'
            name='brewery'
            placeholder='Brewery' /><br />
          <input
            required
            type='text'
            name='price'
            placeholder='Price' /><br />
          <input
            required
            type='number'
            name='quantity'
            placeholder='Quantity' /><br />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>    
  );
}

const styles = {
  
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;