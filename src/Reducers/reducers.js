import { combineReducers } from 'redux';  
import { reducer as formReducer } from 'redux-form'; 

import AppStateReducer from './appStateReducer';
import UserReducer from './userReducer'; 
import TimelineReducer from './timelineReducer'; 


const reducer = combineReducers( {
    user: UserReducer,
    timeline: TimelineReducer,
    appState: AppStateReducer, 
    form: formReducer
}) 



export default reducer; 