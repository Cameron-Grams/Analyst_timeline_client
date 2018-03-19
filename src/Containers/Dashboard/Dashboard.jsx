import React  from 'react';
import { connect } from 'react-redux';
import DashboardElement from '../../Components/DashboardElement/dashboardElement';
import Header from '../Header/Header';
import Options from '../../Components/OptionsButton/optionsButton';
import DisplayEntries from '../../Components/Entries/entriesDisplay';
import EntryForm from '../Entries/EntryForm';
import Waiting from '../../Components/Waiting/waiting'; 


import './Dashboard.css'; 

import {
    showAllEntries,
    editEntry,
    addEntry,
    returnMainTimeline
} from '../../Actions/appStateActions';
import {
    addEntryToTimeline,
    updateEntryOnTimeline,
    deleteEntryOnTimeline,
    synchCurrentEntry,
    getSelectedTimeline
} from '../../Actions/timelineActions';

import HorizontalTimelineContainer from './HorizontalTimelineContainer';


class Dashboard extends React.Component{

    constructor( props ){
        super( props );
        this.returnEntry = this.returnEntry.bind( this );
    }

    componentDidMount(){
        this.updateTimeline(); 
    }

    updateTimeline = () => {
        const endpoint = this.props.match.params.timelineId; 
        this.props.getSelectedTimeline( endpoint ); 
    }
    
    returnEntry = (values) => {
        if ( values._id !== undefined ){
            this.props.updateEntryOnTimeline( { ...values  }, values._id );
        } else {
            this.props.addEntryToTimeline( { ...values, timelineId: this.props.timeline.id } );
        }
        this.updateTimeline(); 
    }

    deleteEntry = ( ) => {
        this.props.deleteEntryOnTimeline( this.props.timeline.currentEntry._id, this.props.timeline.id ); 
    }

    render(){  
        let userName = this.props.user.name;
        let summaryDescription = this.props.timeline.title;
        let entriesOnTimeline = this.props.timeline.data;

        const timeline = this.props.appState.hasShowTimeline ?
            <HorizontalTimelineContainer
                indexClick={(index) => {
                    this.setState({ value: index, previous: this.state.value });
                }}
                content={this.props.timeline.data}
                synchEntry={this.props.synchCurrentEntry} />
            :
            false;

        const elements = this.props.appState.hasShowAllEntries ?
            <DisplayEntries
                elementTitle={'Entries on the timeline'}
                entriesArray={entriesOnTimeline}
                loadCurrentEntry={this.props.synchCurrentEntry}
                editingCurrentEntry={ this.props.editEntry }
            /> : false;

        const entryForm = this.props.appState.isShowSingleEntry ?
            <div>
                <button className={ "regularButton returnTimelinesButton" } onClick={ this.props.returnMainTimeline } >Return Main Timeline</button>
                <EntryForm
                    useCurrentEntry={this.props.appState.hasShowCurrentEntry}
                    onSubmit={ ( values ) => this.returnEntry( values ) }
                    deleteCurrentEntry={ this.deleteEntry }
                />
            </div> :
            false;

        

        return (
            <div>
                { this.props.appState.isFetchingSelectedTimeline  ?
                    < Waiting /> 
                :
                   <div>
                        <Header userName={userName} />

                        <div className="displayBox"  >
                            <h1>This is the Timeline titled:</h1>
                            <h2>{ summaryDescription }</h2>
                        </div>

                        <Options
                            displayState={this.props.appState.hasShowAllEntries}
                            visibleEntries={this.props.showAllEntries}
                            editingShownEntry={this.props.editEntry}
                            addNewEntry={this.props.addEntry} />

                        {entryForm}
                        {elements}
                        {timeline}


                   </div>
                }
            </div>
        )
    }
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
        updateEntryOnTimeline,
        deleteEntryOnTimeline,
        returnMainTimeline,
        synchCurrentEntry,
        getSelectedTimeline
    })(Dashboard);

/*
                       

*/