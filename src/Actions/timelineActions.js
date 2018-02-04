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

    const promise = fetch( `${ endpoint }/api/timelines/${ values }`,
        {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( values ),
         } );   
        
    
    return {
        onRequest: actionTypes.requestTimeline,
        onSuccess: handleSuccessTimelineInfo,
        onFailure: actionTypes.timlineRequestFailed,
        promise
    }
}