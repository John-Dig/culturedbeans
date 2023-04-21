import React from 'react';
import PropTypes from 'prop-types';

function Beans(props) {
  return (
    <React.Fragment>
      <h2>name={Beans.name}</h2>
      origin={Beans.origin}
      roast={Beans.roast}
      price={Beans.price}
      notes={Beans.notes}
      id={Beans.id}
    </React.Fragment>
  );
}

Beans.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired, 
  notes: PropTypes.string
};

  export default Beans;
