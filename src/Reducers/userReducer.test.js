import UserReducer from './userReducer';
import * as actions from '../Actions/actionTypes';

const initialState = {
    userId: null,
    name: null,
    timelines: []
};

describe( 'User logs in', () => {

    it( 'Should log in a known user', () => {
        const demoUser = {
            userId: 1234,
            name: 'Mr. Demo',
            timelines: [ { } ] 
        }

        let state = UserReducer( initialState, { type: actions.autenticationSuccess, 
            response: {
            _id: 1234,
            name: 'Mr. Demo',
            timelines: [ { } ] 
        } } )
        expect( state ).toEqual( demoUser ); 
    } )

} );
