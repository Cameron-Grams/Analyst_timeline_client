import React from 'react';
import { connect } from 'react-redux'; 
import Loader from '../../Components/Loader';

const Timelines = ( props ) => {

    const pending = props.appState.requestAuthentication ? 
        <Loader /> :
        <div> Return user Timelines </div>;

    return(
        <div>
            <h1>Timeline Placeholder</h1>
            { pending }
        </div>
    );
};


const mapStateToProps = ( state ) => ( {
    appState: state.appState
} );

export default connect( mapStateToProps )( Timelines );

