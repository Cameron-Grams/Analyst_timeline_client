import React from 'react';
import EntryElement from './entryElement';
import './entries.css'; 

const DisplayEntries = ( props ) => {

    function entryClicked( str ){
        let result = props.entriesArray.find( entry => {
            return entry.entryId === str
        } );
        props.loadCurrentEntry( result ); 
        props.editingCurrentEntry(); 
    }

    return(      
        <div className="displayBox">
            <h3>{ props.elementTitle }</h3>
            <ul>
                { props.entriesArray.map( ( entry, i ) => 
                        <li key={ i } >
                        <EntryElement
                            whichEntry={ entry.id } 
                            clickHandler={ () => entryClicked( entry.entryId ) }
                            elementTitle={ `${ entry.title }` }
                            elementContent={ entry.what } 
                            elementDate={ entry.date } /> 
                        </li> 
                    ) 
                }
            </ul>
        </div>
    )
}

export default DisplayEntries; 

