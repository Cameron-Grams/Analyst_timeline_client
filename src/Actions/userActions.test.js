import 'jest-localstorage-mock';
import configureStore from 'redux-mock-store';
import asyncMiddleware from 'redux-thunk';
import promiseMiddleware from '../Helpers/promise-middleware';

import * as actions from './userActions';

import {
  fetchBasicInfo
} from './userActions';

const middlewares = [
  asyncMiddleware,
  promiseMiddleware,
];

const mockStore = configureStore(middlewares);

const endpoint = "http://localhost:3030"; 

describe('User specific action creators', () => {
  afterEach(() => {
    // Clear session storage, mock store and mock fetch requests
    sessionStorage.clear();
    // store.clearActions()
    fetch.resetMocks();
  });

  describe( 'Register a new User', () => {
    it( 'Should dispatch actions to Register a new user', () => {
      const store = mockStore({});
      const newUser = {
        userName: 'IMUser',
        userEmail: 'demo@test.com',
        userPassword: 'demo'
      };
      const response = {
        message: 'Created New User',
      };

      fetch.mockResponseOnce( JSON.stringify( response ) )

      return store.dispatch(userSignUp(newUser))
      .then(() => {
        const dispatchedActions = store.getActions()
        expect(fetch).toHaveBeenCalledWith(`${ endpoint }/api/users/register`,   {
          method: 'POST',
          body: JSON.stringify( newUser ),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        });
        expect(dispatchedActions[0]).toEqual({ type: actions.registrationUserTriggered });
        expect(dispatchedActions[1]).toEqual({ type: actions.registerUserSuccess, response});
      });
    });
  });


} );