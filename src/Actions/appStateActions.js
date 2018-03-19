export function showAllEntries(){
    return { type: 'SHOW_ALL_ENTRIES' };   
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

export function returnMainTimeline(){
    return{
        type: 'RETURN_MAIN_TIMELINE' 
    };
};

export function returnUserTImelines(){
    return{
        type: 'RETURN_USER_TIMELINE'
    };
};



