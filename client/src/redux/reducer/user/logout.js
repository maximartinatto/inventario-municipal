import {
    USER_LOGOUT
} from "../../actions/user/logout";

const initialState = {
    isAuthenticated: true,
    user: {}
};

const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            };
        default:
            return state;
    }
};

export default logoutReducer;