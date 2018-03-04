const loginValidator = values => {
    console.log( '[ loginValidator ] in login validator with ', values );

    const errors = {}
    if (!values.userEmail) {
      errors.userEmail = 'Email is Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.userEmail = 'Invalid email address'
    }
    if ( !values.userPassword ){
        errors.userPassword = "Password Required"
    }    
    return errors
  }

module.exports = loginValidator;