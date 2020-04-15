import React from 'react';
import {connect} from "react-redux";

import {removeFeature} from "../actions/actions"

const AddedFeature = props => {
  console.log("Added Feature", props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature()}>X</button>
      {props.car.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log("State to props", state)
  return {
  }
}
export default connect(
  mapStateToProps,
  {removeFeature}
)(AddedFeature);
