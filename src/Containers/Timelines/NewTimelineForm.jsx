import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '../../Components/Button/button';
import renderField from '../../Components/RenderField/renderField';
import { timelineValidator as validate } from '../../Helpers/timelineValidator'; 


let NewTimelineForm = props => {

    return(   

        <form onSubmit={ props.handleSubmit }>
          <div className={ "formElement" } >

              <Field className={ "formElement" } name="timelineTitle" label={ "Enter Title of the Timeline" } component={ renderField } type="text" />

              <Button
                className={ "regularButton" }
                divStyling={ "timelineOptions"}
                clickHandler={ props.handleSubmit }
                buttonLable={ 'Create Timeline' } /> 

          </div>
    
        </form>
    )
}

NewTimelineForm = reduxForm({
  form: 'createTimelineForm',
  validate
})( NewTimelineForm )


export default NewTimelineForm;

