import React, { Component } from 'react';
// import logo from './logo.svg';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import '../containers/App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">

				<div className="navbar">
					<ul>
						<li><img src="/CJ-logo.png" width="55px"/></li>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/goals">Goals</Link></li>
					</ul>
				</div>
				{/*<Link to="/"><button className="button header-btn">Home</button></Link>

				<Link to="/about"><button className="button header-btn">About</button></Link>

				<Link to="/goals"><button className="button header-btn">Goals</button></Link>
				*/}
      </div>
    );
  }
}

export default Header;
