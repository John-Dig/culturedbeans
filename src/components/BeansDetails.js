import React from 'react';
import PropTypes from 'prop-types';

function BeansDetails(props) {
  
  const { beans, onClickingEdit, onClickingDelete, onClickingSale} = props;
  return (
    <React.Fragment>
      <h1>Beans Details</h1>
      <h3>{beans.name} - {beans.origin}</h3>
      <p>Roast: {beans.roast}</p>
      <p>Price per 1 pound bag: {beans.price}</p>
      <p>Total inventory: {beans.lbs}-lbs</p>
      <p>{beans.notes}</p>
      <hr />
    {/* ??? need to get props in here correctly*/}
      <button onClick={ onClickingEdit }>Update Beans</button>
      <button onClick={() => onClickingDelete(beans.id) }>Delete this bean entry</button>
      {beans.lbs ? (<button onClick={() => onClickingSale(beans.id) }>Sell 1 lb bag of beans</button>) : (<h1>you're out of {beans.name}!</h1>)}
    </React.Fragment>
  );
}

BeansDetails.propTypes = {
  beans: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSale: PropTypes.func
};

export default BeansDetails;