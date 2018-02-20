import * as actionTypes from './actionTypes'; 
import { push } from 'react-router-redux';
import { sendForFullEntries } from './entryActions'; 

const endpoint = "http://localhost:3030"; 

export function loadCurrentEntry( entry ){
    return{
        type: 'LOAD_CURRENT_ENTRY',
        entry
    }
}

export function synchCurrentEntry( newEntry ){
    return{
        type: 'SYNCH_CURRENT_ENTRY',
        newEntry
    }
}

export function toUserTimelines(){
    push( '/user-timelines'); 
}

const handleGetSelectedTimelineFailure = ( response, dispatch ) => {
    dispatch( {
        type: actionTypes.timlineRequestFailed, 
    })
    dispatch( push( '/user-timelines' ) )
}

const handleGetSelectedTimelineSuccess = ( response, dispatch ) => {
    const allEntryIds = response.Entries; 
    sendForFullEntries( allEntryIds ); 

    dispatch( {
        type: actionTypes.getSelectedTimelineSuccess
    })
}


export function getSelectedTimeline( timelineId ){
    const promise = fetch( `${ endpoint }/api/timelines`,
        {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( { timelineId: timelineId } ),
         } );   
    
    return {
        onRequest: actionTypes.requestTimeline,
        onSuccess: handleGetSelectedTimelineSuccess,
        onFailure: handleGetSelectedTimelineFailure,
        promise
    }
}

const submittedNewEntry = ( response, dispatch ) => {
    dispatch( {
        type: actionTypes.formSubmit
    } )
}

export function addEntryToTimeline( values, timelineId ){
    const promise = fetch( `${ endpoint }/api/timelines/${ timelineId }`,
        {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( values ),
         } );   
    
    return {
        onRequest: actionTypes.newEntrySubmitted,
        onSuccess: submittedNewEntry,
        onFailure: actionTypes.newEntryFailure,
        promise
    }
}

const submittedUpdateEntry = ( response, dispatch ) => {
    dispatch( {
        type: actionTypes.entryUpdated
    } )
}

 export function updateEntryOnTimeline( values, timelineId ){
    const promise = fetch( `${ endpoint }/api/timelines/${ timelineId }`,
        {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( values ),
         } );   
    
    return {
        onRequest: actionTypes.updateEntryTriggered,
        onSuccess: submittedUpdateEntry,
        onFailure: actionTypes.updateEntryFailure,
        promise
    }

}

const newTimelineCreated = ( response, dispatch ) => {
    dispatch( { 
        type: actionTypes.newTimelineCreated,
        response
    })
    dispatch( push( '/user-timelines' ) );
}

export function createNewTimeline( values, userId ){
      const promise = fetch( `${ endpoint }/api/timelines/new-timeline/${ userId }`,
        {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
        body: JSON.stringify( values )
        } 
      );   
        
    return {
        onRequest: actionTypes.createTimelineTriggered,
        onSuccess: newTimelineCreated,
        onFailure: actionTypes.createTimelineFailure,
        promise
    }
}