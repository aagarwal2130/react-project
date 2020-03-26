import React from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import Weather from "../Weather/Weather";
import { searchHeadlines } from "../../global/Services";
import "./Navbar.scss";

class Navbar extends React.Component {
  handleEnterKey = event => {
    if (event.keyCode === 13) {
      this.handleSearchTerm(event);
    }
  };

  handleSearchTerm = event => {
    this.props.searchHeadlines({ q: this.searchTerm.value });
  };

  render() {
    return (
      <div className="topnav">
        <div className="search-container">
          <div className="search-form">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              ref={input => {
                this.searchTerm = input;
              }}
              onKeyUp={this.handleEnterKey}
            />
            <FaSearch className="search-icon" onClick={this.handleSearchTerm} />
          </div>
        </div>
        {this.props.isSuccess && <Weather></Weather>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSuccess: state.location.isSuccess
});

const mapDispatchToProps = {
  searchHeadlines
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
