import React from 'react'; 
import { connect } from 'react-redux'; 
import { Field, reduxForm } from 'redux-form';
import { loadCurrentEntry } from '../../Actions/appStateActions';
import renderField from '../../Components/renderField'; 

let EntryForm = ( props ) => {

    const { handleSubmit } = props;

    return(
      <div>

        <form onSubmit={ handleSubmit }>

          <Field className={ "formElement" } name="title" label={ "Title for the Entry" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="what" label={ "Enter what occurred" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="who" label={ "Enter who was involved" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="where" label={ "Where did this happen?" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="source" label={ "References?" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="content" label={ "Enter why this is significant" } component={ renderField } type="textarea" />
          <Field className={ "formElement" } name="date" label={ "when did this occur?" } component={ renderField } type="textarea" />
          <div>
            <Field name="month" component="select">
              <option value="Error">Enter the Month</option>
              <option value="January">January</option>
              <option value="Febuary">Febuary</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </Field>
          </div>            

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
         initialValues.title = state.appState.currentEntry.title; 
         initialValues.what = state.appState.currentEntry.what; 
         initialValues.who = state.appState.currentEntry.who; 
         initialValues.where = state.appState.currentEntry.where; 
         initialValues.content = state.appState.currentEntry.content; 
         initialValues.source = state.appState.currentEntry.source;
      }
    return {
      initialValues
    } 
  },
    { load: loadCurrentEntry } // bind account loading action creator
  )( EntryForm )


  
  export default EntryForm

