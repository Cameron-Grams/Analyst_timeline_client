import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetAlertMessage } from '../../actions/';

import './Alert.css';

const Alert = props => {
    const resultCloseHandler = props.closeHandler ? props.closeHandler : props.resetAlertMessage;
    if (props.isSelfClosing) {
        setTimeout(() => {
            resultCloseHandler();
        }, props.msToClose);
    }
    return(
        <div className={`alert ${props.isError ? 'error' : 'success'}`}>
            {props.message}
            {!props.isSelfClosing &&
                <span onClick={props.resetAlertMessage} className="close">X</span>
            }
        </div>
    )
};

Alert.defaultProps = {
    isError: false,
    closeHandler: null,
    msToClose: 4000,
    isSelfClosing: false,
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    isError: PropTypes.bool,
    isSelfClosing: PropTypes.bool,
    closeHandler: PropTypes.func,
    msToClose: PropTypes.number,
};

export default connect(null, { resetAlertMessage })(Alert);