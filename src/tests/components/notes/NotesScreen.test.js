import React from 'react';;
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { NotesScreen } from '../../../components/notes/NotesScreen';
import { activeNote } from '../../../actions/notes';

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '1',
        name: 'Pablo',

    },
    ui: {
        loading: false,
        msgError: null
    },
    notes:{
        active:{
            id: 1234,
            title: 'Hola',
            body: 'mundo',
            date: 0
        },
        notes:[]
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <NotesScreen/>
    </Provider>
);


describe('Pruebas en el <NoteScreen />', () => {

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de disparar el activeNote', () => {

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        })

        expect(activeNote).toHaveBeenLastCalledWith(1234, {title: 'Hola de nuevo', body:'mundo', id:1234, date:0});

    })

})