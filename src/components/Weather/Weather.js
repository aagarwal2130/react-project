import React from "react";
import { getWeather } from "../../global/Services";
import { getTemperature } from "../../global/Utils";
import data from "../../data/weather.json";
import { isEmpty } from "lodash";
import "./Weather.scss";
import Moment from "react-moment";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: {} };
  }

  componentDidMount() {
    getWeather({ q: this.props.city })
      .then(weather => weather.data)
      .then(weather => {
        this.setState({
          weather
        });
      })
      .catch(error => {
        this.setState({ weather: data });
      });
  }
  render() {
    const { weather } = this.state;

    return (
      !isEmpty(this.state.weather) && (
        <div className="weather-container">
          <div className="header">
            <div>
              <div>{weather.name}</div>
              <div className="temperature">
                {getTemperature(weather.main.temp)} {"\u00b0"}C
              </div>
            </div>
            <img
              src={require("../../assets/weather-placeholder.png")}
              alt="Weather"
            ></img>
          </div>
          <ul>
            <li>
              <label>Feels Like</label>
              <span>
                {getTemperature(weather.main.feels_like)} {"\u00b0"}C
              </span>
            </li>
            <li>
              <label>Wind</label>
              <span>{weather.wind.speed} km/hr </span>
            </li>
            <li>
              <label>Max Temp</label>
              <span>
                {getTemperature(weather.main.temp_max)} {"\u00b0"}C
              </span>
            </li>
            <li>
              <label>Min Temp</label>
              <span>
                {getTemperature(weather.main.temp_min)} {"\u00b0"}C
              </span>
            </li>
            <li>
              <label>Pressure</label>
              <span>{weather.main.pressure} Pa</span>
            </li>
            <li>
              <label>Humidity</label>
              <span>{weather.main.humidity} %</span>
            </li>
            <li>
              <label>Sunrise</label>
              <span>
                <Moment unix format="hh:mm A">
                  {weather.sys.sunrise}
                </Moment>
              </span>
            </li>
            <li>
              <label>Sunset</label>
              <span>
                <Moment unix format="hh:mm A">
                  {weather.sys.sunset}
                </Moment>
              </span>
            </li>
          </ul>
        </div>
      )
    );
  }
}

export default Weather;
