import React from 'react';

import Button from './Button'; 

const LandingPage = () => {
    return(   
    <div>
        <div>
          <h1>Introduction</h1>
          <h3>Explanation</h3>
        </div>
        <Button
          sendPath={ '/login' }
          buttonLable={ 'Go Log In' } />

    </div> 
    )
};

export default LandingPage; 
