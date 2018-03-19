import React from 'react'; 

  const renderFieldLarge = ( { className, type, label, input, meta: { touched, error } } ) => (
    <div className={ className } >
      <label>{ label }</label><span>  </span>
      <textarea { ...input } type={ "textarea" } />
      { touched && error && <span className="error" >{ error }</span> }
    </div>
  ); 

export default renderFieldLarge;

/*
// https://redux-form.com/7.2.3/examples/syncvalidation/
*/