import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'

const { login, logout, startLogout, startLoginEmailPassword } = require("../../actions/auth");
const { types } = require("../../types/types");

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones de auth', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })

    test('login y logout deben de crear la acción respectiva', () => {

        const uid = 'ABC123';
        const displayName = 'Pablo';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        })

        expect(logoutAction).toEqual({
            type: types.logout
        })
    });

    test('Debe de realizar el logout', async () => {

        await store.dispatch(startLogout());

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.logout
        })

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        })

    })

    test('Debe de iniciar el startLoginWithEmailPassword', async () => {
        await store.dispatch(startLoginEmailPassword('test@testing.com', '123456'));

        const actions = store.getActions();

        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: 'l8gKcEMInIcdflxxpBzJc02arcw2',
                displayName: null
            }
        })
    })
})