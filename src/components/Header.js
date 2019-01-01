import React, { Component } from 'react';
// import logo from './logo.svg';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import '../containers/App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
			<Link to="/"><button className="button header-btn">Home</button></Link>

			<Link to="/about"><button className="button header-btn">About</button></Link>

			<Link to="/goals"><button className="button header-btn">Goals</button></Link>

      </div>
    );
  }
}

export default Header;
