import * as actions from './appStateActions';
import * as types from './actionTypes';

describe( 'appStateActions', () => {
    it( 'should show all entries on command', () => {
        const expectedAction = {
            type: 'SHOW_ALL_ENTRIES'
        }
    expect( actions.showAllEntries() ).toEqual( expectedAction ); 
    })

    it( 'should edit an entry on command', () => {
        const expectedAction = {
            type: 'EDIT_ENTRY'
        }
    expect( actions.editEntry() ).toEqual( expectedAction ); 
    })

    it( 'should add an entry on command', () => {
        const expectedAction = {
            type: 'ADD_ENTRY'
        }
    expect( actions.addEntry() ).toEqual( expectedAction ); 
    })

    it( 'should submit a new entry on command', () => {
        const expectedAction = {
            type: 'SUBMIT_ENTRY_FORM'
        }
    expect( actions.formSubmit() ).toEqual( expectedAction ); 
    })

    it( 'should return to the main timeline view on command', () => {
        const expectedAction = {
            type: 'RETURN_MAIN_TIMELINE' 
        }
    expect( actions.returnMainTimeline() ).toEqual( expectedAction ); 
    })

})
