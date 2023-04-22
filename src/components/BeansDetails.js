import React from 'react';
import PropTypes from 'prop-types';

function BeansDetails(props) {
  const { beans, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Beans Details</h1>
      <h3>{beans.name} - {beans.origin}</h3>
      <p><em>{beans.roast}</em></p>
      <p>{beans.price}</p>
      <p>{beans.notes}</p>
      <hr />
      <button onClick={ props.onClickingEdit }>Update Beans</button>
      <button onClick={() => onClickingDelete(beans.id) }>Remove Beans</button>
    </React.Fragment>
  );
}

BeansDetails.propTypes = {
  beans: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BeansDetails;