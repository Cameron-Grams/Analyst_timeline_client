import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { fetchBasicInfo } from '../../Actions/userActions'; 
import { getSelectedTimeline,  toUserTimelines } from '../../Actions/timelineActions';
import Waiting from '../../Components/Waiting/waiting'; 
import Alert from '../../Components/Alert/Alert'; 

class GlobalContextLoader extends Component {

    currentUserCheck(){
        return this.props.user.userId === null;
    }

    componentDidMount() {
        const token = sessionStorage.getItem('token');

        if (  token && ( this.props.user.userId === null ) )  {
            this.props.fetchBasicInfo();
        }
    }

    render() {
        return (
            <div>
                { 
                ( sessionStorage.getItem('token') && ( this.props.user.userId === null ) ) ?
                    < Waiting /> 
                :

                <div>
                    {this.props.appState.alertMessage &&
                        <div className="error">
                            <Alert
                                hasError={this.props.appState.alertMessage.hasError}
                                message={this.props.appState.alertMessage.message}
                            />
                        </div>
                    }
                    <div>{this.props.children}</div>
                </div>

                }
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ( { 
    user: state.user,
    appState: state.appState
} );

export default connect( mapStateToProps, { fetchBasicInfo, getSelectedTimeline, toUserTimelines } )( GlobalContextLoader ); 