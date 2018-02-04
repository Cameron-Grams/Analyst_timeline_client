import React from 'react';
import { reduxForm, Field } from 'redux-form';

let RegistrationForm = props => {
    
  return(   

      <form onSubmit={ props.handleSubmit }>
        <div className={ "formElement" } >
            <label htmlFor="userName">Enter User Name</label>
            <Field name="userName" component="input" type="text" />
        </div>
        <div className={ "formElement" } >
            <label htmlFor="userEmail">Enter Email</label>
            <Field name="userEmail" component="input" type="text" />
        </div>
        <div className={ "formElement" } >
            <label htmlFor="userPassword">Enter Password</label>
            <Field name="userPassword" component="input" type="text" />
        </div> 
        <button className={ "formElement" } type="submit" >Submit</button>
    
      </form>
  )
}

RegistrationForm = reduxForm({
  form: 'registrationForm'
})(RegistrationForm)


export default RegistrationForm;

