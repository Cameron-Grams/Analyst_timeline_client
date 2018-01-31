import React from 'react'; 

  const renderField = ( { className, type, label, input, meta: { touched, error } } ) => (
    <div className={ className } >
      <label>{ label }</label><span>  </span>
      <input { ...input } type={ type } />
      { touched && error && <span className="error" >{ error }</span> }
    </div>
  ); 

export default renderField;