import React from 'react'; 
import { connect } from 'react-redux'; 
import { Field, reduxForm } from 'redux-form';
import { loadCurrentEntry } from '../../Actions/timelineActions';
import renderField from '../../Components/RenderField/renderField'; 
import renderDatePicker from '../../Components/RenderDatePicker/renderDatePicker'; 
import moment from 'moment';
import './EntryForm.css'; 


let EntryForm = ( props ) => {

    const { handleSubmit } = props;

    const updateDate = props.useCurrentEntry ? 
        <p>Current date on record: { props.initialValues.date }</p>
        : ''; 

    return(
      <div>

        <form onSubmit={ handleSubmit }>
          <button type="submit">Send Entry</button>

          <Field className={ "formElement" } name="title" label={ "Title for the Entry" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="what" label={ "Enter what occurred" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="who" label={ "Enter who was involved" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="where" label={ "Where did this happen?" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="source" label={ "References?" } component={ renderField } type="text" />
          <Field className={ "formElement" } name="content" label={ "Enter why this is significant" } component={ renderField } type="textarea" />
          
          { updateDate } 

          <p>Enter the date of the event below using the Calendar</p>

          <Field
            label={ "when did this occur?" }
            name="date"
            placeholderText={ "Click and use Calendar" }
            inputValueFormat="MM/DD/YYYY"
            dateFormat="L"
            dateFormatCalendar="dddd"
            fixedHeight
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            minDate={ moment().subtract( 400, "years" ) }
            maxDate={ moment().add( 1, "years" ) }
            normalize={ value => (value ? moment(value).format('MM/DD/YYYY') : null)}
            component={renderDatePicker}
          />

          
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
         initialValues.entryId = state.timeline.currentEntry.entryId; 
         initialValues.title = state.timeline.currentEntry.title; 
         initialValues.what = state.timeline.currentEntry.what; 
         initialValues.who = state.timeline.currentEntry.who; 
         initialValues.where = state.timeline.currentEntry.where; 
         initialValues.date = state.timeline.currentEntry.date; 
         initialValues.dateObject = state.timeline.currentEntry.dateObject; 
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

