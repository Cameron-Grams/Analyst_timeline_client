const initialState = {
    requestAuthentication: false,
    isAuthenticated: false,
    failedAuthentication: false,
    showTimeline: true,
    showAllEntries: false,
    singleEntry: false
}

const AppStateReducer = ( state = initialState, action ) => {
    switch ( action.type ){

        case 'REQUEST_USER_BASIC_INFO': 
        case 'REQUEST_AUTHENTICATION':{
            return{
                ...state,
                requestAuthentication: true
            }
        }


        case 'SUCCESSFUL_BASIC_USER_INFO':
        case 'SUCCESSFUL_AUTHENTICTION':{
            return{
                ...state,
                requestAuthentication: false,
                isAuthenticated: true,
            }
        }

        case 'USER_BASIC_INFO_FAILED': 
        case 'USER_FAILED_AUTHENTICATION':{
            return{
                ...state,
                requestAuthentication: false,
                isAuthenticated: false,
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