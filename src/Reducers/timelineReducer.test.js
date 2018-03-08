import TimelineReducer from './timelineReducer';
import * as actions from '../Actions/actionTypes';

const initialState = {
    id: null,
    title: null,
    data: [],
    currentEntry: {},
}

describe( 'Should reconcile the state of the app with the database', () => {
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
            entries: [ 
                {
                    id: 123,
                    title: "NEW NEW NEW",
                    currentEntry: dummyEntry,
                    data: [ dummyEntry ]
                } 

            ]
        }

        let state = TimelineReducer( initialState, { type: actions.getSelectedTimelineSuccess, response } )
    })

    it( 'should update an entry on the timeline in state', () => {
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

        let state = TimelineReducer( initialState, { type: actions.entryUpdated, response } )
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

        let state = TimelineReducer( initialState, { type: actions.entryDeleted, response } )
    })

})



