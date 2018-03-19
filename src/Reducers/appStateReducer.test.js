import AppStateReducer from './appStateReducer';
import * as actions from '../Actions/actionTypes';

const initialState = {
    hasRequestAuthentication: false,
    isAuthenticated: false,
    hasFailedAuthentication: false,
    hasTimelineFocus: false,
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
        isFetchingSelectedTimeline: false,
        hasTimelineFocus: true
    };
    let state = AppStateReducer( initialState, { type: actions.getSelectedTimelineSuccess, 
        response: {
            ...initialState,
            isFetchingSelectedTimeline: initialState.isFetchingSelectedTimeline,
            hasTimelineFocus: true,
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

  it( 'should acknowledge request for information has failed', () => {
    const responseState = {
        ...initialState,
        hasRequestAuthentication: false,
        isAuthenticated: false,
        hasFailedAuthentication: true
    };
    let state = AppStateReducer( initialState, { type: actions.userBasicInfoFailed,
        response: {
            ...initialState,
            hasRequestAuthentication: false,
            isAuthenticated: false,
            hasFailedAuthentication: true
        } 
    } );
    expect( state ).toEqual( responseState );
  })

  it( 'should acknowledge request for information has failed', () => {
    const responseState = {
        ...initialState,
        hasRequestAuthentication: false,
        isAuthenticated: false,
        hasFailedAuthentication: true
    };
    let state = AppStateReducer( initialState, { type: actions.userAuthenticationFailed,
        response: {
            ...initialState,
            hasRequestAuthentication: false,
            isAuthenticated: false,
            hasFailedAuthentication: true
        } 
    } );
    expect( state ).toEqual( responseState );
  })

  it( 'should change state to show all entries on command', () => {
    const responseState = {
        ...initialState,
        hasShowAllEntries: true,
        hasShowTimeline: false,
    };
    let state = AppStateReducer( initialState, { type: actions.showAllEntries,
        response: {
            ...initialState,
            hasShowAllEntries: true,
            hasShowTimeline: false
        } 
    } );
    expect( state ).toEqual( responseState );
  })

  it( 'should change state to edit an entry on command', () => {
    const responseState = {
        ...initialState,
        hasShowAllEntries: false,
        hasShowTimeline: false,
        isShowSingleEntry: true,
        hasShowCurrentEntry: true
    };
    let state = AppStateReducer( initialState, { type: actions.editEntry,
        response: {
            ...initialState,
            hasShowAllEntries: false,
            hasShowTimeline: false,
            isShowSingleEntry: true,
            hasShowCurrentEntry: true
        } 
    } );
    expect( state ).toEqual( responseState );
  })

  it( 'should change state to add an entry on command', () => {
    const responseState = {
        ...initialState,
        hasShowAllEntries: false,
        hasShowTimeline: false,
        isShowSingleEntry: true
    };
    let state = AppStateReducer( initialState, { type: actions.addEntry,
        response: {
            ...initialState,
            hasShowAllEntries: false,
            hasShowTimeline: false,
            isShowSingleEntry: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )

  it( 'should change state to reflect an entry will be deleted on command', () => {
    const responseState = {
        ...initialState,
        isShowSingleEntry: false,
        hasShowCurrentEntry: false,
        hasShowTimeline: true

    };
    let state = AppStateReducer( initialState, { type: actions.deleteEntryTriggered,
        response: {
            ...initialState,
            isShowSingleEntry: false,
            hasShowCurrentEntry: false,
            hasShowTimeline: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )

  it( 'should change state to reflect return to main timeine on command', () => {
    const responseState = {
        ...initialState,
        isShowSingleEntry: false,
        hasShowCurrentEntry: false,
        hasShowTimeline: true

    };
    let state = AppStateReducer( initialState, { type: actions.returnMainTimeline,
        response: {
            ...initialState,
            isShowSingleEntry: false,
            hasShowCurrentEntry: false,
            hasShowTimeline: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
  
  it( 'should change state to reflect an entry updated on command', () => {
    const responseState = {
        ...initialState,
        isShowSingleEntry: false,
        hasShowCurrentEntry: false,
        hasShowTimeline: true

    };
    let state = AppStateReducer( initialState, { type: actions.entryUpdated,
        response: {
            ...initialState,
            isShowSingleEntry: false,
            hasShowCurrentEntry: false,
            hasShowTimeline: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )

  it( 'should change state to reflect a new entry has been submitted on command', () => {
    const responseState = {
        ...initialState,
        isShowSingleEntry: false,
        hasShowCurrentEntry: false,
        hasShowTimeline: true

    };
    let state = AppStateReducer( initialState, { type: actions.formSubmit,
        response: {
            ...initialState,
            isShowSingleEntry: false,
            hasShowCurrentEntry: false,
            hasShowTimeline: true
        } 
    } );
    expect( state ).toEqual( responseState );
  } )
})
