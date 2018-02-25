import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    id: null,
    title: null,
    data: [],
    currentEntry: {},
}

const TimelineReducer = ( state = initialState, action ) => {

    switch ( action.type ){
        case actionTypes.getSelectedTimelineSuccess:{  
            console.log( '[ 3--timelineReducer ] received update with ', action.response ); 
            return{
                ...state,
                id: action.response._id, 
                title: action.response.title, 
                currentEntry: action.response.entries[ 0 ],
                data: action.response.entries
            }
        }

        case actionTypes.newTimelineCreated:{
            console.log( '[ timelineReducer ] state ', state, ' action ', action.response );

            return{
                ...state,
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