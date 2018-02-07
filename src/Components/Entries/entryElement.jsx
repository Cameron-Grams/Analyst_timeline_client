import React from 'react';
import './entries.css';

const EntryElement = ( props ) => {
    const elementId = props.whichElement; 
    return(
        <div className="displayBox" onClick={ ( ) => props.clickHandler( elementId ) } >
            <p>{ props.elementTitle }</p>
            <p>{ props.elementContent }</p>
        </div>
    )
};

export default EntryElement; 