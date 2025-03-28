import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
} from "../../actions/user/login";

const initialState = {
    loading: false,
    user: null,
    error: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            };
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default loginReducer;