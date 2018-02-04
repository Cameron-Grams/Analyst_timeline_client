import React from 'react';
import RegistrationForm from './RegistrationForm'; 
import { registerNewUser } from '../../Actions/userActions'; 
import { connect } from 'react-redux';  

let Register = ( props ) => {

    const sendRegistration = ( values ) => {
        props.registerNewUser( values );  
    }

    return( 
        <div className={ "form" } id="registrationForm" >
            < RegistrationForm onSubmit={ sendRegistration } />
        </div>
     )
};

Register = connect( null, { registerNewUser } )( Register );

export default Register;