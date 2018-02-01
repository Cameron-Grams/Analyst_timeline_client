import * as actionTypes from './actionTypes'; 
import { push } from 'react-router-redux';


const endpoint = "http://localhost:3030"; 

export function logoutUserSession(){
    sessionStorage.removeItem( "token" );
    return{ 
        type: 'LOGOUT_SESSION'
    }
}




const handleSuccessUserAuthentication = (response, dispatch) => {
    sessionStorage.setItem( "token", response.token )
    console.log( '[ userActions ] response ', response ); 
    dispatch({
        type: actionTypes.autenticationSuccess,
        response
    });
    dispatch(push( `/user-timelines`))
};

export function sendAuthentication( values ){
    const promise = fetch( `${ endpoint }/api/users/login`,
        {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( values ),
         } );   
        
    
    return {
        onRequest: actionTypes.requestAuthentication,
        onSuccess: handleSuccessUserAuthentication,
        onFailure: actionTypes.userAuthenticationFailed,
        promise
    }
}
