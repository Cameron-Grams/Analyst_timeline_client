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
        <div>

            <h1>Log In to Work</h1>
                <LoginForm onSubmit={ authenticateUser } />
                <Button
                className="regularButton"  
                sendPath={'/register' }
                buttonLable={ 'Register New User' } 
                />


            <p>To log in with the demonstration account use:</p>
                <ul className={ "demoDetails"   } >
                    <li className={ "detailItems" } >Email: <span className={ "demoFont" }>demo@demo.com</span></li>
                    <li className={ "detailItems" } >Password: <span className={ "demoFont" }>demo</span></li>
                </ul>
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