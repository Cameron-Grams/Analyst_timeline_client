import React from 'react'; 
import { connect } from 'react-redux'; 
import LoginForm from './LoginForm'; 
import { sendAuthentication } from '../../Actions/userActions'; 


const Login = ( props ) => {  

    const authenticateUser = ( values ) => {
        props.sendAuthentication( values ); 
    }

    const failedLogin = props.appState.failedAuthentication ?
        <div><h3>Try to log in again</h3></div> :
        <div></div>;

    return(
    <div> 
        <h1>Place Holder Login</h1>
        <LoginForm onSubmit={ authenticateUser } />
        { failedLogin } 
    </div>
    )
}

const mapStateToProps = ( state ) => ( {
    user: state.user,
    appState: state.appState
})

export default connect( mapStateToProps, { sendAuthentication } )( Login ); 