const initialState = {
    userId: null,
    name: null,
    timelines: []
}

const UserReducer = ( state = initialState, action ) => {
    switch ( action.type ){
        case 'SUCCESSFUL_AUTHENTICTION':{
            return{
                ...state,
                userId: action.response.id,
                name: action.response.name,
                timelines: action.response.analysis
            }
        }

        case 'SUCCESSFUL_BASIC_USER_INFO':{
            return{ 
                ...state,
                userId: action.response.id,
                name: action.response.name,
                timelines: action.response.analysis
            }
        }

        case 'USER_REGISTRATION_SUCCESS':{
            return{
                ...state,
            }
        }

        case 'LOGOUT_SESSION':{
            return {...state,
            userId: initialState.userId,
            name: initialState.name,
            timelines: initialState.timelines
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