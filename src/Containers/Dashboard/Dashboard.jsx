import React from 'react';
import { connect } from 'react-redux';
import DashboardElement from '../../Components/DashboardElement/dashboardElement';
import Header from '../Header/Header';
import Options from '../../Components/OptionsButton/optionsButton';
import DisplayEntries from '../../Components/Entries/entriesDisplay';
import EntryForm from '../Entries/EntryForm';
import './Dashboard.css'; 

import {
    showAllEntries,
    editEntry,
    addEntry,
    returnMainTimeline
} from '../../Actions/appStateActions';
import {
    addEntryToTimeline,
    synchCurrentEntry
} from '../../Actions/timelineActions';

import HorizontalTimelineContainer from './HorizontalTimelineContainer';


const Dashboard = (props) => {
    let userName = props.user.name;
    let summaryDescription = props.timeline.title;
    let entriesOnTimeline = props.timeline.data;

    const timeline = props.appState.hasShowTimeline ?
        <HorizontalTimelineContainer
            indexClick={(index) => {
                this.setState({ value: index, previous: this.state.value });
            }}
            content={props.timeline.data}
            synchEntry={props.synchCurrentEntry} />
        :
        <div></div>;

    const elements = props.appState.hasShowAllEntries ?
        <DisplayEntries
            elementTitle={'Entries on the timeline'}
            entriesArray={entriesOnTimeline}
            loadCurrentEntry={props.synchCurrentEntry}
            editingCurrentEntry={bringUpClicked}
        /> : <div></div>;

    const entryForm = props.appState.isShowSingleEntry ?
        <div>
            <button className={ "returnTimelinesButton" } onClick={returnMain} >Return Main Timeline</button>
            <EntryForm
                useCurrentEntry={props.appState.hasShowCurrentEntry}
                onSubmit={returnEntry}
            />
        </div> :
        <div></div>;

    function returnEntry(values) {
        props.addEntryToTimeline(values, props.timeline.id);
    }

    function returnMain() {
        props.returnMainTimeline();
    }

    function bringUpClicked() {
        props.editEntry();
    }

    return (
        <div>
            <Header userName={userName} />

            <DashboardElement
                elementTitle={'Title of the Timeline'}
                elementContent={summaryDescription} />

            <Options
                displayState={props.appState.hasShowAllEntries}
                visibleEntries={props.showAllEntries}
                editingShownEntry={props.editEntry}
                addNewEntry={props.addEntry} />

            {timeline}
            {entryForm}
            {elements}


        </div>
    )
}


const mapStateToProps = (state) => ({
    timeline: state.timeline,
    user: state.user,
    appState: state.appState
})

export default connect(mapStateToProps,
    {
        showAllEntries,
        editEntry,
        addEntry,
        addEntryToTimeline,
        returnMainTimeline,
        synchCurrentEntry
    })(Dashboard);


