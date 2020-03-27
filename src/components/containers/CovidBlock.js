import React from "react";

const covidBlock = props => (
  <div class="covid-block">
    <div class="header">{props.title}</div>
    <div class="stats">{props.stats}</div>
  </div>
);

export default covidBlock;
