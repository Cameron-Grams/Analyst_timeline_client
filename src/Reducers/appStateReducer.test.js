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

})
