import React from 'react';
import RegistrationForm from './RegistrationForm'; 
import { registerNewUser } from '../../Actions/userActions'; 
import { connect } from 'react-redux';  

let Register = ( props ) => {

    const failedRegistrationNotice = props.appState.registrationUserFailure ?
        <div><h2>Registration failed, try again</h2></div>
        : null; 

    const sendRegistration = ( values ) => {
        props.registerNewUser( values );  
    }

    return( 
        <div className={ "form" } id="registrationForm" >
            < RegistrationForm onSubmit={ sendRegistration } />
            { failedRegistrationNotice }
        </div>
     )
};

const mapStateToProps = ( state ) => ( {
    appState: state.appState
})
Register = connect( mapStateToProps, { registerNewUser } )( Register );

export default Register;