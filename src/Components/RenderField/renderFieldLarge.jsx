import React from 'react'; 

  const renderFieldLarge = ( { className, type, label, labelClassName, input, inputClassName, meta: { touched, error } } ) => (
    <div className={ className } >
      <div className={ `${ labelClassName}` } ><label >{ label }</label><span>  </span></div>
      <div className={ `${ inputClassName}` } ><textarea  { ...input } type={ "textarea" } /></div>
      { touched && error && <span className="error" >{ error }</span> }
    </div>
  ); 

export default renderFieldLarge;

/*
// https://redux-form.com/7.2.3/examples/syncvalidation/
*/