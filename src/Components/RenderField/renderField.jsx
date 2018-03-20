import React from 'react'; 

  const renderField = ( { className, type, label, labelClassName, input, inputClassName, meta: { touched, error } } ) => (
    <div className={ className } >
      <div className={ `${ labelClassName}` } ><label >{ label }</label><span>  </span></div>
      <div className={ `${ inputClassName}` } > <input  { ...input } type={ type } /></div>
      { touched && error && <span className="error" >{ error }</span> }
    </div>
  ); 

export default renderField;

/*
// https://redux-form.com/7.2.3/examples/syncvalidation/
*/