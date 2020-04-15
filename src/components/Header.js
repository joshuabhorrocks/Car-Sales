import React from 'react';
import {connect} from "react-redux";

const Header = props => {
  // {console.log("Header props: ", props)}
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.carProps.image} alt={props.carProps.name} />
      </figure>
      <h2>{props.carProps.name}</h2>
      <p>Amount: ${props.carProps.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  // {console.log("State to props: ", state)}
  return {
    carProps: state.car
  }
}
export default connect(
  mapStateToProps,
  {}
)(Header)