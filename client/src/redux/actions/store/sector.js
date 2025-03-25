import axios from "axios";

export const fetchSectores = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_SECTORES_REQUEST" });
    const { data } = await axios.get("/api/store/sectores");
    dispatch({ type: "FETCH_SECTORES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_SECTORES_FAIL", payload: error.message });
  }
};

export const fetchSectorById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_SECTOR_REQUEST" });
    const { data } = await axios.get(`/api/store/sector/${id}`);
    dispatch({ type: "FETCH_SECTOR_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_SECTOR_FAIL", payload: error.message });
  }
};

export const createSector = (sector) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_SECTOR_REQUEST" });
    const { data } = await axios.post("/api/store/sector", sector);
    dispatch({ type: "CREATE_SECTOR_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "CREATE_SECTOR_FAIL", payload: error.message });
  }
};

export const updateSector = (id, sector) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_SECTOR_REQUEST" });
    const { data } = await axios.put(`/api/store/sector/${id}`, sector);
    dispatch({ type: "UPDATE_SECTOR_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "UPDATE_SECTOR_FAIL", payload: error.message });
  }
};

export const deleteSector = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_SECTOR_REQUEST" });
    await axios.delete(`/api/store/sector/${id}`);
    dispatch({ type: "DELETE_SECTOR_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_SECTOR_FAIL", payload: error.message });
  }
};
