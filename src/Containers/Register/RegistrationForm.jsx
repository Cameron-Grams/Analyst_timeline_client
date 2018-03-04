import React from 'react';
import { reduxForm, Field } from 'redux-form';
import renderField from '../../Components/RenderField/renderField';
import { registerValidator as validate } from '../../Helpers/registerValidator'; 

let RegistrationForm = props => {
    
  return(   

      <form onSubmit={ props.handleSubmit }>
        <Field className={ "formElement" } name="userName" label={ "Enter User Name" } component={ renderField } type="text" /> 

        <Field className={ "formElement" } name="userEmail" label={ "Enter Email" } component={ renderField } type="text" />

        <Field className={ "formElement" } name="userPassword" label={ "Enter Password" } component={ renderField } type="text" />

        <button className={ "formElement" } type="submit" >Submit</button>
      </form>
  )
}

RegistrationForm = reduxForm({
  form: 'registrationForm',
  validate
})(RegistrationForm)


export default RegistrationForm;

