import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store';
import ProtectedRoute from './Containers/ProtectedToken/ProtectedRoute';
import GlobalContextLoader from './Containers/GlobalContext/GlobalContextLoader';

import ErrorPage from './Components/ErrorPage/ErrorPage'; 
import LandingPage from './Components/LandingPage/landingPage'; 
import Login from './Containers/Login/Login'; 
import Register from './Containers/Register/Register'; 
import Timelines from './Containers/Timelines/Timelines'; 
import CreateTimeline from './Containers/Timelines/CreateTimeline'; 
import DeleteTimeline from './Containers/DeleteTimeline/DeleteTimeline'; 
import Dashboard from './Containers/Dashboard/Dashboard'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <ConnectedRouter history={ history }>  
        <Switch >      
          <GlobalContextLoader >
            <Route exact path="/" component={ LandingPage } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />

            <ProtectedRoute path="/error-page" component={ ErrorPage } /> 
            <ProtectedRoute path="/user-timelines" component={ Timelines } />
            <ProtectedRoute path="/create-timeline" component={ CreateTimeline } />
            <ProtectedRoute path="/delete-timeline" component={ DeleteTimeline } />
            <ProtectedRoute path="/dashboard/:timelineId" component={ Dashboard } />
          </GlobalContextLoader>
        </Switch>
      </ConnectedRouter>
      </div>
    );
  }
}

export default App;
