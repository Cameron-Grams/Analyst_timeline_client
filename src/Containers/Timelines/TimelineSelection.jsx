import React from 'react';
import { connect } from 'react-redux';
import Button from '../../Components/button';   
import { getSelectedTimeline } from '../../Actions/timelineActions';
import BuildOptions from './SelectBuilder'; 

let ThemeSelection = ( props ) => {

    const userTimelines =  props.user.timelines.length > 0 ?  props.user.timelines: [];

    const selectedTimeline = ( values ) => {
        props.getSelectedTimeline( values.selectTimeline ); 
    }

    return(
        <div className="timelineSelector" >
            <h1>Timeline Themes Available</h1>

           <BuildOptions 
             className={ "timelineOptions" }  
             optionsArray={ userTimelines } 
             onSubmit={ selectedTimeline } /> 

            <Button
             className={ "timelineOptions"}
             sendPath={ '/create-timeline'}
             buttonLable={ 'Add New Timeline' } /> 

        </div>
    )
};

const mapStateToProps = ( state ) => ( {
    user: state.user,
    timeline: state.timeline
} );


export default connect( mapStateToProps, { getSelectedTimeline } )( ThemeSelection ); 

