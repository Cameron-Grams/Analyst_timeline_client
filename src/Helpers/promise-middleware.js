import { push } from 'react-router-redux'
import * as actionTypes from '../Actions/actionTypes';
import { appConfig } from '../config/appConfig';

const parseJSON = response => response.json();

const checkStatus = (dispatch, response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    if (response.status === 401) {
        dispatch({type: actionTypes.UNAUTHORIZED_REDIRECT});
        dispatch(push(appConfig.UNAUTHORIZED_ENDPOINT));
    } else if (response.status === 403) {
        dispatch({type: actionTypes.FORBIDDEN_REDIRECT});
        dispatch(push(appConfig.FORBIDDEN_ENDPOINT));
    } else if (response.status === 404) {
        dispatch({type: actionTypes.NOT_FOUND_REDIRECT});
        dispatch(push(appConfig.NOT_FOUND_ENDPOINT));
    } else if (response.status >= 400 && response.status < 500) {
        response.json().then((data) => {
            dispatch({type: actionTypes.SHOW_ALERT_MESSAGE, response: data});
        });
    } else if (response.status >= 500 && response.status < 600) {
        dispatch({type: actionTypes.SERVER_ERROR_REDIRECT});
        dispatch(push(appConfig.SERVER_ERROR_ENDPOINT));
    }

    return response.json().then((data) => {
        const error = new Error(response.statusText, data);
        throw error;
    });
};

export default function promiseMiddleware({ dispatch, getState }) {
    return next => (action) => {
        const { promise, onRequest, onSuccess, onFailure, ...rest } = action;

        if (!promise) {
            // if action dispatched is not a promise, just send it to the next processor
            return next(action);
        }

        if (typeof onRequest === 'function') {
            onRequest(dispatch, getState);
        } else {
            dispatch({ type: onRequest, ...rest });
        }

        dispatch({type: actionTypes.SHOW_GLOBAL_LOADER } );

        return promise
            .catch((error, ...rest) => {
                console.log(error, rest)
                dispatch({type: actionTypes.NOT_FOUND_REDIRECT});
                dispatch({type: actionTypes.HIDE_GLOBAL_LOADER } );
                dispatch(push(appConfig.NOT_FOUND_ENDPOINT));
                throw new Error('Network failure', error.message);
            })
            .then(checkStatus.bind(null, dispatch))
            .then(parseJSON)
            .then((response) => {
                try {
                    if (typeof onSuccess === 'function') {
                        onSuccess(response, dispatch, getState );
                    } else {
                        dispatch({ type: onSuccess, response, ...rest });
                    }

                dispatch({type: actionTypes.HIDE_GLOBAL_LOADER } );

                } catch (e) {
                    e.message = `Action success error: ${e.message}`;
                    e.type = 'ActionError';
                    throw e;
                }
            })
            .catch((error) => {
                if (error.type !== 'ActionError' || error.type === 'Unauthorized') {
                    if (typeof onFailure === 'function') {
                        onFailure(error.response, dispatch, getState );
                    } else {
                        dispatch({ type: onFailure, error: error.response, ...rest });
                    }

                dispatch({type: actionTypes.HIDE_GLOBAL_LOADER } );

                } else {
                    throw error;
                }
            });
    };
}