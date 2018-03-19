import React from 'react'; 

  const renderFieldLarge = ( { className, type, label, labelClassName, input, inputClassName, meta: { touched, error } } ) => (
    <div className={ className } >
      <label className={ `${ labelClassName}` } >{ label }</label><span>  </span>
      <textarea className={ `${ inputClassName}` } { ...input } type={ "textarea" } />
      { touched && error && <span className="error" >{ error }</span> }
    </div>
  ); 

export default renderFieldLarge;

/*
// https://redux-form.com/7.2.3/examples/syncvalidation/
*/