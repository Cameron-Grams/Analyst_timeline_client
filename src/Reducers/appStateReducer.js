const initialState = {
    hasRequestAuthentication: false,
    isAuthenticated: false,
    hasFailedAuthentication: false,
    hasShowTimeline: true,
    hasShowAllEntries: false,
    isShowSingleEntry: false,
    hasShowCurrentEntry: false
}

const AppStateReducer = ( state = initialState, action ) => {
    switch ( action.type ){

        case 'REQUEST_USER_BASIC_INFO': 
        case 'REQUEST_AUTHENTICATION':{
            return{
                ...state,
                hasRequestAuthentication: true
            }
        }

        case 'SUCCESSFUL_BASIC_USER_INFO':
        case 'SUCCESSFUL_AUTHENTICTION':{
            return{
                ...state,
                hasRequestAuthentication: false,
                isAuthenticated: true,
            }
        }

        case 'USER_BASIC_INFO_FAILED': 
        case 'USER_FAILED_AUTHENTICATION':{
            return{
                ...state,
                hasRequestAuthentication: false,
                isAuthenticated: false,
                hasFailedAuthentication: true
            }
        }

       case 'SHOW_ALL_ENTRIES': {
            return {
                ...state,
                hasShowAllEntries: !state.hasShowAllEntries
            }
        }
        case 'EDIT_ENTRY':{
            return{
                ...state,
                hasShowAllEntries: false,
                hasShowTimeline: false,
                isShowSingleEntry: true,
                hasShowCurrentEntry: true
            }
        }
        case 'ADD_ENTRY':{
            return{
                ...state,
                hasShowAllEntries: false,
                hasShowTimeline: false,
                isShowSingleEntry: true
            }
        }

        case 'RETURN_MAIN_TIMELINE':
        case 'SUBMIT_ENTRY_FORM':{
            return{
                ...state,
                isShowSingleEntry: false,
                hasShowCurrentEntry: false,
                hasShowTimeline: true
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