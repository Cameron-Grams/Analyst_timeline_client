import 'jest-localstorage-mock';
import configureStore from 'redux-mock-store';
import asyncMiddleware from 'redux-thunk';
import promiseMiddleware from '../Helpers/promise-middleware';

import * as actions from './actionTypes';

import {
  fetchBasicInfo,
  registerNewUser,
  sendAuthentication,
  logoutUserSession
} from './userActions';

const middlewares = [
  asyncMiddleware,
  promiseMiddleware,
];

const mockStore = configureStore(middlewares);

const endpoint = "http://localhost:3030"; 

describe('User specific action creators', () => {
  afterEach(() => {
    sessionStorage.clear();
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

      return store.dispatch( registerNewUser( newUser ))
      .then( () => {
        const dispatchedActions = store.getActions()
        expect( fetch ).toHaveBeenCalledWith(`${ endpoint }/api/users/register`,   {
          method: 'POST',
          body: JSON.stringify( newUser ),
          headers: {
             Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        expect( dispatchedActions[0]).toEqual({ type: actions.registrationUserTriggered });
        expect( dispatchedActions[1]).toEqual({ type: actions.registerUserSuccess, response});
      });
    });
  });

  describe( 'Log in a User', () => {
    it( 'Should log in a user', () => {
      const store = mockStore({});
      const user = {
        userEmail: 'demo@test.com',
        userPassword: 'demo'
      };
      const response = {
        userId: "1234",
        name: "Demo",
        timelines: [ { } ]
      };
      fetch.mockResponseOnce( JSON.stringify( response ) )
      return store.dispatch( sendAuthentication( user ))
      .then( () => {
        const dispatchedActions = store.getActions()
        expect( fetch ).toHaveBeenCalledWith(`${ endpoint }/api/users/login`,   {
          method: 'POST',
          body: JSON.stringify( user ),
          headers: {
             Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        expect( dispatchedActions[0]).toEqual({ type: actions.requestAuthentication });
        expect( dispatchedActions[1]).toEqual({ type: actions.autenticationSuccess, response});
      });
    });
  });


  describe( 'Get basic info for a User', () => {
    it( 'Should reload basic information needed for a user', () => {
      const store = mockStore({});
      const user = {
        userEmail: 'demo@test.com',
        userPassword: 'demo'
      };

      const sendToken = 'dummy token';
      sessionStorage.setItem( 'token', sendToken );

      const response = {
        userId: "1234",
        name: "Demo",
        timelines: [ { } ]
      };

      fetch.mockResponseOnce( JSON.stringify( response ) )

      return store.dispatch( fetchBasicInfo( user ))
      .then( () => {
        const dispatchedActions = store.getActions()

        expect( fetch ).toHaveBeenCalledWith(`${ endpoint }/api/users/basicInfo`,   {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `${ sendToken }`,
            'Content-Type': 'application/json',

          }
        })
        expect( dispatchedActions[0]).toEqual({ type: actions.requestBasicInfo });
        expect( dispatchedActions[1]).toEqual({ type: actions.returnUserBasicInfo, response});
      });
    });
  });

  describe( 'Log user our of application', () => {
      it( 'should log user out and remove credentials', () => {
          const expectedAction = {
              type: 'LOGOUT_SESSION'
          }
      expect( logoutUserSession() ).toEqual( expectedAction ); 
      })
  })
} );