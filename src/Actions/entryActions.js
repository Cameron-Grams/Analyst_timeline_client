import * as actionTypes from './actionTypes'; 

const endpoint = "http://localhost:3030"; 

export function sendForFullEntries( entryArray ){
    for ( let entry of entryArray ){
        sendEntry( entry )
    };
}

export function sendEntry( entryId ){
    const promise = fetch( `${ endpoint }/entries`,
        {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( { entryId: entryId } ),
         } );   
    
    return {
        onRequest: actionTypes.requestEntries,
        onSuccess: handleDataBuild,
        onFailure: actionTypes.requestEntryFailure,
        promise
    }
}

export function handleDataBuild( entry ){
    return{
        type: actionTypes.buildDataEntries,
        entry
    }
}