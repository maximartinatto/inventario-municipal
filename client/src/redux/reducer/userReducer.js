const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
    case "USER_LOGIN_REQUEST":
      return { ...state, loading: true };

    case "USER_REGISTER_SUCCESS":
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload, error: null };

    case "USER_REGISTER_FAIL":
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload };

    case "USER_LOGOUT":
      return { userInfo: null, loading: false, error: null };

    default:
      return state;
  }
};
