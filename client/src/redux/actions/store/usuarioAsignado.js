import axios from "axios";

export const getUsuariosAsignados = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_USUARIOS_ASIGNADOS" });
    const { data } = await axios.get("/api/store/usuariosasignados");
    dispatch({ type: "GET_USUARIOS_ASIGNADOS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_USUARIOS_ASIGNADOS_FAIL", payload: error.message });
  }
};

export const getUsuarioAsignadoById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_USUARIO_ASIGNADO" });
    const { data } = await axios.get(`/api/store/usuarioasignado/${id}`);
    dispatch({ type: "GET_USUARIO_ASIGNADO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_USUARIO_ASIGNADO_FAIL", payload: error.message });
  }
}

export const createUsuarioAsignado = (usuario) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_USUARIO_ASIGNADO" });
    const { data } = await axios.post("/api/store/usuarioasignado", usuario);
    dispatch({ type: "CREATE_USUARIO_ASIGNADO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "CREATE_USUARIO_ASIGNADO_FAIL", payload: error.message });
  }
};

export const updateUsuarioAsignado = (id, usuario) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_USUARIO_ASIGNADO" });
    const { data } = await axios.put(`/api/store/usuarioasignado/${id}`, usuario);
    dispatch({ type: "UPDATE_USUARIO_ASIGNADO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "UPDATE_USUARIO_ASIGNADO_FAIL", payload: error.message });
  }
};

export const deleteUsuarioAsignado = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_USUARIO_ASIGNADO" });
    await axios.delete(`/api/store/usuarioasignado/${id}`);
    dispatch({ type: "DELETE_USUARIO_ASIGNADO_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_USUARIO_ASIGNADO_FAIL", payload: error.message });
  }
};
