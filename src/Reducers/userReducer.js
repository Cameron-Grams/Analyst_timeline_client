import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    userId: null,
    name: null,
    timelines: []
}

const UserReducer = ( state = initialState, action ) => {
    switch ( action.type ){
        case actionTypes.autenticationSuccess:{
            return{
                ...state,
                userId: action.response.userId,
                name: action.response.name,
                timelines: action.response.userTimelines
            }
        }

        case actionTypes.returnUserBasicInfo:{
            return{ 
                ...state,
                userId: action.response.id,
                name: action.response.name,
                timelines: action.response.userTimelines
            }
        }

        case actionTypes.registerUserSuccess:{
            return{
                ...state,
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