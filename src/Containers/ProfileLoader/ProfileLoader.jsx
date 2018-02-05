import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { fetchBasicInfo } from '../../Actions/userActions'; 
import Waiting from '../../Components/Waiting/waiting'; 

const CheckToken = require( '../../Helpers/testToken' ); 

class ProfileLoader extends Component {

    currentUserCheck(){
        return this.props.user.userId === 0;
    }

    componentDidMount() {
        if ( CheckToken  && this.currentUserCheck() ) {
            this.props.fetchBasicInfo()
        }
    }

    render() {
        return (
            <div>
                { ( CheckToken &&  this.currentUserCheck() ) ?
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