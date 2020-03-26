import React from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { searchHeadlines } from "../../global/Services";
import "./Navbar.scss";

class Navbar extends React.Component {
  handleEnterKey = event => {
    if (event.keyCode === 13) {
      this.handleSearchTerm(event);
    }
  };

  handleSearchTerm = event => {
    event.preventDefault();
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
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchHeadlines
};

export default connect(null, mapDispatchToProps)(Navbar);
