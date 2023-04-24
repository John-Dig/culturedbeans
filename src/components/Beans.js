import React from 'react';
import PropTypes from 'prop-types';

function Beans(props) {
  return (
    <>
      <div onClick={() => props.whenBeansClicked(props.id)}>
        <h2>{props.name}:<em> {props.lbs}lbs</em></h2>
        <h3> {props.origin}</h3>
        <h3> {props.roast}</h3>
        <h3> Price: {props.price}</h3>
        <h3> Burlap Bags: {props.burlapBags}</h3>
        <h3> lbs: {props.lbs}</h3>
        <h3> Notes: {props.notes}</h3>
        <hr />
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
