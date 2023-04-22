import React from 'react';
import PropTypes from 'prop-types';

function Beans(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBeansClicked(props.id)}>
        <h2>name={Beans.name}</h2>
        origin={Beans.origin}
        roast={Beans.roast}
        price={Beans.price}
        notes={Beans.notes}
        id={Beans.id}
      </div>
    </React.Fragment>
  );
}

Beans.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  notes: PropTypes.string,
  whenBeansClicked: PropTypes.func
};

export default Beans;
