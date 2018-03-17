import React from 'react';
import './optionsButton.css'; 

const Options = ( props ) => {

    const buttonName = props.displayState ? "Hide Entry Details": "Show All Entries"; 

    return(
        <div className="displayBox" >
            <button className={ "regularButton third " } onClick={ props.visibleEntries }>{ buttonName }</button>
            <button className={ "regularButton third " } onClick={ props.editingShownEntry }>Edit Entry</button>
            <button className={ "regularButton third " } onClick={ props.addNewEntry }>Add New Entry</button>
        </div>
    )
}

export default Options;