import React from "react";
import Covid19World from "./Covid19World";
import Covid19Country from "./Covid19Country";
import "./Covid.scss";

class CovidStats extends React.Component {
  render() {
    return (
      <div className="covid-container">
        <Covid19World />
        <Covid19Country />
      </div>
    );
  }
}

export default CovidStats;
