import React from 'react';
import { connect } from 'react-redux';
import DashboardElement from '../../Components/dashboardElement';
import Header from '../Header/Header';
import Options from '../../Components/optionsButton';
import DisplayEntries from '../../Components/entriesDisplay'; 
import EntryForm from '../Entries/EntryForm'; 


import { showAllEntries, 
         editEntry, 
         addEntry, 
         synchCurrentEntry, 
         returnMainTimeline
        } from '../../Actions/appStateActions';
import { addEntryToTimeline } from '../../Actions/timelineActions';

import HorizontalTimelineContainer from './HorizontalTimelineContainer';


const Dashboard = ( props ) => {
    let userName =  props.user.name;
    let summaryDescription = props.timeline.title;
    let entriesOnTimeline = props.timeline.data;

    const timeline = props.appState.showTimeline ? 
        <HorizontalTimelineContainer
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            content={ props.timeline.data }
            synchEntry={ props.synchCurrentEntry } />  
        :
        <div></div>;

    const elements =  props.appState.showAllEntries ? 
        <DisplayEntries
            elementTitle={ 'Entries on the timeline' }
            entriesArray={ entriesOnTimeline }  
            loadCurrentEntry={ props.synchCurrentEntry }
            editingCurrentEntry={ bringUpClicked }
            /> : <div></div>;

    const entryForm = props.appState.singleEntry ? 
        <div>
            <button onClick={ returnMain } >Return Main Timeline</button>
            <EntryForm
                useCurrentEntry={ props.appState.showCurrentEntry }
                onSubmit={ returnEntry }
            /> 
        </div>:
            <div></div>;

    function returnEntry( values ){
        props.addEntryToTimeline( values, props.timeline.id ); 
    }

    function returnMain(){
        props.returnMainTimeline();
    }

    function bringUpClicked(){
        props.editEntry(); 
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
      addEntryToTimeline,
      returnMainTimeline,
      synchCurrentEntry
    })( Dashboard ); 


