import axios from "axios";

export const getReparaciones = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_REPARACIONES" });
    const { data } = await axios.get("/api/store/reparaciones");
    dispatch({ type: "GET_REPARACIONES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_REPARACIONES_FAIL", payload: error.message });
  }
};

export const getReparacionById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_REPARACION" });
    const { data } = await axios.get(`/api/store/reparacion/${id}`);
    dispatch({ type: "GET_REPARACION_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_REPARACION_FAIL", payload: error.message });
  }
};

export const createReparacion = (reparacion) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_REPARACION" });
    const { data } = await axios.post("/api/store/reparacion", reparacion);
    dispatch({ type: "CREATE_REPARACION_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "CREATE_REPARACION_FAIL", payload: error.message });
  }
};

export const updateReparacion = (id, reparacion) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_REPARACION" });
    const { data } = await axios.put(`/api/store/reparacion/${id}`, reparacion);
    dispatch({ type: "UPDATE_REPARACION_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "UPDATE_REPARACION_FAIL", payload: error.message });
  }
};

export const deleteReparacion = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_REPARACION" });
    await axios.delete(`/api/store/reparacion/${id}`);
    dispatch({ type: "DELETE_REPARACION_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_REPARACION_FAIL", payload: error.message });
  }
};
