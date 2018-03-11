import UserReducer from './userReducer';
import * as actions from '../Actions/actionTypes';

const initialState = {
    userId: null,
    name: null,
    timelines: []
};

describe( 'Manages user account activity', () => {

    it( 'should register a new user', () => {
        let state = UserReducer( initialState, { type: actions.registerUserSuccess } )

        expect( state ).toEqual( initialState );
    })

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

    it( 'Should return user information when needed', () => {
        const demoUser = {
            userId: 1234,
            name: 'Mr. Demo',
            timelines: [ { } ] 
        }

        let state = UserReducer( initialState, { type: actions.returnUserBasicInfo, 
            response: {
            _id: 1234,
            name: 'Mr. Demo',
            timelines: [ { } ] 
        } } )
        expect( state ).toEqual( demoUser ); 
    } )

    it( 'Should end user session by removing user details from app state', () => {
        const loggedInUser = {
            userId: 1234,
            name: 'Mr. Demo',
            timelines: [ { } ] 
        }

        let state = UserReducer( loggedInUser, { type: actions.logoutUserSession, 
            response: {
                userId: null,
                name: null,
                timelines: []
        } } )
        expect( state ).toEqual( initialState ); 
    } )
} );

describe( 'Manages user account information', () => { 
    const loggedInUser = {
        userId: 1234,
        name: 'Mr. Demo',
        timelines: [ ] 
    }

    const response = { title: "title name" };

    const updatedState = {
        userId: 1234,
        name: 'Mr. Demo',
        timelines: [ { title: "title name" } ] 
    }

    it( 'Should update user information when a new timeline is added to account',  () => {
        let state = UserReducer( loggedInUser, { type: actions.newTimelineCreated, response } );
        expect( state ).toEqual( updatedState );
    })

} ); 