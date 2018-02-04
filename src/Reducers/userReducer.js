const initialState = {
    userId: 0,
    name: "none",
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

        case 'LOGOUT_SESSION':{
            return {...state,
            userId: 0,
            name: "none",
            timelines: []
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