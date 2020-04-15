import React from 'react';
import {connect} from "react-redux";

const Total = props => {
  // {console.log("Total props: ", props)}
  return (
    <div className="content">
      <h4>Total Amount: ${props.priceProps + props.additionalProps}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log("State to props: ", state);
  return {
    priceProps: state.car.price,
    additionalProps: state.additionalPrice
  }
}
export default connect(
  mapStateToProps,
  {}
)(Total)
