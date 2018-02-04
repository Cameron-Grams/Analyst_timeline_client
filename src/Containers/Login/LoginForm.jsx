import React from 'react';
import { reduxForm, Field } from 'redux-form';
import renderField from '../../Helpers/renderField';

let LoginForm = props => {

  return(   
      <form onSubmit={ props.handleSubmit }>
        <Field className={ "formElement" } name="userEmail" label={ "Enter Email" } component={ renderField } type="text" />
        <Field className={ "formElement" } name="userPassword" label={ "Enter Password" } component={ renderField } type="text" />
        <button className={ "formElement" } type="submit" >Submit</button>
      </form>
  )
}

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm)

export default LoginForm;
