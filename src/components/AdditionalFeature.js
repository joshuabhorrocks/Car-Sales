import React from 'react';
import {connect} from "react-redux";

import {addNewFeature} from "../actions/actions"

const AdditionalFeature = props => {
  const addNewFeature = () => {
    props.addNewFeature(props.item);
  };

  handleChanges = e => props.setState({item: e.target.value});

  {console.log("Add New Feature: ", props.addNewFeature())}
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onChange={handleChanges} value={props.item} onClick={addNewFeature()}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
  }
}
export default connect(
  mapStateToProps,
  {addNewFeature}
)(AdditionalFeature);
