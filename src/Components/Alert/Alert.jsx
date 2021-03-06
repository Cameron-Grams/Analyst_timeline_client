import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetAlertMessage } from '../../Actions/appStateActions';

import './Alert.css';

const Alert = props => {
    const resultCloseHandler = props.closeHandler ? props.closeHandler : props.resetAlertMessage;
    if ( props.isSelfClosing ) {
        setTimeout(() => {
            resultCloseHandler();
        }, props.msToClose );
    }
    return(
        <div className={ `alert ${ props.hasError ? 'error' : 'success' }` }>
            { props.message }
            { !props.isSelfClosing &&
                <span onClick={ props.resetAlertMessage } className="close">X</span>
            }
        </div>
    )
};

Alert.defaultProps = {
    hasError: false,
    closeHandler: null,
    msToClose: 4000,
    isSelfClosing: false,
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    hasError: PropTypes.bool,
    isSelfClosing: PropTypes.bool,
    closeHandler: PropTypes.func,
    msToClose: PropTypes.number,
};

export default connect(null, { resetAlertMessage })(Alert);