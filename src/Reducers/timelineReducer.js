import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    id: null,
    title: null,
    data: [],
    currentEntry: {},
}


const TimelineReducer = ( state = initialState, action ) => {

    switch ( action.type ){
        case actionTypes.formSubmit:
        case actionTypes.getSelectedTimelineSuccess:{  
            console.log( ' timelineReducer: response action for new TL ', action.response.entries[ 0 ] );

            const dummyEntry = {
                content: "Dummy val",
                date: "1/1/2018",
                dateObject: "2018-03-25T04:00:00.000Z",
                source: "something", 
                title: "something",
                what: "something",
                where: "somewhere",
                who: "someone"
            };

            return{
                ...state,
                id: action.response._id, 
                title: action.response.title, 
                currentEntry: action.response.entries.length ?  action.response.entries[ 0 ] : dummyEntry,
                data: action.response.entries.length ? action.response.entries : [ dummyEntry ]
            }
        }

        case actionTypes.entryUpdated:{
            const entries = state.data.slice();
            console.log( '[ timelineReducer ] entries ', entries );
            const index = entries.findIndex( x => x._id === action.response._id );  

            entries[ index ] = action.response;

            return{
                ...state,
                data: entries,
                currentEntry: entries[ 0 ]
            }
        }





        case actionTypes.entryDeleted:{
            const entries = state.data.slice();
            console.log( '[ timelineReducer ] entries ', entries );
            const index = entries.findIndex( x => x._id === action.response._id );  

            entries.splice( index, 1 )
            return{
                ...state,
                data: entries,
                currentEntry: entries[ 0 ]
            }
        }

        case actionTypes.newTimelineCreated:{
            return{
                ...state
            }
        }

        case actionTypes.loadCurrentEntry:{
            return{
                ...state,
                title: action.title,
                what: action.what
            }
        }
 
        case actionTypes.synchCurrentEntry:{
            return{
                ...state,
                currentEntry: action.newEntry
            }
        }

        default:{
            return{
                ...state
            }
        }
    }

}

export default TimelineReducer; 