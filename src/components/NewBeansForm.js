import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewBeansForm(props) {
  function handleNewBeansFormSubmission(e) {
    e.preventDefault();
    const numberOfBurlapBags = parseInt(e.target.burlapBags.value);

    props.onNewBeansCreation({
      name: e.target.name.value,
      origin: e.target.origin.value,
      roast: e.target.roast.value,
      price: e.target.price.value,
      notes: e.target.notes.value,
      burlapBags: e.target.burlapBags.value,
      lbs: numberOfBurlapBags * 130,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewBeansFormSubmission} buttonText="Add these beans" />
    </React.Fragment>
  );
}

NewBeansForm.propTypes = {
  onNewBeansCreation: PropTypes.func
};

export default NewBeansForm;