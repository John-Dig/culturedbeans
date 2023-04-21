import React from "react";
import Beans from './Beans';
import PropTypes from 'prop-types';


function BeansList(props) {
  if (props.beansList === undefined) {
    console.log("beansList is empty")
  }
  // else {
  //   return (
  //   <hr />
  //   <React.Fragment>
  //     {props.BeansList.map((beans) =>
  //       <Beans
  //         name={beans.name}
  //         origin={beans.origin}
  //         roast={beans.roast}
  //         price={beans.price}
  //         notes={beans.notes}
  //         id={beans.id}
  //         key={beans.id} />
  //     )}
  //   </React.Fragment>
  //   );
  // }
}

BeansList.propTypes = {
  beansList: PropTypes.array
};

export default BeansList;