import React from 'react';
import './Waiting.css'; 

const Waiting = () => {
    return(
        <div className="waitingLoaderHolder">
            <div className="sk-three-bounce">
            <div className="sk-child sk-bounce1"></div>
            <div className="sk-child sk-bounce2"></div>
            <div className="sk-child sk-bounce3"></div>
            </div>
        </div>
    )
}

export default Waiting;

