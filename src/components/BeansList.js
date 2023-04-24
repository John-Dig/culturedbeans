import React from "react";
import Beans from './Beans';
import PropTypes from 'prop-types';


function BeansList(props) {
  return (
    <>
      < hr />
      {props.beansList.map((beans) =>
        <Beans
          whenBeansClicked={props.onBeansSelection}
          name={beans.name}
          origin={beans.origin}
          roast={beans.roast}
          price={beans.price}
          burlapBags={beans.burlapBags}
          lbs={beans.lbs}
          notes={beans.notes}
          id={beans.id}
          key={beans.id} />
      )}
    </>
  )
}

BeansList.propTypes = {
  beansList: PropTypes.array,
  onBeansSelection: PropTypes.func
};

export default BeansList;