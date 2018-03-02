import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    id: null,
    title: null,
    data: [],
    currentEntry: {},
}


const TimelineReducer = ( state = initialState, action ) => {

    switch ( action.type ){
        case actionTypes.formSubmit:
        case actionTypes.getSelectedTimelineSuccess:{  
            const recordDateNow = new Date(); 
            const formatDate = (value) => {
                    return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getFullYear();
                };
            const todayDateString = formatDate( recordDateNow ); 
            const dummyEntry = {
                content: "Initial Entry",
                date: todayDateString,
                dateObject: recordDateNow,
                source: "Initial Entry", 
                title: "Initial Entry",
                what: "Initial Entry",
                where: "Initial Entry",
                who: "Initial Entry"
            };
            return{
                ...state,
                id: action.response._id, 
                title: action.response.title, 
                currentEntry: action.response.entries.length ?  action.response.entries[ 0 ] : dummyEntry,
                data: action.response.entries.length ? action.response.entries : [ dummyEntry ]
            }
        }

        case actionTypes.entryUpdated:{
            const entries = state.data.slice();
            const index = entries.findIndex( x => x._id === action.response._id );  

            entries[ index ] = action.response;

            return{
                ...state,
                data: entries,
                currentEntry: entries[ 0 ]
            }
        }





        case actionTypes.entryDeleted:{
            const entries = state.data.slice();
            const index = entries.findIndex( x => x._id === action.response._id );  

            entries.splice( index, 1 )
            return{
                ...state,
                data: entries,
                currentEntry: entries[ 0 ]
            }
        }

        case actionTypes.newTimelineCreated:{
            return{
                ...state
            }
        }

        case actionTypes.loadCurrentEntry:{
            return{
                ...state,
                title: action.title,
                what: action.what
            }
        }
 
        case actionTypes.synchCurrentEntry:{
            return{
                ...state,
                currentEntry: action.newEntry
            }
        }

        default:{
            return{
                ...state
            }
        }
    }

}

export default TimelineReducer; 