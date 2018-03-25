//=========User Actions ===========================

export const requestAuthentication = 'REQUEST_AUTHENTICATION';

export const autenticationSuccess = 'SUCCESSFUL_AUTHENTICTION'; 

export const userAuthenticationFailed = 'USER_FAILED_AUTHENTICATION'; 

export const requestBasicInfo = 'REQUEST_USER_BASIC_INFO'; 

export const returnUserBasicInfo = 'SUCCESSFUL_BASIC_USER_INFO';

export const userBasicInfoFailed = 'USER_BASIC_INFO_FAILED'; 

export const registerUserSuccess = 'USER_REGISTRATION_SUCCESS'; 

export const registrationUserTriggered = 'USER_REGISTRATION_TRIGGERED'; // not used  

export const registrationUserFailure = 'USER_REGISTRATION_FAILURE';  // not used 

export const logoutUserSession = 'LOGOUT_SESSION'; 

//===========Timeline Actions =====================
export const requestTimeline = 'REQUEST_TIMELINE';  // not used outside of reducer 

export const getSelectedTimelineSuccess = 'FETCH_SELECTED_TIMELINE_SUCCESS';

export const timlineRequestFailed = 'TIMELINE_REQUEST_FAILED'; //not used  

export const loadCurrentEntry = 'LOAD_CURRENT_ENTRY';

export const synchCurrentEntry = 'SYNCH_CURRENT_ENTRY'; 

export const newEntrySubmitted = 'NEW_ENTRY_SUBMITTED';   

export const submittedNewEntry = 'SUBMITTED_NEW_ENTRY';   

export const newEntryFailure = 'NEW_ENTRY_FAILURE'; //not used  

export const newTimelineCreated = 'NEW_TIMELINE_CREATED'; 

export const createTimelineTriggered = 'CREATE_TIMELINE_STARTED'; // not used 

export const createTimelineFailure = 'CREATE_TIMELINE_FAILURE'; // not used 

export const deleteTimelineTriggered = 'DELETE_TIMELINE_TRIGGERED';

export const timelineDeleted = 'TIMELINE_DELETED'; 

export const deleteTimelineFailure = 'DELETE_TIMELINE_FAILURE'; 


//-------------- update entries on timeline
export const updateEntryTriggered = 'UPDATE_ENTRY_TRIGGERED';

export const submittedUpdateEntry = 'SUBMITTED_UPDATE_ENTRY'; 

export const updateEntryFailure = 'UPDATE_ENTRY_FAILURE'; 

export const entryUpdated = 'ENTRY_UPDATED'; 

//---------------entries DELETED DB ------------
export const entryDeleted = 'ENTRY_DELETED';

export const deleteEntryTriggered = 'DELETE_ENTRY_TRIGGERED';

export const deleteEntryFailure = 'DELETE_ENTRY_FAILURE'; 


//==========App State Actions =====================

export const showAllEntries = 'SHOW_ALL_ENTRIES'; 

export const editEntry = 'EDIT_ENTRY'; 

export const addEntry = 'ADD_ENTRY';

export const formSubmit = 'SUBMIT_ENTRY_FORM';

export const returnMainTimeline = 'RETURN_MAIN_TIMELINE'; 

export const returnUserTImelines = 'RETURN_USER_TIMELINE'; 

//============Middleware specific ====================

export const UNAUTHORIZED_REDIRECT = 'UNAUTHORIZED_REDIRECT';

export const FORBIDDEN_REDIRECT = 'FORBIDDEN_REDIRECT';

export const NOT_FOUND_REDIRECT = 'NOT_FOUND_REDIRECT';

export const SHOW_ALERT_MESSAGE = 'SHOW_ALERT_MESSAGE';

export const SERVER_ERROR_REDIRECT = 'SERVER_ERROR_REDIRECT'; 

