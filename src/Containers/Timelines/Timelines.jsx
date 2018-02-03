import React from 'react';
import { connect } from 'react-redux'; 
import Waiting from '../../Components/Waiting';
import Header from '../Header/Header'; 
import TimelineSelection from './TimelineSelection';

const Timelines = ( props ) => {
    console.log( '[ Timelines userId ] id: ', props.user.id ); 
    const pending = props.appState.requestAuthentication ? 
        <Waiting /> :
        <TimelineSelection />

    return(
        <div>
            <Header name={ props.user.name } /> 
            { pending }
        </div>
    );
};


const mapStateToProps = ( state, ownProps ) => ( {
    appState: state.appState,
    user: state.user,
    id: ownProps.match.params.userId
} );

export default connect( mapStateToProps )( Timelines );

