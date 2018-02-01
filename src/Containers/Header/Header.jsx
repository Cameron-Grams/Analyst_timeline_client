import React from 'react';
import { connect } from 'react-redux';
import {  logoutUserSession } from '../../Actions/userActions'; 
import Button from '../../Components/Button'; 


const Header = ( props ) => {
    return(
        <div className="header" >
            <Button className={ "header-third header-leftControl" } 
                buttonLable={ "All Timelines" } 
                sendPath={ `/user-timelines/${ props.user.userId }` } />

            <div className="header-third header-centerText">
                <h1 className="userName">{ props.name }</h1>
            </div>

            <Button className={ "header-third header-rightControl" } 
                buttonLable={ "Log Out" } 
                whenClicked={ props.logoutUserSession } 
                sendPath={ "/login" } />
        </div>
    )
}

const mapStateToProps = ( state ) => ( {
    user: state.user
} )

export default connect( mapStateToProps, { logoutUserSession } )( Header ); 