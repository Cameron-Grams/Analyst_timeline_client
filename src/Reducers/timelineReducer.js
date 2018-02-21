import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    id: null,
    title: null,
    data: [],
    currentEntry: {},
}

const TimelineReducer = ( state = initialState, action ) => {

    console.log( '[ timelineReducer ] received action ', action.response );

    switch ( action.type ){
        case actionTypes.getSelectedTimelineSuccess:{  

            return{
                ...state,
                id: action.response._id, 
                title: action.response.title, 
                currentEntry: action.response.entries[ 0 ],
                data: action.response.entries
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