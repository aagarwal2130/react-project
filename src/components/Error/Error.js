import React from "react";
import "./Error.scss";

const error = props => (
  <div className="app-error">
    <h4>{props.message}</h4>
  </div>
);
export default error;
