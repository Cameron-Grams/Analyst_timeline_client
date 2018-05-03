import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    alertMessage: null,
    isLoaderVisibile: false,
    hasRequestAuthentication: false,
    isAuthenticated: false,
    hasFailedAuthentication: false,
    hasFailedRegistration: false,
    hasTimelineFocus: false,
    hasShowTimeline: true,
    hasShowAllEntries: false,
    isShowSingleEntry: false,
    hasShowCurrentEntry: false,
    isFetchingSelectedTimeline: false
}

const AppStateReducer = ( state = initialState, action ) => {
    switch ( action.type ){

        case actionTypes.HIDE_GLOBAL_LOADER:{
            return{
                ...state,
                isLoaderVisibile: initialState.isLoaderVisibile
            }
        }

        case actionTypes.SHOW_GLOBAL_LOADER:{
            return{
                ...state,
                isLoaderVisibile: true
            }
        }

        case actionTypes.requestTimeline:{
            return{
                ...state,
                isFetchingSelectedTimeline: true
            }
        }

        case actionTypes.getSelectedTimelineSuccess:{  
            return{
                ...state,
                isFetchingSelectedTimeline: initialState.isFetchingSelectedTimeline,
                hasTimelineFocus: true
            }
        }

        case actionTypes.timlineRequestFailed:{
            return{
                ...state,
                isFetchingSelectedTimeline: initialState.isFetchingSelectedTimeline
            }
        }

       case actionTypes.timelineDeleted:{ 
            return{
                ...state,
                hasTimelineFocus: false
            }
       }

        case actionTypes.requestBasicInfo: 
        case actionTypes.requestAuthentication:{
            return{
                ...state,
                hasRequestAuthentication: true
            }
        }

        case actionTypes.returnUserBasicInfo:
        case actionTypes.autenticationSuccess:{
            return{
                ...state,
                hasFailedAuthentication: false,
                hasRequestAuthentication: false,
                isAuthenticated: true,
            }
        }

        case actionTypes.SHOW_ALERT_MESSAGE: { 
            console.log( '[ appStateReducer ] on fail: ', action.response );

            return{
                ...state,
                hasRequestAuthentication: false,
                isAuthenticated: false,
                hasFailedAuthentication: true,
                alertMessage: {
                    hasError: true,
                    message: action.response.message,
                }
            }
        }

        case actionTypes.registerUserSuccess:{
            return{
                ...state,
                hasFailedRegistration: initialState.hasFailedRegistration,
            }
        }

        case actionTypes.registrationUserFailure:{
            return{
                ...state,
                hasFailedRegistration: true,
            }
        }


       case actionTypes.showAllEntries: {
            return {
                ...state,
                hasShowAllEntries: !state.hasShowAllEntries,
                hasShowTimeline: !state.hasShowTimeline,
            }
        }

        case actionTypes.editEntry:{
            return{
                ...state,
                hasShowAllEntries: false,
                hasShowTimeline: false,
                isShowSingleEntry: true,
                hasShowCurrentEntry: true
            }
        }

        case actionTypes.addEntry:{
            return{
                ...state,
                hasShowAllEntries: false,
                hasShowTimeline: false,
                isShowSingleEntry: true
            }
        }

        case actionTypes.deleteEntryTriggered:
        case actionTypes.returnMainTimeline:
        case actionTypes.entryUpdated:
        case actionTypes.formSubmit:{
            return{
                ...state,
                isShowSingleEntry: false,
                hasShowCurrentEntry: false,
                hasShowTimeline: true
            }
        }

        case actionTypes.returnUserTImelines:{
            return{
                ...state,
                hasTimelineFocus: initialState.hasTimelineFocus,
            }
        }

        case actionTypes.RESET_ALERT_MESSAGE:{
            return{
                ...state,
                alertMessage: initialState.alertMessage
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



/*
        case actionTypes.SHOW_ALERT_MESSAGE: {
            return {
                ...state,
                alertMessage: {
                    hasError: true,
                    message: action.response.message,
                },
            };
        }
*/
