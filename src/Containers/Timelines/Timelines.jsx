import React from 'react';
import { connect } from 'react-redux'; 
import Loader from '../../Components/Loader';
import Header from '../Header/Header'; 

const Timelines = ( props ) => {

    const pending = props.appState.requestAuthentication ? 
        <Loader /> :
        <div> Return user Timelines </div>;

    return(
        <div>
            <Header name={ props.user.name } /> 
            { pending }
        </div>
    );
};


const mapStateToProps = ( state ) => ( {
    appState: state.appState,
    user: state.user
} );

export default connect( mapStateToProps )( Timelines );

