import React from 'react';
import { connect } from 'react-redux';
import DashboardElement from '../../Components/DashboardElement';
import Header from '../Header/Header';
import Options from '../../Components/OptionsButton';
import DisplayEntries from '../../Components/EntriesDisplay'; 

/*
import { showAllEntries, 
         editEntry, 
         addEntry, 
         synchCurrentEntry 
        } from '../../actions/appStateActions';
import { addEntryToTimeline,
         getTimeline } from '../../actions/timelineActions';

import HorizontalTimelineContent from './HorizontalTimelineContent';
import EntryForm from '../Entries/EntryForm'; 

import './dashboard.css';
*/

const Dashboard = ( props ) => {
    let userName =  props.user.name;
    let summaryDescription = props.timeline.title;
    let entriesOnTheme = props.timeline.data;

    const timeline = props.appState.showTimeline ? 
        <div>Future Timeline Component</div>:
          <div></div>;


    const elements =  props.appState.showAllEntries ? 
        <DisplayEntries
            elementTitle={ 'Entries on the timeline' }
            entriesArray={ entriesOnTheme }  
            /> : <div></div>;

    const entryForm = props.appState.singleEntry ? 
        <EntryForm
            useCurrentEntry={ props.appState.showCurrentEntry }
            onSubmit={ returnEntry }
        /> :
            <div></div>;

    function returnEntry( values ){
        props.addEntryToTimeline( values ); 
    }


    return( 
        <div>
        <Header userName={ userName }  />

        <DashboardElement
            elementTitle={ 'Title of the Timeline' }
            elementContent={ summaryDescription }  /> 

        <Options 
            displayState={ props.appState.showAllEntries }
            visibleEntries={ props.showAllEntries }
            editingShownEntry={ props.editEntry }
            addNewEntry={ props.addEntry } /> 
        
        { timeline }
        { entryForm }
        { elements }


        </div>
    )
}
 

const mapStateToProps = ( state ) => ( {
    timeline: state.timeline,
    user: state.user,
    appState: state.appState
} )

export default connect( mapStateToProps, 
    { showAllEntries,  
      editEntry, 
      addEntry, 
      synchCurrentEntry,
      addEntryToTimeline,
      getTimeline
    })( Dashboard ); 


