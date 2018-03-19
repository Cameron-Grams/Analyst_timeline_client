import React from 'react'; 

  const renderField = ( { className, type, label, labelClassName, input, inputClassName, meta: { touched, error } } ) => (
    <div className={ className } >
      <label className={ `${ labelClassName}` } >{ label }</label><span>  </span>
      <input className={ `${ inputClassName}` } { ...input } type={ type } />
      { touched && error && <span className="error" >{ error }</span> }
    </div>
  ); 

export default renderField;

/*
// https://redux-form.com/7.2.3/examples/syncvalidation/
*/