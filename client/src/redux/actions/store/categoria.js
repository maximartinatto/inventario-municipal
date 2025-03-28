import axios from "axios";

export const getCategorias = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_CATEGORIAS" });
    const { data } = await axios.get("/api/store/categorias");
    dispatch({ type: "GET_CATEGORIAS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_CATEGORIAS_FAIL", payload: error.message });
  }
};

export const getCategoriaById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_CATEGORIA" });
    const { data } = await axios.get(`/api/store/categoria/${id}`);
    dispatch({ type: "GET_CATEGORIA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_CATEGORIA_FAIL", payload: error.message });
  }
};
export const getCategoriasDispositivos = () => {
  return async (dispatch) => {
      try {
          const response = await axios.get(`/api/store/categoria/${id}`); // Endpoint correcto
          dispatch({
              type: "GET_CATEGORIA_DISPOSITIVO",
              payload: response.data,
          });
      } catch (error) {
          dispatch({
              type: GET_CATEGORIA_DISPOSITIVO_ERROR,
              payload: error.message,
          });
      }
  };
};

export const createCategoria = (categoria) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_CATEGORIA" });
    const { data } = await axios.post("/api/store/categoria", categoria);
    dispatch({ type: "CREATE_CATEGORIA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "CREATE_CATEGORIA_FAIL", payload: error.message });
  }
};
export const clearCategoriaDispositivo = () => {
  return (dispatch) => {
      dispatch({ type: "CLEAR_CATEGORIA_DISPOSITIVO" });
  };
};

export const updateCategoria = (id, categoria) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_CATEGORIA" });
    const { data } = await axios.put(`/api/store/categoria/${id}`, categoria);
    dispatch({ type: "UPDATE_CATEGORIA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "UPDATE_CATEGORIA_FAIL", payload: error.message });
  }
};

export const deleteCategoria = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_CATEGORIA" });
    await axios.delete(`/api/store/categoria/${id}`);
    dispatch({ type: "DELETE_CATEGORIA_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_CATEGORIA_FAIL", payload: error.message });
  }
};
