export function showAllEntries(){
    return { type: 'SHOW_ALL_ENTRIES' };   
}

export function loadCurrentEntry( entry ){
    return{
        type: 'LOAD_CURRENT_ENTRY',
        entry
    }
}

export function synchCurrentEntry( newEntry ){
    return{
        type: 'SYNCH_CURRENT_ENTRY',
        newEntry
    }
}

export function editEntry(){
    return {
        type: 'EDIT_ENTRY'
    };
};

export function addEntry(){
    return{
        type: 'ADD_ENTRY'
    };
};

export function formSubmit(){
    return{
        type: 'SUBMIT_ENTRY_FORM'
    };
};




