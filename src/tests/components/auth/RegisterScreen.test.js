import React from 'react';
import { mount } from "enzyme"
import { Provider } from "react-redux"
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom'

import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

/*jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}))*/


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen/>
        </MemoryRouter>
    </Provider>
);


describe('pruebas en <RegisterScreen />', () => {

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de hacer el dispatch de la acion respectiva', () => {
        const emailField = wrapper.find('input[name="email"]');

        emailField.simulate('change', {
            target: {
                value: '',
                name: 'email'
            }
        })

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.uiSetError,
            payload:'Email is not valid'
        })
    });

    test('Debe de mostrar la caja con la alerta del error', () => {
        const initState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'Email no es correcto'
            }
        };
        
        const store = mockStore(initState);
        
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
        expect(wrapper.find('.auth__alert-error').text().trim()).toBe(initState.ui.msgError);
        
    })
})