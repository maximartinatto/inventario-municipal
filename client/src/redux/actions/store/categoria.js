import axios from "axios";

export const fetchCategorias = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_CATEGORIAS_REQUEST" });
    const { data } = await axios.get("/api/store/categorias");
    dispatch({ type: "FETCH_CATEGORIAS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_CATEGORIAS_FAIL", payload: error.message });
  }
};

export const fetchCategoriaById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_CATEGORIA_REQUEST" });
    const { data } = await axios.get(`/api/store/categoria/${id}`);
    dispatch({ type: "FETCH_CATEGORIA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_CATEGORIA_FAIL", payload: error.message });
  }
};

export const createCategoria = (categoria) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_CATEGORIA_REQUEST" });
    const { data } = await axios.post("/api/store/categoria", categoria);
    dispatch({ type: "CREATE_CATEGORIA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "CREATE_CATEGORIA_FAIL", payload: error.message });
  }
};

export const updateCategoria = (id, categoria) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_CATEGORIA_REQUEST" });
    const { data } = await axios.put(`/api/store/categoria/${id}`, categoria);
    dispatch({ type: "UPDATE_CATEGORIA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "UPDATE_CATEGORIA_FAIL", payload: error.message });
  }
};

export const deleteCategoria = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_CATEGORIA_REQUEST" });
    await axios.delete(`/api/store/categoria/${id}`);
    dispatch({ type: "DELETE_CATEGORIA_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_CATEGORIA_FAIL", payload: error.message });
  }
};
