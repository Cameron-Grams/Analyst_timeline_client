import React from 'react'; 
import { connect } from 'react-redux'; 
import { Field, reduxForm } from 'redux-form';
import { loadCurrentEntry } from '../../Actions/timelineActions';
import renderField from '../../Components/renderField'; 

import DatePicker from 'react-date-picker';


let EntryForm = ( props ) => {

    const { handleSubmit } = props;

    let date = new Date(); 
    const onChange = ( values ) => { date = values }; 

    return(
      <div>

        <form onSubmit={ handleSubmit }>

          <Field className={ "formElement" } name="title" label={ "Title for the Entry" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="what" label={ "Enter what occurred" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="who" label={ "Enter who was involved" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="where" label={ "Where did this happen?" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="source" label={ "References?" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="content" label={ "Enter why this is significant" } component={ renderField } type="textarea" />
          <Field className={ "formElement" } name="dateOld" label={ "when did this occur?" } component={ renderField } type="textarea" />

          <DatePicker
            className={ "date-picker_font" } 
            onChange={ onChange }
            value={ date }
          />


          <p>Need to work on the date, date must be a string that can be parsed</p>
          <p>When has to be an object with year, month and day properties</p>
          <button type="submit">Send Entry</button>

        </form>
      </div>
    )
}


EntryForm = reduxForm({
    form: 'currentEntryFromState' 
  })( EntryForm ) 
  
EntryForm = connect(
    ( state, props ) => {
      const initialValues = {};
      if ( props.useCurrentEntry ){
         initialValues.title = state.timeline.currentEntry.title; 
         initialValues.what = state.timeline.currentEntry.what; 
         initialValues.who = state.timeline.currentEntry.who; 
         initialValues.where = state.timeline.currentEntry.where; 
         initialValues.content = state.timeline.currentEntry.content; 
         initialValues.source = state.timeline.currentEntry.source;
      }
    return {
      initialValues
    } 
  },
    { load: loadCurrentEntry } // bind account loading action creator
  )( EntryForm )


  
  export default EntryForm

//  https://www.npmjs.com/package/react-date-picker

