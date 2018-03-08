import 'jest-localstorage-mock';
import configureStore from 'redux-mock-store';
import asyncMiddleware from 'redux-thunk';
import promiseMiddleware from '../Helpers/promise-middleware';

import * as actions from './actionTypes';

import {
    synchCurrentEntry,
    loadCurrentEntry,
    getSelectedTimeline,
    createNewTimeline,
    addEntryToTimeline,
    updateEntryOnTimeline,
    deleteEntryOnTimeline
} from './timelineActions';

const middlewares = [
  asyncMiddleware,
  promiseMiddleware,
];
const mockStore = configureStore( middlewares );
const endpoint = "http://localhost:3030"; 


describe( 'Actions specific to the timeline functions', () => {   
    afterEach(() => {
        sessionStorage.clear();
        fetch.resetMocks();
    });
    describe( 'The app manages the entries that are in state', () => {
        it( 'should load the current entry into state from the array of entries', () => {
            const expectedAction = {
                type: 'LOAD_CURRENT_ENTRY',
                entry: { 
                    title: "title",
                    what: "what"
                }  
            }
            expect( loadCurrentEntry( { 
                        title: "title",
                        what: "what"
                    } ) 
                ).toEqual( expectedAction ); 
        })
        
        it( 'should load the current entry into state as current entry', () => {
            const expectedAction = {
                type: 'SYNCH_CURRENT_ENTRY',
                newEntry: { 
                    currentEntry: "New New New"
                }  
            }
            expect( synchCurrentEntry( { 
                    currentEntry: "New New New"
                    } ) 
                ).toEqual( expectedAction ); 
        })
    })

    describe( 'The app creates and retrieves timelines from the user record', () => {
        it( 'should get a selected timeline', () => {
            const store = mockStore({});
            const timelineId = 1234;
            const sendToken = 'dummy token';
            sessionStorage.setItem( 'token', sendToken );

            const response = {
                id: 1234,
                title: "title",
                currentEntry: "this entry",
                data: [ "dummy" ]
             };
            
            fetch.mockResponseOnce( JSON.stringify( response ) );
            return store.dispatch( getSelectedTimeline( timelineId ) )
            .then( () => {
                const dispatchedActions = store.getActions();
                expect( fetch ).toHaveBeenCalledWith( `${ endpoint }/api/timelines`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        Authorization: sendToken,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify( { timelineId: timelineId } )
                })
            expect( dispatchedActions[0]).toEqual({ type: actions.requestTimeline });
            expect( dispatchedActions[1]).toEqual({ type: actions.getSelectedTimelineSuccess, response});
            })
        })
    
        it( 'should create a new timeline', () => {
            const store = mockStore({});
            const userId = 1234;
            const sendToken = 'dummy token';
            sessionStorage.setItem( 'token', sendToken );

            const values = {
                timelineTitle: "New New New"
            };

            const response = {
                userId: 1234,
                title: "title",
                Entries: [ "dummy" ]
             };
            
            fetch.mockResponseOnce( JSON.stringify( response ) );
            return store.dispatch( createNewTimeline( values, userId ) )
            .then( () => {
                const dispatchedActions = store.getActions();
                expect( fetch ).toHaveBeenCalledWith( `${ endpoint }/api/timelines/${ userId }`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        Authorization: sendToken,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify( values )
                })
            expect( dispatchedActions[0]).toEqual({ type: actions.createTimelineTriggered });
            expect( dispatchedActions[1]).toEqual({ type: actions.newTimelineCreated, response});
            })
        })
    })

    describe( 'The app manages the content of entries sent to the timelines', () => {
        it( 'should add a new entry to the timeline', () => {
            const store = mockStore({});
            const entryId = undefined;
            const sendToken = 'dummy token';
            sessionStorage.setItem( 'token', sendToken );

            const recordDateNow = Date.now(); 
            const values = {
                content: "Initial Entry",
                date: "1/1/2019",
                dateObject: recordDateNow,
                source: "Initial Entry", 
                title: "Initial Entry",
                what: "Initial Entry",
                where: "Initial Entry",
                who: "Initial Entry"
            };

            const response = {
                _id: 56789, 
                title: "New New New", 
                currentEntry: values, 
                data: [ values ]
             };
            
            fetch.mockResponseOnce( JSON.stringify( response ) );
            return store.dispatch( addEntryToTimeline( values, entryId ) )
            .then( () => {
                const dispatchedActions = store.getActions();
                expect( fetch ).toHaveBeenCalledWith( `${ endpoint }/api/entries/${ entryId }`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        Authorization: sendToken,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify( values )
                })
            expect( dispatchedActions[0]).toEqual({ type: actions.newEntrySubmitted });
            expect( dispatchedActions[1]).toEqual({ type: actions.formSubmit, response});
            })
        })

        it( 'should update an existing entry on the timeline', () => {
            const store = mockStore({});
            const entryId = 56789;
            const sendToken = 'dummy token';
            sessionStorage.setItem( 'token', sendToken );

            const recordDateNow = Date.now(); 
            const values = {
                content: "Initial Entry",
                date: "1/1/2019",
                dateObject: recordDateNow,
                source: "Initial Entry", 
                title: "Initial Entry",
                what: "Initial Entry",
                where: "Initial Entry",
                who: "Initial Entry"
            };

            const response = {
                currentEntry: values, 
                data: [ values ]
             };
            
            fetch.mockResponseOnce( JSON.stringify( response ) );
            return store.dispatch( updateEntryOnTimeline( values, entryId ) )
            .then( () => {
                const dispatchedActions = store.getActions();
                expect( fetch ).toHaveBeenCalledWith( `${ endpoint }/api/entries/${ entryId }`,
                {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        Authorization: sendToken,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify( values )
                })
            expect( dispatchedActions[0]).toEqual({ type: actions.updateEntryTriggered });
            expect( dispatchedActions[1]).toEqual({ type: actions.entryUpdated, response});
            })
        })

        it( 'should delete an existing entry on the timeline', () => {
            const store = mockStore({});
            const entryId = 56789;
            const timelineId = 27;
            const sendToken = 'dummy token';
            sessionStorage.setItem( 'token', sendToken );

            const recordDateNow = Date.now(); 
            const values = {
                content: "Initial Entry",
                date: "1/1/2019",
                dateObject: recordDateNow,
                source: "Initial Entry", 
                title: "Initial Entry",
                what: "Initial Entry",
                where: "Initial Entry",
                who: "Initial Entry"
            };

            const response = {
                currentEntry: values, 
                data: [ values ]
             };
            
            fetch.mockResponseOnce( JSON.stringify( response ) );
            return store.dispatch( deleteEntryOnTimeline( entryId, timelineId ) )
            .then( () => {
                const dispatchedActions = store.getActions();
                expect( fetch ).toHaveBeenCalledWith( `${ endpoint }/api/entries/${ entryId }`,
                {
                    method: 'DELETE',
                    headers: {
                        Accept: 'application/json',
                        Authorization: sendToken,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify( { entryId: entryId, timelineId: timelineId } )
                })
            expect( dispatchedActions[0]).toEqual({ type: actions.deleteEntryTriggered });
            expect( dispatchedActions[1]).toEqual({ type: actions.entryDeleted, response});
            })
        })
        
    })

})
     



