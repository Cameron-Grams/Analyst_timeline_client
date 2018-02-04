import React from 'react';
import EntryElement from './EntryElement';

const DisplayEntries = ( props ) => {

    function entryClicked( str ){
        console.log( ` the ${ str } entry was clicked ` );
    }

    return(      
        <div className="displayBox">
            <h3>{ props.elementTitle }</h3>
            <ul>
                { props.entriesArray.map( ( entry, i ) => 
                        <li key={ i } >
                        <EntryElement
                            whichEntry={ entry.id } 
                            clickHandler={ () => entryClicked( entry.id ) }
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

