import {
    USER_REGISTER,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from "../../actions/user/createUser";

const initialState = {
    loading: false,
    user: null,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER:
            return {
                ...state,
                loading: true,
                error: null
            };
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            };
        case USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;