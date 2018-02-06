import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { fetchBasicInfo } from '../../Actions/userActions'; 
import Waiting from '../../Components/Waiting/waiting'; 

// const CheckToken = require( '../../Helpers/testToken' ); // not working...

class ProfileLoader extends Component {

    currentUserCheck(){
        return this.props.user.userId === null;
    }

    componentDidMount() {

        if ( sessionStorage.getItem('token')  && ( this.props.user.userId === null ) ) {
            this.props.fetchBasicInfo()
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

export default connect( mapStateToProps, { fetchBasicInfo } )( ProfileLoader ); 