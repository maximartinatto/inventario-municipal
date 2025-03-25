import axios from "axios";

export const fetchDispositivos = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DISPOSITIVOS_REQUEST" });
    const { data } = await axios.get("/api/store/dispositivos");
    dispatch({ type: "FETCH_DISPOSITIVOS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_DISPOSITIVOS_FAIL", payload: error.message });
  }
};

export const fetchDispositivoById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DISPOSITIVO_REQUEST" });
    const { data } = await axios.get(`/api/store/dispositivo/${id}`);
    dispatch({ type: "FETCH_DISPOSITIVO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_DISPOSITIVO_FAIL", payload: error.message });
  }
};

export const createDispositivo = (dispositivo) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_DISPOSITIVO_REQUEST" });
    const { data } = await axios.post("/api/store/dispositivo", dispositivo);
    dispatch({ type: "CREATE_DISPOSITIVO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "CREATE_DISPOSITIVO_FAIL", payload: error.message });
  }
};

export const updateDispositivo = (id, dispositivo) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_DISPOSITIVO_REQUEST" });
    const { data } = await axios.put(
      `/api/store/dispositivo/${id}`,
      dispositivo
    );
    dispatch({ type: "UPDATE_DISPOSITIVO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "UPDATE_DISPOSITIVO_FAIL", payload: error.message });
  }
};

export const deleteDispositivo = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_DISPOSITIVO_REQUEST" });
    await axios.delete(`/api/store/dispositivo/${id}`);
    dispatch({ type: "DELETE_DISPOSITIVO_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_DISPOSITIVO_FAIL", payload: error.message });
  }
};
