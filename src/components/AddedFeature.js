import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/featuresActions";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFeature: (feature) => dispatch(removeFeature(feature)),
  };
};

export default connect(null, mapDispatchToProps)(AddedFeature);
