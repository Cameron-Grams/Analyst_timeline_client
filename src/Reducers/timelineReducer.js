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
            return{
                ...state,
                id: action.response._id, 
                title: action.response.title, 
                currentEntry: action.response.entries[ 0 ],
                data: action.response.entries
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