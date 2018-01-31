const initialState = {
    userId: 0,
    name: "none",
    timelines: []
}

const UserReducer = ( state = initialState, action ) => {
    switch ( action.type ){
        case 'SUCCESSFUL_AUTHENTICTION':{
            return{
                ...state,
                userId: action.id,
                name: action.name,
                timelines: action.timelines
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}