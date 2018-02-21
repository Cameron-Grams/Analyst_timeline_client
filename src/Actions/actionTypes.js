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

//-------------- update entries on timeline
export const updateEntryTriggered = 'UPDATE_ENTRY_TRIGGERED';

export const submittedUpdateEntry = 'SUBMITTED_UPDATE_ENTRY'; 

export const updateEntryFailure = 'UPDATE_ENTRY_FAILURE'; 

export const entryUpdated = 'ENTRY_UPDATED'; 

//---------------entries from DB ------------



//==========App State Actions =====================

export const showAllEntries = 'SHOW_ALL_ENTRIES'; 

export const editEntry = 'EDIT_ENTRY'; 

export const addEntry = 'ADD_ENTRY';

export const formSubmit = 'SUBMIT_ENTRY_FORM';

export const returnMainTimeline = 'RETURN_MAIN_TIMELINE'; 

