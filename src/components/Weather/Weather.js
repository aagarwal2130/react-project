import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../../global/Services";
import { getTemperature } from "../../global/Utils";
import { isMobileOnly } from "react-device-detect";
import "./Weather.scss";

class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeather({ q: this.props.city });
  }

  render() {
    const { city, weather } = this.props;

    return (
      <div className="weather-container">
        {!isMobileOnly && (
          <div className="city-temperature">
            <div className="city">{city}</div>
            <span>
              {getTemperature(weather.temperature)} {"\u00b0"}C,{" "}
              {weather.condition}
            </span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  city: state.location.city,
  weather: state.weather
});

const mapDispatchToProps = {
  getWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
