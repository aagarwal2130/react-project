import React from "react";
import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div class="navbar">
        <button class="button" type="button" onClick="alert('Hello world!')">
          Toggle Theme
        </button>
      </div>
    );
  }
}

export default Navbar;
