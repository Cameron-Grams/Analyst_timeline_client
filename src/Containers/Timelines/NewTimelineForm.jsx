import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '../../Components/Button/button';

let NewTimelineForm = props => {
    
  return(   

      <form onSubmit={ props.handleSubmit }>
        <div className={ "formElement" } >
            <label htmlFor="timelineTitle">Enter the theme of the Timeline</label>
            <Field name="timelineTitle" component="input" type="text" />

            <Button
             className={ "timelineOptions"}
             sendPath={ '/user-timelines'}
             buttonLable={ 'Create Timeline' } /> 

        </div>
   
      </form>
  )
}

NewTimelineForm = reduxForm({
  form: 'createTimelineForm'
})( NewTimelineForm )


export default NewTimelineForm;

