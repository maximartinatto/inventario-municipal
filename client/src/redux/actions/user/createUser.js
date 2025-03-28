import axios from "axios";

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER" });

    const { data } = await axios.post("/api/user/register", userData);

    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload: error.response?.data?.message || error.message,
    });
  }
};
