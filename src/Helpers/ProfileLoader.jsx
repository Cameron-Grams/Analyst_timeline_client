import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { fetchBasicInfo } from '../Actions/userActions'; 
import Waiting from '../Components/Waiting'; 

class ProfileLoader extends Component {
    componentDidMount() {
        if (sessionStorage.getItem('token') && ( this.props.user.userId === 0 ) ) {
            this.props.fetchBasicInfo()
        }
    }
    render() {
        return (
            <div>
                {sessionStorage.getItem('token') && ( this.props.user.userId === 0 ) ?
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