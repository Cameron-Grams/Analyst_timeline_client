import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    userId: null,
    name: null,
    timelines: []
}

const UserReducer = ( state = initialState, action ) => {
    switch ( action.type ){

        case actionTypes.autenticationSuccess:
        case actionTypes.returnUserBasicInfo:{ 
            return{
                ...state,
                userId: action.response._id,
                name: action.response.name,
                timelines: action.response.timelines
            }
        }

        case actionTypes.timelineDeleted:{
            console.log( action.response )
            const timelines = state.timelines;
            const index = state.timelines.findIndex(  x => x._id === action.response._id )
            timelines.splice( index, 1 )
            return{
                ...state,
                timelines
            }
        }

        case actionTypes.logoutUserSession:{
            return {...state,
            userId: initialState.userId,
            name: initialState.name,
            timelines: initialState.timelines
            }
        }

        case actionTypes.newTimelineCreated:{
            return{
                ...state,
                timelines: [
                    ...state.timelines,
                    action.response
                ]
            }
        }
        
        default:{
            return{
                ...state
            }
        }
    }
}

export default UserReducer; 