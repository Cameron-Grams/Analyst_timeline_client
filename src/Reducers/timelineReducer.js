const initialState = {
    id: 0,
    title: "",
    data: [],
}

const TimelineReducer = ( state = initialState, action ) => {

    switch ( action.type ){
        case 'SUCCESSFUL_TIMELINE_REQUEST':{
            return{
                ...state,
                id: action.response.id, 
                title: action.response.title, 
                data: action.response.entries,
            }
        }

        case 'NEW_TIMELINE_CREATED':{
            return{
                ...state,
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