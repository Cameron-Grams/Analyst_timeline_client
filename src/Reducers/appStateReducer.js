import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    hasRequestAuthentication: false,
    isAuthenticated: false,
    hasFailedAuthentication: false,
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

        case actionTypes.getSelectedTimelineSuccess:
        case actionTypes.timlineRequestFailed:{
            return{
                ...state,
                isFetchingSelectedTimeline: initialState.isFetchingSelectedTimeline
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

        default:{
            return{
                ...state
            }
        }
    }
}



export default AppStateReducer;