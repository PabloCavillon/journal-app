
import { types } from "../types/types";

const initialState = {
    uid: 123123,
    name: 'Pablo',
    dir: {
        b:12
    }
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            };
        case types.logout:
            return {};
        default:
            return state;
    }
} 