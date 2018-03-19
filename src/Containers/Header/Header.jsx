import React from 'react';
import { connect } from 'react-redux';
import {  logoutUserSession } from '../../Actions/userActions'; 
import { returnUserTImelines } from '../../Actions/appStateActions'; 
import Button from '../../Components/Button/button'; 
import './Header.css'; 

const Header = ( props ) => {

    const DeleteButton = props.appState.hasTimelineFocus ? 
            <Button className={ "css-deleteButton " } 
                divStyling={ "header-rightControl"}
                buttonLable={ "Delete Current Timeline" } 
                sendPath={ "/delete-timeline" } />
            : <div className={ "deleteSpaceHolder" }></div>; 

    return(
        <div className="header" >
            <Button className={ "regularButton " } 
                divStyling={ "header-third header-leftControl"}
                buttonLable={ "All Timelines" } 
                clickHandler={ props.returnUserTImelines }
                sendPath={ '/user-timelines' } />

            <div className="header-third header-centerText">
                <h1 className="userName">{ props.user.name }</h1>
            </div>

            { DeleteButton }

            <Button className={ "regularButton" } 
                divStyling={ "header-rightControl"}
                buttonLable={ "Log Out" } 
                clickHandler={ props.logoutUserSession } 
                sendPath={ "/login" } />
        </div>
    )
}

const mapStateToProps = ( state ) => ( {
    user: state.user,
    appState: state.appState
} )

export default connect( mapStateToProps, { logoutUserSession, returnUserTImelines } )( Header ); 