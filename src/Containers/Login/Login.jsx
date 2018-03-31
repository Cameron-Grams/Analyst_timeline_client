import React from 'react'; 
import { connect } from 'react-redux'; 
import LoginForm from './LoginForm'; 
import './Login.css'; 
import { sendAuthentication } from '../../Actions/userActions'; 
import Button from '../../Components/Button/button';
import Waiting from '../../Components/Waiting/waiting'; 

const Login = ( props ) => {  

    const authenticateUser = ( values ) => {
        props.sendAuthentication( values ); 
    }

    const loginMessage = props.appState.hasRequestAuthentication ?
        <div>
            <Waiting />
            <p>Stand by for Log In validation</p>
        </div> :
        <div className={ "loginDiv" }>

            <h1>Log In to Work</h1>
                <LoginForm onSubmit={ authenticateUser } />
               
            <p>To log in with the demonstration account use:</p>
            <p >Email: <span className="demoFont" >demo@demo.com</span></p>
            <p >Password: <span className="demoFont" >demo</span></p>

            <Button
                className="regularButton"  
                sendPath={'/register' }
                buttonLable={ 'Register New User' } 
                />




        </div>;

    const failedLogin = props.appState.hasFailedAuthentication ?
        <div><h3>Try to log in again</h3></div> :
        <div></div>;

    return(
        <div> 
                       

            { loginMessage }
            { failedLogin } 
        </div>
    )
}

const mapStateToProps = ( state ) => ( {
    user: state.user,
    appState: state.appState
})

export default connect( mapStateToProps, { sendAuthentication } )( Login ); 