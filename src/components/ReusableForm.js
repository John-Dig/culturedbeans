import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
          <input
            type='text'
            name='origin'
            placeholder='Origin' />
        <input
          type='text'
          name='roast'
          placeholder='Roast' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='notes'
          placeholder='Notes' />
              <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func, buttonText: PropTypes.string
};

export default ReusableForm;