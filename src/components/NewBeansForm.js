import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

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
      burlapBags: 0,
      lbs: numberOfBurlapBags * 130,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewBeansFormSubmission}>
        <input type='text' name='name' placeholder='Name' /><br></br>
        <input type='text' name='origin' placeholder='Origin' /><br></br>
        <input type='text' name='roast' placeholder='Roast' /><br></br>
        <input type='text' name='price' placeholder='Price for 1lb bags' /><br></br>
        <input type='text' name='burlapBags' placeholder='# of Burlap Bags' /><br></br>
        <input type='text' name='notes' placeholder='Notes' /><br></br>
        <button type='submit'>Add these beans</button>
      </form>
    </React.Fragment>
  );
}

NewBeansForm.propTypes = {
  onNewBeansCreation: PropTypes.func
};

export default NewBeansForm;