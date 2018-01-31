const initialState = {
    userId: 0,
    name: "none",
    timelines: []
}

const UserReducer = ( state = initialState, action ) => {
    switch ( action.type ){
        case 'SUCCESSFUL_AUTHENTICTION':{
            console.log( '[ userReducer, 10 ] ', action );
            return{
                ...state,
                userId: action.response.id,
                name: action.response.name,
                timelines: action.response.analysis
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}

export default UserReducer; 