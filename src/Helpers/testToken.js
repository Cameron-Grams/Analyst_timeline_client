
const TestToken = ( ) => {
    const tokenNow = sessionStorage.getItem('token');
    if ( tokenNow ){
        console.log( 'current token is ', tokenNow ); 
        return true;
    }
    return false; 
}

export default TestToken; 