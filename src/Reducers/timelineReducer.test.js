import TimelineReducer from './timelineReducer';
import * as actions from '../Actions/actionTypes';

const initialState = {
    id: null,
    title: null,
    data: [],
    currentEntry: {},
}

describe( 'Should reconcile the state of the app with the database', () => {
    afterEach(() => {
        state: initialState
    });

    it( 'should recognize the requested timeline in state', () => {
        const recordDate = Date.now();
        const dummyEntry = {
                content: "Initial Entry",
                date: '1/1/2020',
                dateObject: recordDate,
                source: "Initial Entry", 
                title: "Initial Entry",
                what: "Initial Entry",
                where: "Initial Entry",
                who: "Initial Entry"
            };
        const response = {
            currentEntry: dummyEntry,
            entries: [ dummyEntry ],
            id: undefined,
            title: undefined
        }
        let state = TimelineReducer( initialState, { type: actions.getSelectedTimelineSuccess, response } );
        expect( state ).toEqual( {
            currentEntry: dummyEntry,
            data: [ dummyEntry ],
            id: undefined,
            title: undefined
        } );
    })


    it( 'should return the timeline after adding an entry', () => {
        const recordDate = Date.now();
        const dummyEntry = {
                content: "Initial Entry",
                date: '1/1/2020',
                dateObject: recordDate,
                source: "Initial Entry", 
                title: "Initial Entry",
                what: "Initial Entry",
                where: "Initial Entry",
                who: "Initial Entry"
            };
        const response = {
            currentEntry: dummyEntry,
            entries: [ dummyEntry ],
            id: undefined,
            title: undefined
        }
        let state = TimelineReducer( initialState, { type: actions.formSubmit, response } );
        expect( state ).toEqual( {
            currentEntry: dummyEntry,
            data: [ dummyEntry ],
            id: undefined,
            title: undefined
        } );
    })

    it( 'should update an entry on the timeline in state', () => {
        const response = {
            "id": null,
            "title": null,
            "data": [ ],
        }
        let state = TimelineReducer( initialState, { type: actions.entryUpdated, response: response } );
        expect( JSON.stringify( state ) ).toEqual( JSON.stringify( response ) ); 
    })

    it( 'should delete an entry on the timeline in state', () => {
        const recordDate = Date.now();
        const dummyEntry = {
                content: "Initial Entry",
                date: '1/1/2020',
                dateObject: recordDate,
                source: "Initial Entry", 
                title: "Initial Entry",
                what: "Initial Entry",
                where: "Initial Entry",
                who: "Initial Entry"
            };
        const response = {
            entries: [ 
                {
                    currentEntry: dummyEntry,
                    data: [ dummyEntry ]
                } 

            ]
        }
        let state = TimelineReducer( initialState, { type: actions.entryDeleted, response } );
        expect( state ).toEqual( {
            "currentEntry": undefined,
            "data": [],
            "id": null,
            "title": null
         } );
    })

    it( 'should return the timeline in state after the timeline is created', () => {
        const recordDate = Date.now();
        const dummyEntry = {
                content: "Initial Entry",
                date: '1/1/2020',
                dateObject: recordDate,
                source: "Initial Entry", 
                title: "Initial Entry",
                what: "Initial Entry",
                where: "Initial Entry",
                who: "Initial Entry"
            };

        const response = {
            entries: [ 
                {
                    currentEntry: dummyEntry,
                    data: [ dummyEntry ]
                } 

            ]
        }

        let state = TimelineReducer( initialState, { type: actions.newTimelineCreated, response } );
        expect( state ).toEqual( {
            "currentEntry": {},
            "data": [],
            "id": null,
            "title": null
         } );
    })

    it( 'should load the current entry when called', () => {
        const response = { };
        let state = TimelineReducer( initialState, { type: actions.loadCurrentEntry }, response );
        expect( state ).toEqual( {
            id: null,
            data: [],
            currentEntry: {},
            title: undefined,
            what: undefined               
         } );
    })

    it( 'should synch the current entry when called', () => {
        const response = {};
        let state = TimelineReducer( initialState, { type: actions.synchCurrentEntry }, response );
        expect( state ).toEqual( {
            id: null,
            data: [],
            currentEntry: undefined,
            title: null,
         } );
    })
})



