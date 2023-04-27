import React from 'react';
import PropTypes from 'prop-types';

function EditBeansForm(props) {
  const { beans } = props;

  function handleEditBeansFormSubmission(e) {
    e.preventDefault();
    const numberOfBurlapBags = 0;
    props.onEditBeans({
      name: e.target.name.value,
      origin: e.target.origin.value,
      roast: e.target.roast.value,
      price: e.target.price.value,
      burlapBags: numberOfBurlapBags,
      lbs: e.target.lbs.value,
      notes: e.target.notes.value,
      id: beans.id
    });
  }
  return (
    <>
   <form onSubmit={handleEditBeansFormSubmission}>
        <input type='text' name='name' placeholder='Name' /><br></br>
        <input type='text' name='origin' placeholder='Origin' /><br></br>
        <input type='text' name='roast' placeholder='Roast' /><br></br>
        <input type='number' name='price' placeholder='Price for 1lb bags' step='.01' min='0'/><br></br>
        <input type='number' name='lbs' placeholder='total lbs of loose beans' min='0'/><br></br>
        <input type='text' name='notes' placeholder='Notes' /><br></br>
        <button type='submit'>Update these beans</button>
      </form>
    </>
  );
}

EditBeansForm.propTypes = {
  Beans: PropTypes.object,
  onEditBeans: PropTypes.func
};

export default EditBeansForm;
