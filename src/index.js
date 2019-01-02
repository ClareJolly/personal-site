import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import './containers/App.css'
import Header from './components/Header';
import App from './containers/App';
import About from './containers/About';
import Goals from './containers/Goals';
import Tech from './containers/Tech';
import Notfound from './containers/notfound'
// import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
		<Header />
		<Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/goals" component={Goals} />
      <Route path="/tech" component={Tech} />
			<Route component={Notfound} />
			</Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
