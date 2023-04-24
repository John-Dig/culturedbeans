import React from 'react';
import PropTypes from 'prop-types';

function Beans(props) {
  return (
    <>
      <div className='beans' onClick={() => props.whenBeansClicked(props.id)}>
        <h2>{props.name}</h2>
        <h3> {props.origin}</h3>
        <h3> {props.roast}</h3>
        <h3> Price: {props.price}</h3>
        <h3> lbs total beans: {props.lbs}</h3>
        <hr />
        <h3> Notes: {props.notes}</h3>
      </div>
    </>
  );
}

Beans.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  burlapBags: PropTypes.number.isRequired,
  lbs: PropTypes.number,
  notes: PropTypes.string,
  id: PropTypes.string,
  whenBeansClicked: PropTypes.func
};

export default Beans;
