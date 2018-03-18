import React from 'react';

import Button from '../Button/button'; 

const LandingPage = () => {
    return(   
    <div>
        <div>
          <h1>Introduction</h1>
          <h3>Explanation</h3>
        </div>
        <Button
          className={ "regularButton" }
          sendPath={ '/login' }
          buttonLable={ 'Go Log In' } />

    </div> 
    )
};

export default LandingPage; 
