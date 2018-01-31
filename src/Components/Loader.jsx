import React from 'react';
import './Loader.css'; 

const Loader = () => {
    return(
        <div className="loaderHolder">
            <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
            </div>
        </div>
    )
}

export default Loader;

