import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store';
import ProtectedRoute from './Containers/ProtectedToken/ProtectedRoute';

import LandingPage from './Components/LandingPage'; 
import Login from './Containers/Login/login'; 
import Timelines from './Containers/Timelines/Timelines'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <ConnectedRouter history={ history }>  
        <Switch >      
        <Route exact path="/" component={ LandingPage } />
        <Route exact path="/login" component={ Login } />
        <ProtectedRoute exact path="/user-timelines" component={ Timelines } />

        </Switch>
      </ConnectedRouter>
      </div>
    );
  }
}

export default App;
