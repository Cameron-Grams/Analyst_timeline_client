import React from 'react';
import './optionsButton.css'; 
import { Link } from 'react-router-dom';

const Options = ( props ) => {

    const buttonName = props.displayState ? "Hide Entry Details": "Show All Entries"; 

    return(
        <div className={ "optionsBox" } >
        <div className="optionsDisplayBox" >
            <button className={ "regularButton quarter " } onClick={ props.visibleEntries }>{ buttonName }</button>
            <button className={ "regularButton quarter " } onClick={ props.editingShownEntry }>Edit Entry</button>
            <button className={ "regularButton quarter " } onClick={ props.addNewEntry }>Add New Entry</button>
            <button className={ "css-deleteButton quarter"} ><Link className={ "routingLink" } to={ "/delete-timeline" } >Delete Timeline</Link></button>
        </div>
        </div>
    )
}

export default Options;


