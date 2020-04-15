import React from 'react';
import {connect} from "react-redux";

import {addNewFeature} from "../actions/actions"

const AdditionalFeature = props => {
  // console.log("Additional Feature: ", props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.featureProps.name} (+{props.featureProps.price})
      {/* {console.log("additional feature: ", props.featureProps)} */}
    </li>
  );
};

const mapStateToProps = state => {
  // console.log("State to props", state)
  return {
    featureProps: state.additionalFeatures
  }
}
export default connect(
  mapStateToProps,
  {addNewFeature}
)(AdditionalFeature);

// onClick={() => props.addNewFeature(props.item)}