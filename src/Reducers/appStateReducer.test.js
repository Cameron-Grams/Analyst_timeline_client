import AppStateReducer from './appStateReducer';
import * as actions from '../Actions/actionTypes';

const initialState = {
    hasRequestAuthentication: false,
    isAuthenticated: false,
    hasFailedAuthentication: false,
    hasShowTimeline: true,
    hasShowAllEntries: false,
    isShowSingleEntry: false,
    hasShowCurrentEntry: false,
    isFetchingSelectedTimeline: false
}

describe( 'the app state changes in response to events', () => {
  it( 'registers a timeline has been requested',  () => {
    const responseState = {
        ...initialState,
        isFetchingSelectedTimeline: true
    };
    let state = AppStateReducer( initialState, { type: actions.requestTimeline, 
        response: {
            ...initialState,
            isFetchingSelectedTimeline: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )

 it( 'registers a timeline request is no longer active',  () => {
    const responseState = {
        ...initialState,
        isFetchingSelectedTimeline: false
    };
    let state = AppStateReducer( initialState, { type: actions.getSelectedTimelineSuccess, 
        response: {
            ...initialState,
            isFetchingSelectedTimeline: initialState.isFetchingSelectedTimeline
        } 
    } );
    expect( state ).toEqual( responseState );
  } )

 it( 'registers a timeline request is no longer active',  () => {
    const responseState = {
        ...initialState,
        isFetchingSelectedTimeline: false
    };
    let state = AppStateReducer( initialState, { type: actions.timlineRequestFailed, 
        response: {
            ...initialState,
            isFetchingSelectedTimeline: initialState.isFetchingSelectedTimeline
        } 
    } );
    expect( state ).toEqual( responseState );
  } )

 it( 'registers a request for basic info has been started',  () => {
    const responseState = {
        ...initialState,
        hasRequestAuthentication: true
    };
    let state = AppStateReducer( initialState, { type: actions.requestBasicInfo, 
        response: {
            ...initialState,
            hasRequestAuthentication: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )

 it( 'registers a request for authentication has been started',  () => {
    const responseState = {
        ...initialState,
        hasRequestAuthentication: true
    };
    let state = AppStateReducer( initialState, { type: actions.requestAuthentication, 
        response: {
            ...initialState,
            hasRequestAuthentication: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )

 it( 'registers authentication has been returned',  () => {
    const responseState = {
        ...initialState,
        hasRequestAuthentication: false,
        isAuthenticated: true,
    };
    let state = AppStateReducer( initialState, { type: actions.autenticationSuccess, 
        response: {
            ...initialState,
            hasRequestAuthentication: false,
            isAuthenticated: true,
        } 
    } );
    expect( state ).toEqual( responseState );
  } )

 it( 'registers basic user info has been returned',  () => {
    const responseState = {
        ...initialState,
        hasRequestAuthentication: false,
        isAuthenticated: true,
    };
    let state = AppStateReducer( initialState, { type: actions.returnUserBasicInfo, 
        response: {
            ...initialState,
            hasRequestAuthentication: false,
            isAuthenticated: true,
        } 
    } );
    expect( state ).toEqual( responseState );
  } )


})

