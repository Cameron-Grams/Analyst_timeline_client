import * as actions from './appStateActions';
import * as types from './actionTypes';

describe( 'appStateActions', () => {
    it( 'should show all entries on command', () => {
        const expectedAction = {
            type: 'SHOW_ALL_ENTRIES'
        }
    expect( actions.showAllEntries() ).toEqual( expectedAction ); 
    })
})
