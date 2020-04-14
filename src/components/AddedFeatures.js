import React from 'react';
import {connect} from "react-redux";

import AddedFeature from './AddedFeature';
// import {addNewFeature, removeFeature} from "./actions/actions"

const AddedFeatures = props => {
  // {console.log("Added Features: ", props)}
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.addedFeaturesOnProps.length ? (
        <ol type="1">
          {props.addedFeaturesOnProps.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addedFeaturesOnProps: state.car.features,
  }
}
export default connect(
  mapStateToProps,
  {}
)(AddedFeatures);
