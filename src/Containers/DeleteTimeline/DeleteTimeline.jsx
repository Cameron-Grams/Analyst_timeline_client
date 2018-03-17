import React from 'react';
import { connect } from 'react-redux';
import 'deleteTimeline.css'; 
import Header from '../Header/Header'; 
import Button from '../../Components/Button/button'; 
import DashboardElement from '../../Components/DashboardElement/dashboardElement';
import deleteCurrentTimeline from '../../Actions/timelineActions'; 

const DeleteTimeline = ( props ) => {
    
    let userName = this.props.user.name;
    let summaryDescription = this.props.timeline.title;

    return(
        <div className="outerDeleteShell">

            <Header userName={ userName } /> 

            <div className="innerDeleteShell">
                <h1>Confirm that you want to delete the timeline</h1>
                <DashboardElement
                            elementTitle={'Title of the Timeline'}
                            elementContent={summaryDescription} />


                <Button className={ "css-deleteButton" } 
                    buttonLable={ "Delete Current Timeline" } 
                    clickHandler={ props.deleteCurrentTimeline } 
                    sendPath={ "/delete-timeline" } />


            </div>
        </div>
    )
}

const mapStateToProps = ( state ) => ( {
    user: state.user,
    timeline: state.timeline
} )

export default connect( mapStateToProps, { deleteCurrentTimeline } )( DeleteTimeline );