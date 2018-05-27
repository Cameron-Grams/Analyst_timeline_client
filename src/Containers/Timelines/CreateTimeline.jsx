import React from 'react';
import NewTimelineForm from './NewTimelineForm'; 
import { createNewTimeline } from '../../Actions/timelineActions'; 
import { connect } from 'react-redux';  

let CreateTimeline = ( props ) => {

    const sendNewTimeline = ( values ) => {
        console.log( 'in create timeline with values: ', values );

        props.createNewTimeline( values, props.user.userId );  
    }

    return( 
        <div className={ "form" } id="registrationForm" >
            < NewTimelineForm onSubmit={ sendNewTimeline } />
        </div>
     )
};

const mapStateToProps = ( state ) => ( {
    user: state.user
} );

CreateTimeline = connect( mapStateToProps, { createNewTimeline } )( CreateTimeline );

export default CreateTimeline;