import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Login from '../Containers/Login/Login';

describe( 'Testing the <Login> container', () => {
    const initialState = {};
    const mockStore = configureStore();

    beforeEach( () => {
        store = mockStore( initialState )
        container = shallow( <Login store={ store } /> )
    } )

    it( 'Renders the Login container', () => {
        expect( container.length ).toEqual( 1 );
    } );
} );


