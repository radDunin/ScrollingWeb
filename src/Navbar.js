import React, { Component } from 'react';
import './Navbar.css';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import ScrollableAnchor from 'react-scrollable-anchor'

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="navbar">
          <ul className="navList">
            <li><NavLink to="/join" activeClassName="selected">Join</NavLink></li>
            <li><a href="#aboutUs" activeClassName="selected">About us</a></li>
            <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
          </ul>
        </div>
      </Router>
    );
  }
}

export default Navbar;
