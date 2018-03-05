import * as actions from './appStateActions';
import * as types from './actionTypes';

describe( 'appStateActions', () => {
    it( 'should show all entries on command', () => {
        const expectedAction = {
            type: actions.showAllEntries
        }
    expect( actions.showAllEntries() ).toEqual( expectedAction ); 
    })
})
