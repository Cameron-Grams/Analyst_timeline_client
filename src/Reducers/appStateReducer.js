const initialState = {
    requestAuthentication: false,
    isAuthenticated: false,
    failedAuthentication: false
}

const AppStateReducer = ( state = initialState, action ) => {
    switch ( action.type ){
        case 'REQUEST_AUTHENTICATION':{
            return{
                ...state,
                requestAuthentication: true
            }
        }

        case 'SUCCESSFUL_AUTHENTICTION':{
            return{
                ...state,
                requestAuthentication: false,
                isAuthenticated: true,
            }
        }

        case 'USER_FAILED_AUTHENTICATION':{
            return{
                ...state,
                requestAuthentication: false,
                isAuthenticated: true,
                failedAuthentication: true
            }
        }

        default:{
            return{
                ...state
            }
        }
    }
}



export default AppStateReducer;