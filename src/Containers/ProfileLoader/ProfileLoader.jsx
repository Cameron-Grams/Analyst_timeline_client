import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { fetchBasicInfo } from '../../Actions/userActions'; 
import { getSelectedTimeline,  toUserTimelines } from '../../Actions/timelineActions';
import Waiting from '../../Components/Waiting/waiting'; 

// const CheckToken = require( '../../Helpers/testToken' ); // not working...

class ProfileLoader extends Component {

    currentUserCheck(){
        return this.props.user.userId === null;
    }

    componentDidMount() {
        const token = sessionStorage.getItem('token');
        const timeline =  sessionStorage.getItem( 'currentTimeline' );

        if (  token && ( this.props.user.userId === null ) ) {
            this.props.fetchBasicInfo()
            if ( timeline ){
                console.log( '[ ProfileLoader ] currentTimeline is ', sessionStorage.getItem( 'currentTimeline' )     ); 
                return this.props.getSelectedTimeline( timeline )
            }
            this.props.toUserTimelines();
        }
    }

    render() {
        return (
            <div>
                { ( sessionStorage.getItem('token') &&  ( this.props.user.userId === null ) ) ?
                    < Waiting /> 
                :
                    <div>{this.props.children}</div>
                }
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ( { 
    user: state.user
} );

export default connect( mapStateToProps, { fetchBasicInfo, getSelectedTimeline, toUserTimelines } )( ProfileLoader ); 