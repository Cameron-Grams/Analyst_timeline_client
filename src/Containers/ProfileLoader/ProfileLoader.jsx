import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { fetchBasicInfo } from '../../Actions/userActions'; 
import { getSelectedTimeline,  toUserTimelines } from '../../Actions/timelineActions';
import Waiting from '../../Components/Waiting/waiting'; 

class ProfileLoader extends Component {

    currentUserCheck(){
        return this.props.user.userId === null;
    }

    componentDidMount() {
        const token = sessionStorage.getItem('token');

        if (  token && ( this.props.user.userId === ( null || undefined ) ) ) {
            this.props.fetchBasicInfo()
            
        }
    }

    render() {
        return (
            <div>
                { ( sessionStorage.getItem('token') &&  ( this.props.user.userId === ( null || undefined ) ) ) ?
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