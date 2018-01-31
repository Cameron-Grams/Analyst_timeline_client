import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; 
import PromiseMiddleware from './Helpers/promise-middleware'; 
import reducers from './Reducers/reducers';

import createHistory from 'history/createBrowserHistory'; 
import { routerMiddleware } from 'react-router-redux';
export const history = createHistory();



const helperModules = [ thunk, PromiseMiddleware, routerMiddleware(history)  ]; 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware( ...helperModules )
  ));

export default store; 