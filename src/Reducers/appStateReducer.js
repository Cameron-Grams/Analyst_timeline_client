import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    alertMessage: {
        hasError: false,
        message: ""
    },
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

        case actionTypes.userBasicInfoFailed: 
        case actionTypes.userAuthenticationFailed:{
            return{
                ...state,
                hasRequestAuthentication: false,
                isAuthenticated: false,
                hasFailedAuthentication: true
            }
        }

        case actionTypes.registerUserSuccess:{
            return{
                ...state,
                hasFailedRegistration: initialState.hasFailedRegistration,
                alertMessage: initialState.alertMessage
            }
        }

        case actionTypes.registrationUserFailure:{
            return{
                ...state,
                hasFailedRegistration: true,
                alertMessage: {
                        hasError: true,
                        message: "Registration failed"
                    }
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