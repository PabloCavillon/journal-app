import React from 'react';
import { mount } from "enzyme"
import { Provider } from "react-redux"
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { firebase } from '../../firebase/firebaseConfig';

import '@testing-library/jest-dom'
import { login } from '../../actions/auth';
import { AppRouter } from '../../routes/AppRouter';

jest.mock('../../actions/auth', () => ({
    login: jest.fn()
}))


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes:{
        active:{ 
            id:'ABC'
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();


describe('Pruebas en <AppRouter />', () => {

    test('debe de llamar al login si estoy autenticado', async () => {

        let user;

        await act( async () => {
            const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456');
            user = userCred.user;
            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter/>
                    </MemoryRouter>
                </Provider>
            );
        })

        expect(login).toHaveBeenCalledWith("l8gKcEMInIcdflxxpBzJc02arcw2", null);

    })

})