const { setError, removeError, startLoading, finishLoading } = require("../../actions/ui");
const { types } = require("../../types/types");


describe('Pruebas en ui-action',() => {

    test('todas las acciones debe de funcionar', () => {

        const actionSetError = setError('HELP!!!');
        expect(actionSetError).toEqual({
                type: types.uiSetError,
                payload: 'HELP!!!'
        })

        const actionRemoveError = removeError('HELP!!!');
        expect(actionRemoveError).toEqual({
                type: types.uiRemoveError
        })

        const actionStartLoading = startLoading('HELP!!!');
        expect(actionStartLoading).toEqual({
                type: types.uiStartLoading
        })

        const actionFinishLoading = finishLoading('HELP!!!');
        expect(actionFinishLoading).toEqual({
                type: types.uiFinishLoading
        })

    });

})