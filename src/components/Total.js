import React from 'react';
import {connect} from "react-redux";

const Total = props => {
  // {console.log("Total props: ", props)}
  return (
    <div className="content">
      <h4>Total Amount: ${props.priceOnProps + props.additionalPriceOnProps}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    priceOnProps: state.car.price,
    additionalPriceOnProps: state.additionalPrice
  }
}
export default connect(
  mapStateToProps,
  {}
)(Total)
