import React from 'react'; 
import { connect } from 'react-redux'; 
import { Field, reduxForm } from 'redux-form';
import { loadCurrentEntry } from '../../Actions/timelineActions';
import renderField from '../../Components/renderField'; 
import renderDatePicker from '../../Components/renderDatePicker'; 
import moment from 'moment';



let EntryForm = ( props ) => {

    const { handleSubmit } = props;

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
          
          <p>Enter the date of the event below ( YYYY/MM/DD )</p>

          <Field
            label={ "when did this occur?" }
            name="date"
            placeholderText={ "YYYY/MM/DD" }
            inputValueFormat="YYYY/MM/DD"
            dateFormat="L"
            dateFormatCalendar="dddd"
            fixedHeight
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            normalize={value => (value ? moment(value).format('YYYY/MM/DD') : null)}
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

