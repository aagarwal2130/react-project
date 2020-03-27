import React from "react";
import { connect } from "react-redux";
import { getCovidCountryStats } from "../../global/Services";
import CovidBlock from "../containers/CovidBlock";

class Covid19Country extends React.Component {
  componentDidMount() {
    this.props.getCovidCountryStats(this.props.country);
  }
  render() {
    const { isSuccess, confirmed, recovered, deaths } = this.props;
    return (
      <React.Fragment>
        <h4>COVID-19 Country Stats</h4>
        {isSuccess && (
          <div className="country-stats">
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
  country: state.location.country,
  isSuccess: state.covidCountry.isSuccess,
  confirmed: state.covidCountry.confirmed,
  recovered: state.covidCountry.recovered,
  deaths: state.covidCountry.deaths
});

const mapDispatchToProps = {
  getCovidCountryStats
};

export default connect(mapStateToProps, mapDispatchToProps)(Covid19Country);
