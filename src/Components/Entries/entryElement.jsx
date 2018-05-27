import React from 'react';
import './entries.css';

const EntryElement = ( props ) => {
    const elementId = props.whichElement; 
    return(
        <div className="css-entryDisplayBox" onClick={ ( ) => props.clickHandler( elementId ) } >
            <p>{ props.elementTitle }</p>
            <p>{ props.elementContent }</p>
            <p>{ props.elementDate }</p>
        </div>
    )
};

export default EntryElement; 