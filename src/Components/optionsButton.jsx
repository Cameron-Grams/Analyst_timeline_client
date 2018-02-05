import React from 'react';

const Options = ( props ) => {

    const buttonName = props.displayState ? "Hide Entry Details": "Show All Entries"; 

    return(
        <div className="displayBox" >
            <button className={ "third " } onClick={ props.visibleEntries }>{ buttonName }</button>
            <button className={ "third " } onClick={ props.editingShownEntry }>Edit Entry</button>
            <button className={ "third " } onClick={ props.addNewEntry }>Add New Entry</button>
        </div>
    )
}

export default Options;