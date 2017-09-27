import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <HashRouter history={history}>
      <Switch>
        <Route exact path="/Login" name="Login Page" component={Login}/>
        <Route exact path="/Home" name="Login Page" component={Home}/>
        <Redirect from="/" to="/Login"/>
      </Switch>
    </HashRouter>
    );
  }
}

export default App;
