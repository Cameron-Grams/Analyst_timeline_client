import React from 'react';
import { connect } from 'react-redux';
import {  logoutUserSession } from '../../Actions/userActions'; 
import Button from '../../Components/Button/button'; 
import './Header.css'; 

const Header = ( props ) => {
    return(
        <div className="header" >
            <Button className={ "regularButton " } 
                divStyling={ "header-third header-leftControl"}
                buttonLable={ "All Timelines" } 
                sendPath={ '/user-timelines' } />

            <div className="header-third header-centerText">
                <h1 className="userName">{ props.user.name }</h1>
            </div>

            <Button className={ "css-deleteButton " } 
                divStyling={ "header-rightControl"}
                buttonLable={ "Delete Current Timeline" } 
                sendPath={ "/delete-timeline" } />


            <Button className={ "regularButton" } 
                divStyling={ "header-rightControl"}
                buttonLable={ "Log Out" } 
                clickHandler={ props.logoutUserSession } 
                sendPath={ "/login" } />
        </div>
    )
}

const mapStateToProps = ( state ) => ( {
    user: state.user
} )

export default connect( mapStateToProps, { logoutUserSession } )( Header ); 