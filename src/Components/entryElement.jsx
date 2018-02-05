import React from 'react';

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