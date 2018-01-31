import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store';

import LandingPage from './Components/LandingPage'; 
import Login from './Containers/Login/login'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <ConnectedRouter history={ history }>  
        <Switch >      
        <Route exact path="/" component={ LandingPage } />
        <Route exact path="/login" component={ Login } />
        </Switch>
      </ConnectedRouter>
      </div>
    );
  }
}

export default App;
