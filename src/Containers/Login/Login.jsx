import React from 'react'; 
import { connect } from 'react-redux'; 
import LoginForm from './LoginForm'; 
import { sendAuthentication } from '../../Actions/userActions'; 
import Button from '../../Components/button';


const Login = ( props ) => {  

    const authenticateUser = ( values ) => {
        props.sendAuthentication( values ); 
    }

    const failedLogin = props.appState.hasFailedAuthentication ?
        <div><h3>Try to log in again</h3></div> :
        <div></div>;

    return(
        <div> 
            <h1>Log In to Work</h1>
            <LoginForm onSubmit={ authenticateUser } />
            <Button
              sendPath={'/register' }
              buttonLable={ 'Register New User' } 
            />
            { failedLogin } 
        </div>
    )
}

const mapStateToProps = ( state ) => ( {
    user: state.user,
    appState: state.appState
})

export default connect( mapStateToProps, { sendAuthentication } )( Login ); 