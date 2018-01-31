import { combineReducers } from 'redux';  
import { reducer as formReducer } from 'redux-form'; 

import AppStateReducer from './appStateReducer';




const reducer = combineReducers( {
    appState: AppStateReducer, 
    form: formReducer
}) 



export default reducer; 