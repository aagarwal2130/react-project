import React from "react";
import { connect } from "react-redux";
import { getCovidWorldStats } from "../../global/Services";
import CovidBlock from "../containers/CovidBlock";

class Covid19World extends React.Component {
  componentDidMount() {
    this.props.getCovidWorldStats();
  }
  render() {
    const { isSuccess, confirmed, recovered, deaths } = this.props;
    return (
      <React.Fragment>
        <h4>COVID-19 World Stats</h4>
        {isSuccess && (
          <div className="world-stats">
            <CovidBlock title="Confirmed" stats={confirmed} />
            <CovidBlock title="Recovered" stats={recovered} />
            <CovidBlock title="Deaths" stats={deaths} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isSuccess: state.covidWorld.isSuccess,
  confirmed: state.covidWorld.confirmed,
  recovered: state.covidWorld.recovered,
  deaths: state.covidWorld.deaths
});

const mapDispatchToProps = {
  getCovidWorldStats
};

export default connect(mapStateToProps, mapDispatchToProps)(Covid19World);
