import * as actionTypes from './actionTypes'; 
import { push } from 'react-router-redux';

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



export function getSelectedTimeline( values ){

    const sendValue = {
        index: values
    }

    const promise = fetch( `${ endpoint }/api/timelines`,
        {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( sendValue ),
         } );   
        
    
    return {
        onRequest: actionTypes.requestTimeline,
        onSuccess: actionTypes.getSelectedTimelineSuccess,
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
    const promise = fetch( `${ endpoint }/api/timelines/new-entry/${ timelineId }`,
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
    const promise = fetch( `${ endpoint }/api/timelines/update-entry/${ timelineId }`,
        {
        method: 'PATCH',
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

export function createNewTimeline( values ){
      const promise = fetch( `${ endpoint }/api/users/new-timeline`,
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