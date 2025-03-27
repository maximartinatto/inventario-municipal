import axios from "axios";

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN" });

    const { data } = await axios.post("/api/user/login", userData);

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error.response?.data?.message || error.message,
    });
  }
};
