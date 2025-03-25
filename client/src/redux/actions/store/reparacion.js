import axios from "axios";

export const fetchReparaciones = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_REPARACIONES_REQUEST" });
    const { data } = await axios.get("/api/store/reparaciones");
    dispatch({ type: "FETCH_REPARACIONES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_REPARACIONES_FAIL", payload: error.message });
  }
};

export const fetchReparacionById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_REPARACION_REQUEST" });
    const { data } = await axios.get(`/api/store/reparacion/${id}`);
    dispatch({ type: "FETCH_REPARACION_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_REPARACION_FAIL", payload: error.message });
  }
};

export const createReparacion = (reparacion) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_REPARACION_REQUEST" });
    const { data } = await axios.post("/api/store/reparacion", reparacion);
    dispatch({ type: "CREATE_REPARACION_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "CREATE_REPARACION_FAIL", payload: error.message });
  }
};

export const updateReparacion = (id, reparacion) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_REPARACION_REQUEST" });
    const { data } = await axios.put(`/api/store/reparacion/${id}`, reparacion);
    dispatch({ type: "UPDATE_REPARACION_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "UPDATE_REPARACION_FAIL", payload: error.message });
  }
};

export const deleteReparacion = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_REPARACION_REQUEST" });
    await axios.delete(`/api/store/reparacion/${id}`);
    dispatch({ type: "DELETE_REPARACION_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_REPARACION_FAIL", payload: error.message });
  }
};
