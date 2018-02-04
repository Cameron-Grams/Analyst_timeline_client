const initialState = {
    currentEntry: {},
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



        case 'SUCCESSFUL_TIMELINE_REQUEST':{
            return{
                ...state,
                currentEntry: action.response.entries[ 0 ]
            }
        }



        case 'SYNCH_CURRENT_ENTRY':{
            return{
                ...state,
                currentEntry: action.newEntry
            }
        }

        case 'LOAD_CURRENT_ENTRY':{
            return{
                ...state,
                title: action.title,
                what: action.what
            }
        }

        case 'SHOW_ALL_ENTRIES': {
            return {
                ...state,
                showAllEntries: !state.showAllEntries
            }
        }
        case 'EDIT_ENTRY':{
            return{
                ...state,
                showAllEntries: false,
                showTimeline: false,
                singleEntry: true,
                showCurrentEntry: true
            }
        }
        case 'ADD_ENTRY':{
            return{
                ...state,
                showAllEntries: false,
                showTimeline: false,
                singleEntry: true
            }
        }
        case 'SUBMIT_ENTRY_FORM':{
            return{
                ...state,
                singleEntry: false,
                showCurrentEntry: false,
                showTimeline: true
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