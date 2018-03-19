import * as actionTypes from './actionTypes'; 
import { push } from 'react-router-redux';

// const endpoint = "http://localhost:3030"; 
const endpoint = "https://aqueous-fjord-19217.herokuapp.com";

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

export function getSelectedTimeline( timelineId ){
    const sendToken = sessionStorage.getItem( "token" );
    const promise = fetch( `${ endpoint }/api/timelines`,
        {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: sendToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( { timelineId: timelineId } ),
         } );   
    
    return {
        onRequest: actionTypes.requestTimeline,
        onSuccess: actionTypes.getSelectedTimelineSuccess,
        onFailure: handleGetSelectedTimelineFailure,
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
    const sendToken = sessionStorage.getItem( "token" );
    const promise = fetch( `${ endpoint }/api/timelines/${ userId }`,
        {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: sendToken,
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


const timelineDeleted = ( response, dispatch ) => {
    dispatch( { 
        type: actionTypes.timelineDeleted,
        response
    })
    dispatch( push( '/user-timelines' ) );
}

export function deleteCurrentTimeline( userId, timelineId ){
    console.log( '[ timeline actions ] sending user id: ', userId ); 
    const sendToken = sessionStorage.getItem( "token" );
    const promise = fetch( `${ endpoint }/api/timelines/${ userId }`,
        {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: sendToken,
            'Content-Type': 'application/json',
            },
        body: JSON.stringify( { timelineId: timelineId } ),
        } 
    );   
        
    return {
        onRequest: actionTypes.deleteTimelineTriggered,
        onSuccess: timelineDeleted,
        onFailure: actionTypes.deleteTimelineFailure,
        promise
    }
}

















const submittedNewEntry = ( response, dispatch ) => {
    getSelectedTimeline( response._id ); 
    dispatch( {
        type: actionTypes.formSubmit,
        response
    } )
}

export function addEntryToTimeline( values, entryId ){
    const sendToken = sessionStorage.getItem( "token" );
    const promise = fetch( `${ endpoint }/api/entries/${ entryId }`,
        {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: sendToken,
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
        type: actionTypes.entryUpdated,
        response
    } )
}

 export function updateEntryOnTimeline( values, entryId ){
    const sendToken = sessionStorage.getItem( "token" );
    const promise = fetch( `${ endpoint }/api/entries/${ entryId }`,
        {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: sendToken,
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

const deletEntry = ( response, dispatch ) => {
    getSelectedTimeline( response.targetTimeline );
    dispatch( {
        type: actionTypes.entryDeleted,
        response
    } )
}

 export function deleteEntryOnTimeline( entryId, timelineId ){
    const sendToken = sessionStorage.getItem( "token" );
    const promise = fetch( `${ endpoint }/api/entries/${ entryId }`,
        {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: sendToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( { entryId: entryId,  timelineId: timelineId } ),
         } );   
    
    return {
        onRequest: actionTypes.deleteEntryTriggered,
        onSuccess: deletEntry,
        onFailure: actionTypes.deleteEntryFailure,
        promise
    }
};
