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
            console.log( '[ userReducer ] action response ', action.response ); 
           
            return{
                ...state,
                userId: action.response._id,
                name: action.response.name,
                timelines: action.response.timelines
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
            console.log( '[ userReducer ] action on new timeline created ', action.response ); 

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