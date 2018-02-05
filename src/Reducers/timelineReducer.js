const initialState = {
    id: null,
    title: null,
    data: [],
    currentEntry: {},
}

const TimelineReducer = ( state = initialState, action ) => {

    switch ( action.type ){
        case 'SUCCESSFUL_TIMELINE_REQUEST':{
            return{
                ...state,
                id: action.response.id, 
                title: action.response.title, 
                data: action.response.entries,
                currentEntry: action.response.entries[ 0 ]
            }
        }

        case 'NEW_TIMELINE_CREATED':{
            return{
                ...state,
            }
        }


        case 'LOAD_CURRENT_ENTRY':{
            return{
                ...state,
                title: action.title,
                what: action.what
            }
        }

 
        case 'SYNCH_CURRENT_ENTRY':{
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