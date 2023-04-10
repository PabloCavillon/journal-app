const { authReducer } = require("../../reducers/authReducer");
const { types } = require("../../types/types");

describe('Pruebas sobre el authReducer', () => {

    test('Debe de realizar el login', () => {

        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName:'Pablo'
            }
        }

        const state = authReducer(initState, action);

        expect(state).toEqual({
            uid: 'abc',
            name:'Pablo'
        })
    })

    test('Debe de realizar el logout', () => {

        const initState = {
            uid: 123123,
            name: 'Pablo',
        };

        const action = {
            type: types.logout,
            payload: {
                uid: 'abc',
                displayName:'Pablo'
            }
        }

        const state = authReducer(initState, action);

        expect(state).toEqual({})
    })

    test('No debe de hacer cambios en el state', () => {

        const initState = {
            uid: 123123,
            name: 'Pablo',
        };

        const action = {
            type: 'lsjdaldjalda',
        }

        const state = authReducer(initState, action);

        expect(state).toEqual(initState);
    })

})