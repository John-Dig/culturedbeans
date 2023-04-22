import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewBeansForm(props) {
  function handleNewBeansFormSubmission(e) {
    e.preventDefault();
    props.onNewBeansCreation({
      name: e.target.name.value,
      origin: e.target.origin.value,
      roast: e.target.roast.value,
      price: e.target.price.value,
      notes: e.target.notes.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewBeansFormSubmission} buttonText="Add a bag of beans" />
    </React.Fragment>
  );
}

NewBeansForm.propTypes = { //checks if the onNewBeansCreation prop is a function
  onNewBeansCreation: PropTypes.func
};

export default NewBeansForm;