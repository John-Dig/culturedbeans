import React from 'react';
import PropTypes from 'prop-types';

function Beans(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBeansClicked(props.id)}>
        <h2>{props.name}</h2>
       <h3> {props.origin}</h3>
       <h3> {props.roast}</h3>
       <h3> {props.price}</h3>
       <h3> Notes: {props.notes}</h3>
       <hr />
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
