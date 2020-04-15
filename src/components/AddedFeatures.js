import React from 'react';
import {connect} from "react-redux";

import AddedFeature from './AddedFeature';
import {addNewFeature} from "../actions/actions"

const AddedFeatures = props => {
  // {console.log("Added Features: ", props)}
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.featureProps.length ? (
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
  // console.log("State to props: ", state)
  return {
    featureProps: state.car.features
  }
}
export default connect(
  mapStateToProps,
  {addNewFeature}
)(AddedFeatures);
