import React from "react";
import { isEmpty } from "lodash";
import Headlines from "./components/Headlines/Headlines";
import Weather from "./components/Weather/Weather";
import Error from "./components/Error";
import data from "./data/location.json";
import { getLocation } from "./global/Services";
import logo from "./logo.svg";
import "./App.scss";
import "./components/Navbar/Navbar.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: false
    };
  }

  componentDidMount() {
    getLocation()
      .then(location => location.data)
      .then(location => {
        this.setState({
          isLoaded: true,
          location
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          location: data
        });
      });
  }

  toggleTheme = () => {
    const theme = document.body.classList.value;
    if (theme === "theme-dark") {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
    } else {
      document.body.classList.add("theme-dark");
      document.body.classList.remove("theme-light");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <button className="button" type="button" onClick={this.toggleTheme}>
            Toggle Theme
          </button>
        </div>
        <div className="app-container">
          {!this.state.isLoaded && !this.state.error && (
            <img src={logo} alt="logo" />
          )}
          {!isEmpty(this.state.location) && !this.state.error && (
            <React.Fragment>
              <Weather city={this.state.location.city}></Weather>
              <Headlines country={this.state.location.countryCode}></Headlines>
            </React.Fragment>
          )}
          {this.state.isLoaded && this.state.error && <Error></Error>}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
