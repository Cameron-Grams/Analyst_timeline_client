import * as actionTypes from './actionTypes'; 
import { push } from 'react-router-redux';

const endpoint = "http://localhost:3030"; 

const handleSuccessTimelineInfo = ( response, dispatch ) => {
    dispatch( { 
        type: 'SUCCESSFUL_TIMELINE_REQUEST',
        response } );
    dispatch( push( '/dashboard' ) ); 
}


export function getSelectedTimeline( values ){

    console.log( '[ timelineActions ] values sending ', values ); 

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