const TestToken = ( ) => {
    if ( sessionStorage.getItem('token') ){
        return true;
    }
    return false; 
}

export default TestToken; 