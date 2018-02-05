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





const handleSuccessTimelineInfo = ( response, dispatch ) => {
    dispatch( { 
        type: 'SUCCESSFUL_TIMELINE_REQUEST',
        response } );
    dispatch( push( '/dashboard' ) ); 
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
        onSuccess: handleSuccessTimelineInfo,
        onFailure: actionTypes.timlineRequestFailed,
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




const newTimelineCreated = ( response, dispatch ) => {
    dispatch( { 
        type: actionTypes.newTimelineCreated
    })
    dispatch( push( '/user-timelines' ) );
}

export function createNewTimeline( values ){
      const promise = fetch( `${ endpoint }/api/timelines/new-timeline`,
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