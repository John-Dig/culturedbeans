import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewBeansForm(props) {
  function handleNewBeansFormSubmission(event) {
    event.preventDefault();
    props.onNewBeansCreation({ name: event.target.name.value, origin: event.target.origin.value, roast: event.target.roast.value, price: event.target.price.value, notes: event.target.notes.value, id: v4() });
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewBeansFormSubmission} buttonText="Add a bag of beans" />
    </React.Fragment>
  );

  NewBeansForm.propTypes = { //checks if the onNewBeansCreation prop is a function
    onNewBeansCreation: PropTypes.func
  };

}
export default NewBeansForm;