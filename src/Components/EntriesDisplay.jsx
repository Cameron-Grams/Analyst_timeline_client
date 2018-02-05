import React from 'react';
import EntryElement from './EntryElement';

const DisplayEntries = ( props ) => {

    function entryClicked( str ){
        console.log( ` the ${ str } entry was clicked ` );
        let result = props.entriesArray.find( entry => {
            return entry.entryId === str
        } );
        console.log( ' [ EntriesDisplay ] result of entry clicked ', result ); 
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
                            elementTitle={ `${ entry.when.year } ${ entry.who }` }
                            elementContent={ entry.what }  /> 
                        </li> 
                    ) 
                }
            </ul>
        </div>
    )
}

export default DisplayEntries; 
//                { props.entriesArray.map( ( entry, i ) => <li key={ i } > { entry.who }:   { entry.what } </li> ) }

