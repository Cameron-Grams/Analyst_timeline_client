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
            return{
                ...state,
                id: action.response._id, 
                title: action.response.title, 
                currentEntry: action.response.Entries[ 0 ]
            }
        }

        case actionTypes.buildDataEntries:{
            return{
                ...state,
                data: state.data.push( action.response.entry ) 
            }
        }
        
        case actionTypes.newTimelineCreated:{
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