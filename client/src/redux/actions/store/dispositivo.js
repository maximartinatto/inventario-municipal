import axios from "axios";

export const getDispositivos = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_DISPOSITIVOS" });
    const { data } = await axios.get("/api/store/dispositivos");
    dispatch({ type: "GET_DISPOSITIVOS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_DISPOSITIVOS_FAIL", payload: error.message });
  }
};

export const getDispositivoById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_DISPOSITIVO" });
    const { data } = await axios.get(`/api/store/dispositivo/${id}`);
    dispatch({ type: "GET_DISPOSITIVO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_DISPOSITIVO_FAIL", payload: error.message });
  }
};

export const getDispositivoDetail = (dispositivoId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/store/dispositivos/${dispositivoId}`);
      const dispositivo = response.data

      dispatch({ type: 'GET_DETAIL_DISPOSITIVO', payload: dispositivo });
    } catch (error) {
      console.log("Algo ocurrió mientras se obtenía el dispositivo.", error)
    }
  }
}

export const createDispositivo = (dispositivo) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_DISPOSITIVO" });
    const { data } = await axios.post("/api/store/dispositivo", dispositivo);
    dispatch({ type: "CREATE_DISPOSITIVO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "CREATE_DISPOSITIVO_FAIL", payload: error.message });
  }
};
export const clearDispositivoDetail = () => {
  return (dispatch) => {
      dispatch({ type: "CLEAR_DISPOSITIVO_DETAIL" });
  };
};

export const updateDispositivo = (id, dispositivo) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_DISPOSITIVO" });
    const { data } = await axios.put(
      `/api/store/dispositivo/${id}`,
      dispositivo
    );
    dispatch({ type: "UPDATE_DISPOSITIVO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "UPDATE_DISPOSITIVO_FAIL", payload: error.message });
  }
};

export const updateDispositivoEstado = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/store/dispositivo/${id}`);
      const dispositivoUpdated = response.data;

      dispatch({
        type: "UPDATE_DISPOSITIVO_ESTADO",
        payload: dispositivoUpdated
      });
    } catch (error) {
      console.log("Algo ocurrió al actualizar el estado del dispositivo.", error)
    }
  }
}

export const deleteDispositivo = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_DISPOSITIVO" });
    await axios.delete(`/api/store/dispositivo/${id}`);
    dispatch({ type: "DELETE_DISPOSITIVO_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_DISPOSITIVO_FAIL", payload: error.message });
  }
};
