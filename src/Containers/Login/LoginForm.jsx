import React from 'react';
import { reduxForm, Field } from 'redux-form';
import renderField from '../../Components/RenderField/renderField';
import { loginValidator as validate } from '../../Helpers/loginValidator'; 


let LoginForm = props => {

  return(   
      <form onSubmit={ props.handleSubmit }>
        <Field className={ "formElement" } name="userEmail" label={ "Enter Email" } component={ renderField } type="text" />
        <Field className={ "formElement" } name="userPassword" label={ "Enter Password" } component={ renderField } type="password" />
        <button className={ "formElement" } type="submit" >Submit</button>
      </form>
  )
}

LoginForm = reduxForm({
  form: 'loginForm',
  validate
})(LoginForm)

export default LoginForm;
