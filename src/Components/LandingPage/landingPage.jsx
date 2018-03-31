import React from 'react';
import './landingPage.css'; 
import Button from '../Button/button'; 

const LandingPage = () => {
    return(   
    <div className={ "landingDiv" } >
        <div >
          <h1>The Analyst's Timeline</h1>
          <h4>This application is a tool to organize research chrologically by topic area.</h4>
          <h4>The analyst will have a screen where topic areas can be organized by theme into individual
          timelines, and then a dashboard area where the selected timeline can be managed.</h4>
        </div>
        <Button
          className={ "regularButton" }
          sendPath={ '/login' }
          buttonLable={ 'Go To the Log In' } />

    </div> 
    )
};

export default LandingPage; 
