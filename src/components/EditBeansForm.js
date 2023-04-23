import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';

function EditBeansForm(props) {
  const { beans } = props;

  function handleEditBeansFormSubmission(e) {
    e.preventDefault();
    props.onEditBeans({
      name: e.target.name.value,
      origin: e.target.origin.value,
      roast: e.target.roast.value,
      price: e.target.price.value,
      notes: e.target.notes.value,
      id: beans.id
    });
  }
  return (
    <>
      <ReusableForm formSubmissionHandler={handleEditBeansFormSubmission} buttonText="Update Beans" />
    </>
  );
}

EditBeansForm.propTypes = {
  Beans: PropTypes.object,
  onEditBeans: PropTypes.func
};

export default EditBeansForm;
