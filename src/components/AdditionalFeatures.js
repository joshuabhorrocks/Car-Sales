import React from 'react';
import {connect} from "react-redux";

import AdditionalFeature from './AdditionalFeature';
import {addNewFeature} from "../actions/actions";

const AdditionalFeatures = props => {
  // {console.log("Additonal Features props: ", props)}
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalProps.length ? (
        <ol type="1">
          {props.additionalProps.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  // console.log("State to props", state)
  return {
    additionalProps: state.additionalFeatures
  }
}
export default connect(
  mapStateToProps,
  {addNewFeature}
)(AdditionalFeatures);
