import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store';
import ProtectedRoute from './Containers/ProtectedToken/ProtectedRoute';
import ProfileLoader from './Helpers/ProfileLoader';

import LandingPage from './Components/LandingPage'; 
import Login from './Containers/Login/login'; 
import Register from './Containers/Register/Register'; 
import Timelines from './Containers/Timelines/Timelines'; 
import CreateTimeline from './Containers/Timelines/CreateTimeline'; 
import Dashboard from './Containers/Dashboard/Dashboard'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <ConnectedRouter history={ history }>  
        <Switch >      
          < ProfileLoader >
            <Route exact path="/" component={ LandingPage } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />

            <ProtectedRoute path="/user-timelines" component={ Timelines } />
            <ProtectedRoute path="/create-timeline" component={ CreateTimeline } />
            <ProtectedRoute path="/dashboard" component={ Dashboard } />

          </ProfileLoader >
        </Switch>
      </ConnectedRouter>
      </div>
    );
  }
}

export default App;
