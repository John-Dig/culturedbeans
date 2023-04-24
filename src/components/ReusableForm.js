import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' /><br></br>
          <input
            type='text'
            name='origin'
            placeholder='Origin' /><br></br>
        <input
          type='text'
          name='roast'
          placeholder='Roast' /><br></br>
        <input
          type='text'
          name='price'
          placeholder='Price for 1lb bags' /><br></br>
        <input
          type='text'
          name='burlapBags'
          placeholder='# of Burlap Bags' /><br></br>
        <input
          type='text'
          name='notes'
          placeholder='Notes' /><br></br>
              <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func, buttonText: PropTypes.string
};

export default ReusableForm;