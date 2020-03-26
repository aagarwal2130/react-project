import React from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Headlines from "./components/Headlines/Headlines";
import { getLocation } from "./global/Services";
import "./App.scss";
import "./components/Navbar/Navbar.scss";

class App extends React.Component {
  componentDidMount() {
    this.props.getLocation();
  }

  render() {
    return (
      <div className="app-container">
        {this.props.isSuccess && (
          <React.Fragment>
            <Navbar />
            <Headlines></Headlines>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSuccess: state.location.isSuccess
});

const mapDispatchToProps = {
  getLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
