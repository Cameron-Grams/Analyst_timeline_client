import React from 'react';
import NewTimelineForm from './NewTimelineForm'; 
import { createNewTimeline } from '../../Actions/timelineActions'; 
import { connect } from 'react-redux';  

let CreateTimeline = ( props ) => {

    const sendNewTimeline = ( values ) => {
        props.createNewTimeline( values );  
    }

    return( 
        <div className={ "form" } id="registrationForm" >
            < NewTimelineForm onSubmit={ sendNewTimeline } />
        </div>
     )
};

CreateTimeline = connect( null, { createNewTimeline } )( CreateTimeline );

export default CreateTimeline;