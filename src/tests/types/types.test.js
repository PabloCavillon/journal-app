const { types } = require("../../types/types")

describe('Prueba de los types', () => {

    test('Verificar el mismo formato', () => {
        expect(types).toEqual({
            login:'[Auth] Login',
            logout:'[Auth] Logout',
        
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
        
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
        
            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] load notes',
            notesUpdated: '[Notes] Update note saved',
            notesFileUrl: '[Notes] Updated image url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning'
        })
    })


})